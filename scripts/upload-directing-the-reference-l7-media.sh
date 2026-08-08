#!/usr/bin/env bash
# Prepare and upload only the approved Remote Startup Senpai comparison derivatives.
set -euo pipefail

SOURCE_ROOT="/Users/computer/Library/Mobile Documents/com~apple~CloudDocs/sync (2026Q1)/5rps-film/5rps-seisaku/tmp/l7"
DESTINATION_ROOT="gs://5rps-film-public-media/20260808_directing-the-reference"
PUBLIC_ROOT="https://storage.googleapis.com/5rps-film-public-media/20260808_directing-the-reference"
CACHE_CONTROL="public,max-age=31536000,immutable"
EXPECTED_PROJECT="akiyamasho-portfolio"
MEDIA_WORK="$(mktemp -d /tmp/director-blog-l7.XXXXXX)"

cleanup() {
  case "$MEDIA_WORK" in
    /tmp/director-blog-l7.*)
      find "$MEDIA_WORK" -type f -delete
      rmdir "$MEDIA_WORK"
      ;;
  esac
}
trap cleanup EXIT

for required_command in cp curl cwebp ffmpeg ffprobe gcloud shasum; do
  command -v "$required_command" >/dev/null
done

test "$(gcloud config get-value project 2>/dev/null)" = "$EXPECTED_PROJECT"
test -n "$(gcloud auth list --filter=status:ACTIVE --format='value(account)')"

cp \
  "$SOURCE_ROOT/02_seedance_first15/runs/seedance25_video_all_keyframes/l7_first15_seedance25_rough-vs-render_original-audio.mp4" \
  "$MEDIA_WORK/rough-vs-finished-source.mp4"
cp "$SOURCE_ROOT/subbed.mp4" "$MEDIA_WORK/upscale-source.mp4"
cp "$SOURCE_ROOT/upscaled_but_not_best.mp4" "$MEDIA_WORK/upscale-result.mp4"

ffmpeg -hide_banner -loglevel error -y \
  -i "$MEDIA_WORK/rough-vs-finished-source.mp4" \
  -vf "fps=30,scale=1080:960:flags=lanczos" \
  -map 0:v:0 -map 0:a:0 -t 15.000 \
  -c:v libx264 -crf 21 -preset slow -pix_fmt yuv420p \
  -c:a copy -movflags +faststart \
  "$MEDIA_WORK/remote-startup-rough-vs-finished.mp4"

ffmpeg -hide_banner -loglevel error -y \
  -i "$MEDIA_WORK/upscale-source.mp4" \
  -i "$MEDIA_WORK/upscale-result.mp4" \
  -filter_complex \
  "[0:v]scale=540:960:flags=lanczos,setsar=1[left];[1:v]scale=540:960:flags=lanczos,setsar=1[right];[left][right]hstack=inputs=2[v]" \
  -map "[v]" -map 0:a:0 -t 17.533 -r 30 \
  -c:v libx264 -crf 21 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  "$MEDIA_WORK/remote-startup-source-vs-upscale.mp4"

ffmpeg -hide_banner -loglevel error -y -ss 9.5 \
  -i "$MEDIA_WORK/remote-startup-rough-vs-finished.mp4" \
  -frames:v 1 "$MEDIA_WORK/rough-poster.png"
cwebp -quiet -q 82 -metadata none \
  "$MEDIA_WORK/rough-poster.png" \
  -o "$MEDIA_WORK/remote-startup-rough-vs-finished-poster.webp"

ffmpeg -hide_banner -loglevel error -y -ss 9.0 \
  -i "$MEDIA_WORK/remote-startup-source-vs-upscale.mp4" \
  -frames:v 1 "$MEDIA_WORK/upscale-poster.png"
cwebp -quiet -q 82 -metadata none \
  "$MEDIA_WORK/upscale-poster.png" \
  -o "$MEDIA_WORK/remote-startup-source-vs-upscale-poster.webp"

verify_hash() {
  local file_path="$1"
  local expected_hash="$2"
  local actual_hash
  actual_hash="$(shasum -a 256 "$file_path" | cut -d ' ' -f 1)"
  if [[ "$actual_hash" != "$expected_hash" ]]; then
    echo "Hash mismatch for $file_path" >&2
    echo "Expected: $expected_hash" >&2
    echo "Actual:   $actual_hash" >&2
    exit 1
  fi
}

verify_hash \
  "$MEDIA_WORK/remote-startup-rough-vs-finished.mp4" \
  "9802f4a9bd08b35bf8a1dc232a486621e30b493bdf670c7716e59d1ff8766a88"
verify_hash \
  "$MEDIA_WORK/remote-startup-rough-vs-finished-poster.webp" \
  "bc3b2b7afcfc77c7b58899bf9129acdd26d0e0463f2dbce47fa7ebe25dbec26d"
verify_hash \
  "$MEDIA_WORK/remote-startup-source-vs-upscale.mp4" \
  "c19e5be98b59d0a010b4dd9d9333efa89e402ff453df03cd6292ab158ea380d7"
verify_hash \
  "$MEDIA_WORK/remote-startup-source-vs-upscale-poster.webp" \
  "812a51f37b5bd45cd9665170f184022c39a8306f0f551d83351be0933d78eb36"

ffprobe -v error -show_entries \
  stream=codec_name,width,height,r_frame_rate:format=duration,size \
  -of default=noprint_wrappers=1 \
  "$MEDIA_WORK/remote-startup-rough-vs-finished.mp4"
ffprobe -v error -show_entries \
  stream=codec_name,width,height,r_frame_rate:format=duration,size \
  -of default=noprint_wrappers=1 \
  "$MEDIA_WORK/remote-startup-source-vs-upscale.mp4"

gcloud storage cp \
  "$MEDIA_WORK/remote-startup-rough-vs-finished.mp4" \
  "$DESTINATION_ROOT/remote-startup-rough-vs-finished-9802f4a9bd08.mp4" \
  --cache-control="$CACHE_CONTROL" --content-type="video/mp4"
gcloud storage cp \
  "$MEDIA_WORK/remote-startup-rough-vs-finished-poster.webp" \
  "$DESTINATION_ROOT/remote-startup-rough-vs-finished-poster-bc3b2b7afcfc.webp" \
  --cache-control="$CACHE_CONTROL" --content-type="image/webp"
gcloud storage cp \
  "$MEDIA_WORK/remote-startup-source-vs-upscale.mp4" \
  "$DESTINATION_ROOT/remote-startup-source-vs-upscale-c19e5be98b59.mp4" \
  --cache-control="$CACHE_CONTROL" --content-type="video/mp4"
gcloud storage cp \
  "$MEDIA_WORK/remote-startup-source-vs-upscale-poster.webp" \
  "$DESTINATION_ROOT/remote-startup-source-vs-upscale-poster-812a51f37b5b.webp" \
  --cache-control="$CACHE_CONTROL" --content-type="image/webp"

for object_name in \
  remote-startup-rough-vs-finished-9802f4a9bd08.mp4 \
  remote-startup-rough-vs-finished-poster-bc3b2b7afcfc.webp \
  remote-startup-source-vs-upscale-c19e5be98b59.mp4 \
  remote-startup-source-vs-upscale-poster-812a51f37b5b.webp; do
  curl -fsSI "$PUBLIC_ROOT/$object_name" >/dev/null
done

echo "Uploaded and verified Remote Startup Senpai derivatives at $PUBLIC_ROOT/"
