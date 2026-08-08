#!/usr/bin/env bash

set -euo pipefail

readonly project="akiyamasho-portfolio"
readonly bucket="gs://5rps-film-public-media"
readonly prefix="20230927_aks-nginx-ingress-static-ip"
readonly cache_control="public,max-age=31536000,immutable"
readonly compressor="/Users/computer/Desktop/dev/tools/Scripts/compressPhoto.sh"

readonly source_create_ip="https://cdn-images-1.medium.com/max/1024/1*n1Mb21yYfG3jZm6KpjmJkg.png"
readonly source_load_balancer="https://cdn-images-1.medium.com/max/1024/1*DRRJby9W0OTJNs2Tn1mp6w.png"

readonly object_create_ip="create-public-ip-7ca3db04d465.png"
readonly object_load_balancer="load-balancer-ip-2b631fca14fd.png"

work_dir=$(mktemp -d "${TMPDIR:-/tmp}/aks-nginx-static-ip.XXXXXX")
trap 'rm -rf "$work_dir"' EXIT HUP INT TERM

command -v curl >/dev/null
command -v gcloud >/dev/null
test -x "$compressor"

active_project=$(gcloud config get-value project 2>/dev/null)
if [[ "$active_project" != "$project" ]]; then
    printf 'Expected gcloud project %s, found %s\n' "$project" "$active_project" >&2
    exit 1
fi

curl --fail --location --compressed "$source_create_ip" \
    --output "$work_dir/create-public-ip.png"
curl --fail --location --compressed "$source_load_balancer" \
    --output "$work_dir/load-balancer-ip.png"

# Explicit dimensions preserve the originals and work around empty-array
# handling in the compression helper on the system Bash version.
"$compressor" "$work_dir/create-public-ip.png" '1024x742>'
"$compressor" "$work_dir/load-balancer-ip.png" '1024x210>'

create_hash=$(shasum -a 256 "$work_dir/create-public-ip-compressed.png" | awk '{print $1}')
load_balancer_hash=$(shasum -a 256 "$work_dir/load-balancer-ip-compressed.png" | awk '{print $1}')

[[ "$create_hash" == "7ca3db04d465eb27994789258e7a7ee1fab520b3a0a7058b200b1f14833a73f5" ]]
[[ "$load_balancer_hash" == "2b631fca14fde76bd4a6dac08636a121c9e96d0e547f19a8fd0b6535b9233d45" ]]

printf '%s -> %s/%s/%s\n' \
    "$work_dir/create-public-ip-compressed.png" "$bucket" "$prefix" "$object_create_ip"
printf '%s -> %s/%s/%s\n' \
    "$work_dir/load-balancer-ip-compressed.png" "$bucket" "$prefix" "$object_load_balancer"

gcloud storage cp "$work_dir/create-public-ip-compressed.png" \
    "$bucket/$prefix/$object_create_ip" \
    --content-type=image/png \
    --cache-control="$cache_control"
gcloud storage cp "$work_dir/load-balancer-ip-compressed.png" \
    "$bucket/$prefix/$object_load_balancer" \
    --content-type=image/png \
    --cache-control="$cache_control"
