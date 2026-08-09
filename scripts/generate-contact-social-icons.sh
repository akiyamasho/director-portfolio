#!/usr/bin/env bash
# Rebuild the Contact page's themed brand marks from the approved source icons.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="$ROOT/src/assets/sns"
WORK="$(mktemp -d /tmp/director-contact-icons.XXXXXX)"

cleanup() {
  case "$WORK" in
    /tmp/director-contact-icons.*)
      find "$WORK" -type f -delete
      rmdir "$WORK"
      ;;
  esac
}
trap cleanup EXIT

command -v magick >/dev/null

magick "$SOURCE/instagram.png" -background black -alpha remove -alpha off \
  -colorspace gray -threshold 90% "$WORK/instagram-mask.png"
magick -size 192x192 'gradient:#833ab4-#fd1d1d' -alpha set \
  \( "$WORK/instagram-mask.png" -alpha copy \) \
  -compose DstIn -composite \
  "$SOURCE/contact-instagram.png"

magick "$SOURCE/twitter.png" -background black -alpha remove -alpha off \
  -colorspace gray -threshold 82% "$WORK/twitter-mask.png"
magick -size 192x192 'xc:#1da1f2' -alpha set \
  \( "$WORK/twitter-mask.png" -alpha copy \) \
  -compose DstIn -composite \
  "$SOURCE/contact-twitter.png"

magick "$SOURCE/github.png" -background black -alpha remove -alpha off \
  -colorspace gray -threshold 82% "$WORK/github-mask.png"
magick -size 192x192 'xc:#f5f5f5' -alpha set \
  \( "$WORK/github-mask.png" -alpha copy \) \
  -compose DstIn -composite \
  "$SOURCE/contact-github.png"

magick "$SOURCE/imdb.png" -alpha background -colorspace gray \
  -threshold 42% -negate "$WORK/imdb-mask.png"
magick -size 192x192 xc:none -fill '#f5c518' \
  -draw 'roundrectangle 11,52 181,140 10,10' "$WORK/imdb-panel.png"
magick -size 192x192 xc:black -alpha set \
  \( "$WORK/imdb-mask.png" -alpha copy \) \
  -compose DstIn -composite "$WORK/imdb-wordmark.png"
magick "$WORK/imdb-panel.png" "$WORK/imdb-wordmark.png" \
  -compose over -composite "$SOURCE/contact-imdb.png"

for icon in \
  "$SOURCE/contact-instagram.png" \
  "$SOURCE/contact-twitter.png" \
  "$SOURCE/contact-github.png" \
  "$SOURCE/contact-imdb.png"; do
  magick "$icon" -strip -define png:compression-level=9 "$icon"
done
