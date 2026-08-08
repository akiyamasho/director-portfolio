#!/usr/bin/env bash

set -euo pipefail

readonly project="akiyamasho-portfolio"
readonly bucket="gs://5rps-film-public-media"
readonly public_base="https://storage.googleapis.com/5rps-film-public-media"
readonly prefix="20201014_journey-anime-series"
readonly cache_control="public,max-age=31536000,immutable"

for command_name in curl cwebp gcloud shasum; do
    command -v "$command_name" >/dev/null 2>&1 || {
        printf 'Required command is missing: %s\n' "$command_name" >&2
        exit 1
    }
done

active_project=$(gcloud config get-value project 2>/dev/null)
if [[ "$active_project" != "$project" ]]; then
    printf 'Expected gcloud project %s, found %s\n' "$project" "$active_project" >&2
    exit 1
fi

task_tmp=$(mktemp -d "${TMPDIR:-/tmp}/medium-journey.XXXXXX")
trap 'rm -rf "$task_tmp"' EXIT

curl -L --fail --silent --show-error \
    'https://cdn-images-1.medium.com/max/1024/1*C-W7Qt-yGVcjTHm2kF8Log.jpeg' \
    -o "$task_tmp/pilot-poster.jpeg"
curl -L --fail --silent --show-error \
    'https://cdn-images-1.medium.com/max/892/1*9LL3dQ0iXWMk_lyk0xMvfg.png' \
    -o "$task_tmp/commercial-storyboard.png"
curl -L --fail --silent --show-error \
    'https://cdn-images-1.medium.com/max/1024/1*IwsY7YszBlxjdbT6H13Paw.png' \
    -o "$task_tmp/pitch-bible.png"
curl -L --fail --silent --show-error \
    'https://cdn-images-1.medium.com/max/1024/1*-ItJkh54lXwySzMOLJFoLw.jpeg' \
    -o "$task_tmp/episode-1-2-storyboards.jpeg"

cwebp -quiet -q 86 -m 6 -metadata none "$task_tmp/pilot-poster.jpeg" \
    -o "$task_tmp/pilot-poster-6500d0042f0f.webp"
cwebp -quiet -q 88 -m 6 -metadata none "$task_tmp/commercial-storyboard.png" \
    -o "$task_tmp/commercial-storyboard-4f5534e1b809.webp"
cwebp -quiet -q 88 -m 6 -metadata none "$task_tmp/pitch-bible.png" \
    -o "$task_tmp/pitch-bible-ae19d1e810b3.webp"
cwebp -quiet -q 88 -m 6 -metadata none "$task_tmp/episode-1-2-storyboards.jpeg" \
    -o "$task_tmp/episode-1-2-storyboards-a87521842106.webp"

readonly media_manifest=(
    "pilot-poster-6500d0042f0f.webp:6500d0042f0f40590bb6704994378f137d9d6dcd8bf2a334b39434bbb93c5cd2"
    "commercial-storyboard-4f5534e1b809.webp:4f5534e1b809e98f58ea490bfb81aba7a8390a45486478c255d6e3c61283734e"
    "pitch-bible-ae19d1e810b3.webp:ae19d1e810b3b97f54a85003c6fd19a4287b3016602e1e7266f5b45433db7bc2"
    "episode-1-2-storyboards-a87521842106.webp:a875218421065a70c189a1e802ec407375d333c3e434263365dbb54b00681448"
)

for entry in "${media_manifest[@]}"; do
    name=${entry%%:*}
    expected_hash=${entry#*:}
    actual_hash=$(shasum -a 256 "$task_tmp/$name" | awk '{print $1}')
    if [[ "$actual_hash" != "$expected_hash" ]]; then
        printf 'Hash mismatch for %s\n' "$name" >&2
        exit 1
    fi

    gcloud storage cp \
        --cache-control="$cache_control" \
        --content-type="image/webp" \
        "$task_tmp/$name" "$bucket/$prefix/$name"

    curl --fail --silent --show-error --head \
        "$public_base/$prefix/$name" >/dev/null
    printf '%s/%s/%s\n' "$public_base" "$prefix" "$name"
done
