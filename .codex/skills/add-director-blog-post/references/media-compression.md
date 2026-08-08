# Media compression

Create web derivatives for selected media while preserving every source file.
Work only in a fresh temporary directory outside the repository and input folder.

## Preferred local tools

```text
/Users/computer/Desktop/dev/tools/Scripts/compressPhoto.sh
/Users/computer/Desktop/dev/tools/Scripts/convertVideoForWeb.sh
```

Before use, verify the script is executable and `magick`/`convert`, `ffmpeg`, and
`ffprobe` are available. Do not install missing tools automatically.

## Images

Copy selected images to the temporary directory with simple lowercase names, then
run `compressPhoto.sh` without a size argument to preserve dimensions. Resize only
when the source is materially larger than its intended display and the user has
approved it.

Preserve alpha and animation where required. Inspect line art, gradients, dark
areas, text, and transparency edges at full size. Use the derivative only when it
is smaller and visually faithful; otherwise keep the source out of GCS pending
review.

## Video

Run `convertVideoForWeb.sh` from the temporary directory. Confirm H.264 video, AAC
audio when the source has audio, dimensions, aspect ratio, frame rate, duration,
and stream count. Inspect first, middle, and final frames for damage. Reject
truncation, missing intended audio, timing changes, color shifts, and blocking.

Retain an already compatible smaller MP4 instead of making a larger lossy encode.
Apply fast-start with a stream-copy remux if needed. Do not remove audio or resize
by default.

## Manifest

Record source path, temporary copy, chosen derivative, source and derivative byte
sizes, dimensions, duration/codecs, visual result, alt text, caption, credit, and
proposed content-hashed object name. Upload only the chosen approved derivative.
