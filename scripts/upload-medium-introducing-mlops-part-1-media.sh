#!/usr/bin/env bash
# Rebuild and upload the two authored diagrams retained from the Medium article.
set -euo pipefail

DESTINATION_ROOT="gs://5rps-film-public-media/20231223_introducing-mlops-part-1"
PUBLIC_ROOT="https://storage.googleapis.com/5rps-film-public-media/20231223_introducing-mlops-part-1"
CACHE_CONTROL="public,max-age=31536000,immutable"
EXPECTED_PROJECT="akiyamasho-portfolio"
MEDIA_WORK="$(mktemp -d /tmp/medium-mlops-part-1.XXXXXX)"

cleanup() {
  case "$MEDIA_WORK" in
    /tmp/medium-mlops-part-1.*)
      find "$MEDIA_WORK" -type f -delete
      rmdir "$MEDIA_WORK"
      ;;
  esac
}
trap cleanup EXIT

for required_command in curl gcloud magick shasum; do
  command -v "$required_command" >/dev/null
done

test "$(gcloud config get-value project 2>/dev/null)" = "$EXPECTED_PROJECT"
test -n "$(gcloud auth list --filter=status:ACTIVE --format='value(account)')"

prepare_image() {
  local source_url="$1"
  local source_name="$2"
  local expected_source_hash="$3"
  local object_name="$4"
  local expected_derivative_hash="$5"
  local source_path="$MEDIA_WORK/$source_name"
  local derivative_path="$MEDIA_WORK/$object_name"

  curl -fsSL --compressed "$source_url" -o "$source_path"
  test "$(shasum -a 256 "$source_path" | cut -d ' ' -f 1)" = "$expected_source_hash"
  magick "$source_path" -auto-orient -strip -colorspace sRGB \
    -define webp:lossless=true -define webp:method=6 "$derivative_path"
  test "$(shasum -a 256 "$derivative_path" | cut -c1-12)" = "$expected_derivative_hash"

  gcloud storage cp "$derivative_path" "$DESTINATION_ROOT/$object_name" \
    --cache-control="$CACHE_CONTROL" --content-type="image/webp"

  local headers="$MEDIA_WORK/$object_name.headers"
  curl -fsSI "$PUBLIC_ROOT/$object_name" -o "$headers"
  grep -qi '^content-type: image/webp' "$headers"
  grep -qi '^cache-control: public,max-age=31536000,immutable' "$headers"
  grep -qi '^content-length: ' "$headers"
}

prepare_image \
  "https://miro.medium.com/v2/resize:fit:1400/1*EFi1Tnsl0dhiLz4_BbAeng.png" \
  "notebook-api-source.png" \
  "3a112555cb28ed3030904720c5f8894438a24128119ad05dcb4ba82d2e1e5131" \
  "notebook-api-e105030efca5.webp" \
  "e105030efca5"

prepare_image \
  "https://miro.medium.com/v2/resize:fit:1400/1*IBJyNmcM1Qa2bvZqzWXtGg.png" \
  "three-phases-source.png" \
  "a7dc8315791fcd58e3c400e42e51fbb8c0fffbe8e915125ff72bf8187dc2bf8d" \
  "three-phases-46c2cf94c3ba.webp" \
  "46c2cf94c3ba"

echo "Uploaded and verified the two compressed authored diagrams at $PUBLIC_ROOT/"
