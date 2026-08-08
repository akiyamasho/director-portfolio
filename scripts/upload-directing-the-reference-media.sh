#!/usr/bin/env bash
# Prepare and upload only the approved public derivatives used by the article.
set -euo pipefail

SOURCE_ROOT="/Users/computer/Library/Mobile Documents/com~apple~CloudDocs/sync (2026Q1)/5rps-film/5rps-seisaku/tmp/brighter/03_seedance_ab"
DESTINATION_ROOT="gs://5rps-film-public-media/20260808_directing-the-reference"
PUBLIC_ROOT="https://storage.googleapis.com/5rps-film-public-media/20260808_directing-the-reference"
CACHE_CONTROL="public,max-age=31536000,immutable"
EXPECTED_PROJECT="akiyamasho-portfolio"
MEDIA_WORK="$(mktemp -d /tmp/director-blog-media.XXXXXX)"

cleanup() {
  case "$MEDIA_WORK" in
    /tmp/director-blog-media.*)
      find "$MEDIA_WORK" -type f -delete
      rmdir "$MEDIA_WORK"
      ;;
  esac
}
trap cleanup EXIT

for required_command in cp curl ffmpeg ffprobe gcloud magick shasum; do
  command -v "$required_command" >/dev/null
done

test "$(gcloud config get-value project 2>/dev/null)" = "$EXPECTED_PROJECT"
test -n "$(gcloud auth list --filter=status:ACTIVE --format='value(account)')"

# source path | immutable object name | expected SHA-256 prefix
VIDEO_ASSETS=(
  "qa/input_vs_dense_top_bottom_15s.mp4|source-overview-b3f5d30a886d.mp4|b3f5d30a886d"
  "qa/compare_a_input_output_15s.mp4|comparison-a-0ee5711b1760.mp4|0ee5711b1760"
  "qa/compare_b_text_output_15s.mp4|comparison-b-4cbebe9f7ca5.mp4|4cbebe9f7ca5"
  "qa/compare_c_text_output_15s.mp4|comparison-c-94a46ad0699d.mp4|94a46ad0699d"
  "qa/compare_d_storyboard_output_15s.mp4|comparison-d-d24a3202f368.mp4|d24a3202f368"
  "qa/compare_e_input_output_15s.mp4|comparison-e-cfef20095acb.mp4|cfef20095acb"
  "qa/compare_f_input_output_15s.mp4|comparison-f-0f5cbdff5c9e.mp4|0f5cbdff5c9e"
)

IMAGE_ASSETS=(
  "qa/input_vs_dense_top_bottom_poster.jpg|source-overview-poster-8774293eefc4.webp|8774293eefc4"
  "qa/compare_a_input_output_poster.jpg|comparison-a-poster-08fbfc8c7e42.webp|08fbfc8c7e42"
  "qa/compare_b_text_output_poster.jpg|comparison-b-poster-5aad9a549599.webp|5aad9a549599"
  "qa/compare_c_text_output_poster.jpg|comparison-c-poster-1f8df85aac0f.webp|1f8df85aac0f"
  "qa/compare_d_storyboard_output_poster.jpg|comparison-d-poster-a274f4dfcaf9.webp|a274f4dfcaf9"
  "qa/compare_e_input_output_poster.jpg|comparison-e-poster-399d466aedc0.webp|399d466aedc0"
  "qa/compare_f_input_output_poster.jpg|comparison-f-poster-eea21d75f537.webp|eea21d75f537"
  "qa/hero_final.jpg|hero-e3e8b7e81730.webp|e3e8b7e81730"
  "_shared/legacy_jpeg_refs/20_main.jpg|original-main-a26ae2a99bf9.webp|a26ae2a99bf9"
  "_shared/legacy_jpeg_refs/21_magician.jpg|original-magician-0b8333da8fc7.webp|0b8333da8fc7"
  "_shared/legacy_jpeg_refs/22_look1_aqua.jpg|original-look1-fe6993411da3.webp|fe6993411da3"
  "_shared/legacy_jpeg_refs/23_look3_noir.jpg|original-look3-29bcace05482.webp|29bcace05482"
  "_shared/legacy_jpeg_refs/24_look4_moonlit.jpg|original-look4-1847bf4111c5.webp|1847bf4111c5"
  "_shared/refined_character_refs/20_face_identity.png|refined-identity-6a2149dad546.webp|6a2149dad546"
  "_shared/refined_character_refs/21_main_outfit.png|refined-main-c3de8affd4dd.webp|c3de8affd4dd"
  "_shared/refined_character_refs/22_magician_outfit.png|refined-magician-ed11cf98ca9a.webp|ed11cf98ca9a"
  "_shared/refined_character_refs/23_look1_outfit.png|refined-look1-ec301c38afac.webp|ec301c38afac"
  "_shared/refined_character_refs/24_look3_outfit.png|refined-look3-6f1affb311e0.webp|6f1affb311e0"
  "_shared/refined_character_refs/25_look4_outfit.png|refined-look4-67239d618238.webp|67239d618238"
)

verify_hash() {
  local file_path="$1"
  local expected_prefix="$2"
  local actual_prefix
  actual_prefix="$(shasum -a 256 "$file_path" | cut -c1-12)"
  if [[ "$actual_prefix" != "$expected_prefix" ]]; then
    echo "Hash mismatch for $file_path: expected $expected_prefix, got $actual_prefix" >&2
    exit 1
  fi
}

for asset in "${VIDEO_ASSETS[@]}"; do
  IFS='|' read -r relative_path object_name expected_hash <<< "$asset"
  source_path="$SOURCE_ROOT/$relative_path"
  input_path="$MEDIA_WORK/input-$object_name"
  output_path="$MEDIA_WORK/$object_name"
  test -f "$source_path"
  cp "$source_path" "$input_path"
  ffmpeg -hide_banner -loglevel error -y -i "$input_path" -map 0 -c copy \
    -movflags +faststart "$output_path"
  ffprobe -v error -select_streams v:0 \
    -show_entries stream=codec_name,width,height -show_entries format=duration \
    -of default=noprint_wrappers=1 "$output_path"
  verify_hash "$output_path" "$expected_hash"
  gcloud storage cp "$output_path" "$DESTINATION_ROOT/$object_name" \
    --cache-control="$CACHE_CONTROL" --content-type="video/mp4"
  curl -fsSI "$PUBLIC_ROOT/$object_name" >/dev/null
done

for asset in "${IMAGE_ASSETS[@]}"; do
  IFS='|' read -r relative_path object_name expected_hash <<< "$asset"
  source_path="$SOURCE_ROOT/$relative_path"
  input_path="$MEDIA_WORK/input-$object_name"
  output_path="$MEDIA_WORK/$object_name"
  test -f "$source_path"
  cp "$source_path" "$input_path"
  magick "$input_path" -auto-orient -strip -colorspace sRGB \
    -define webp:method=6 -quality 82 "$output_path"
  verify_hash "$output_path" "$expected_hash"
  gcloud storage cp "$output_path" "$DESTINATION_ROOT/$object_name" \
    --cache-control="$CACHE_CONTROL" --content-type="image/webp"
  curl -fsSI "$PUBLIC_ROOT/$object_name" >/dev/null
done

echo "Uploaded and verified compressed public derivatives at $PUBLIC_ROOT/"
