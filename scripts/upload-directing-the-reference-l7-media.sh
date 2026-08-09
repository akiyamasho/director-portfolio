#!/usr/bin/env bash
# Prepare and upload only the approved Remote Startup Senpai research derivatives.
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

for required_command in cp curl cwebp ffmpeg ffprobe gcloud magick shasum; do
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
  -i "$MEDIA_WORK/upscale-source.mp4" \
  -vf "scale=720:1280:flags=lanczos" \
  -c:v libx264 -crf 22 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  "$MEDIA_WORK/remote-startup-finished.mp4"

ffmpeg -hide_banner -loglevel error -y -ss 9.5 \
  -i "$MEDIA_WORK/remote-startup-finished.mp4" \
  -frames:v 1 "$MEDIA_WORK/finished-poster.png"
cwebp -quiet -q 82 -metadata none \
  "$MEDIA_WORK/finished-poster.png" \
  -o "$MEDIA_WORK/remote-startup-finished-poster.webp"

prepare_image() {
  local relative_path="$1"
  local output_name="$2"
  magick "$SOURCE_ROOT/$relative_path" -auto-orient -strip -colorspace sRGB \
    -resize '1400x1400>' -define webp:method=6 -quality 80 \
    "$MEDIA_WORK/$output_name"
}

prepare_image "01_char/hiro/03_char_design.png" "hiro-character-design.webp"
prepare_image "01_char/meiko/03_char_design.png" "meiko-character-design.webp"
prepare_image "02_seedance_first15/keyframe_render/rough_frames/performance_contact.png" "rough-performance.webp"
prepare_image "02_seedance_first15/runs/seedance20/qa_contact_sheet.png" "video-output.webp"
prepare_image "02_seedance_first15/runs/seedance20_storyboard_audio/10_rough_storyboard_7beats.png" "storyboard.webp"
prepare_image "02_seedance_first15/runs/seedance20_storyboard_audio/qa_contact_sheet_7beats.png" "storyboard-output.webp"
prepare_image "02_seedance_first15/keyframe_render/rendered_keyframes_performance_contact_sheet.png" "rendered-keyframes.webp"
prepare_image "02_seedance_first15/runs/seedance25/qa_contact_sheet.png" "model-output.webp"
prepare_image "02_seedance_first15/runs/seedance25_video_all_keyframes/qa_contact_sheet_chronological.png" "all-keyframes-output.webp"

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
verify_hash \
  "$MEDIA_WORK/remote-startup-finished.mp4" \
  "4fa333a8f82609f6d1d899cac27879f200a1ec5165e46d487ca07e4ac2744da3"
verify_hash \
  "$MEDIA_WORK/remote-startup-finished-poster.webp" \
  "0f481eed86fe63a112d95bbffde59fa3ad8657ed89a25c84c1147aa0c0f92970"
verify_hash "$MEDIA_WORK/hiro-character-design.webp" \
  "a9baddbf7003389efd318789b73f64c8e534d7b7f002a7b127d4fe76641cded9"
verify_hash "$MEDIA_WORK/meiko-character-design.webp" \
  "4d9e3fbba1bc2f4bb95d7e2421c9a95103ecf457678c5b45ff376541d11c614d"
verify_hash "$MEDIA_WORK/rough-performance.webp" \
  "d68322b9f8dbe6c3bc98fc5d24d147bf23da4ed144e1d1bd05e58eed85ae9822"
verify_hash "$MEDIA_WORK/video-output.webp" \
  "748a2b4d7aee0a8dea0d8498a2cfab578c0cbec212a155eb0eba0731532561c6"
verify_hash "$MEDIA_WORK/storyboard.webp" \
  "f1fbff680a57233b3b1d8b732f4a80dc3084bd58477fd2e8b935d9a5a34ecab7"
verify_hash "$MEDIA_WORK/storyboard-output.webp" \
  "3594ed3132fe9e0d7f797fe9b9a7a93a19853b709767ed28d4301f389fee327f"
verify_hash "$MEDIA_WORK/rendered-keyframes.webp" \
  "361220a2c6d2687fd702334ace7ae9906335d6a8ce9ee3f3eda06f055671d529"
verify_hash "$MEDIA_WORK/model-output.webp" \
  "3324cd00c3167e9fdedcdeddd87690cd8f84b738338d216dee6877fb8ee8732c"
verify_hash "$MEDIA_WORK/all-keyframes-output.webp" \
  "ac97e6a986cb913c5390db91fa6731327dcf78d8df739517ec8997f3b97f5827"

ffprobe -v error -show_entries \
  stream=codec_name,width,height,r_frame_rate:format=duration,size \
  -of default=noprint_wrappers=1 \
  "$MEDIA_WORK/remote-startup-rough-vs-finished.mp4"
ffprobe -v error -show_entries \
  stream=codec_name,width,height,r_frame_rate:format=duration,size \
  -of default=noprint_wrappers=1 \
  "$MEDIA_WORK/remote-startup-source-vs-upscale.mp4"
ffprobe -v error -show_entries \
  stream=codec_name,width,height,r_frame_rate:format=duration,size \
  -of default=noprint_wrappers=1 \
  "$MEDIA_WORK/remote-startup-finished.mp4"

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

gcloud storage cp \
  "$MEDIA_WORK/remote-startup-finished.mp4" \
  "$DESTINATION_ROOT/remote-startup-finished-4fa333a8f826.mp4" \
  --cache-control="$CACHE_CONTROL" --content-type="video/mp4"
gcloud storage cp \
  "$MEDIA_WORK/remote-startup-finished-poster.webp" \
  "$DESTINATION_ROOT/remote-startup-finished-poster-0f481eed86fe.webp" \
  --cache-control="$CACHE_CONTROL" --content-type="image/webp"

IMAGE_UPLOADS=(
  "hiro-character-design.webp|hiro-character-design-a9baddbf7003.webp"
  "meiko-character-design.webp|meiko-character-design-4d9e3fbba1bc.webp"
  "rough-performance.webp|rough-performance-d68322b9f8db.webp"
  "video-output.webp|video-output-748a2b4d7aee.webp"
  "storyboard.webp|storyboard-f1fbff680a57.webp"
  "storyboard-output.webp|storyboard-output-3594ed3132fe.webp"
  "rendered-keyframes.webp|rendered-keyframes-361220a2c6d2.webp"
  "model-output.webp|model-output-3324cd00c316.webp"
  "all-keyframes-output.webp|all-keyframes-output-ac97e6a986cb.webp"
)

for asset in "${IMAGE_UPLOADS[@]}"; do
  IFS='|' read -r local_name object_name <<< "$asset"
  gcloud storage cp \
    "$MEDIA_WORK/$local_name" "$DESTINATION_ROOT/$object_name" \
    --cache-control="$CACHE_CONTROL" --content-type="image/webp"
done

for object_name in \
  remote-startup-rough-vs-finished-9802f4a9bd08.mp4 \
  remote-startup-rough-vs-finished-poster-bc3b2b7afcfc.webp \
  remote-startup-source-vs-upscale-c19e5be98b59.mp4 \
  remote-startup-source-vs-upscale-poster-812a51f37b5b.webp \
  remote-startup-finished-4fa333a8f826.mp4 \
  remote-startup-finished-poster-0f481eed86fe.webp \
  hiro-character-design-a9baddbf7003.webp \
  meiko-character-design-4d9e3fbba1bc.webp \
  rough-performance-d68322b9f8db.webp \
  video-output-748a2b4d7aee.webp \
  storyboard-f1fbff680a57.webp \
  storyboard-output-3594ed3132fe.webp \
  rendered-keyframes-361220a2c6d2.webp \
  model-output-3324cd00c316.webp \
  all-keyframes-output-ac97e6a986cb.webp; do
  curl -fsSI "$PUBLIC_ROOT/$object_name" >/dev/null
done

echo "Uploaded and verified Remote Startup Senpai derivatives at $PUBLIC_ROOT/"
