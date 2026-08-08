# Public blog media

Blog media is served directly from `https://storage.googleapis.com/5rps-film-public-media` and is declared in `src/blog/media.js`.

The Directing the Reference article uses one compressed source-overview video,
six synchronized comparison videos, their WebP posters, a WebP hero, and WebP
character-reference derivatives. All local and production page loads use the
same public GCS URLs.

To reproduce and verify the upload, run:

```sh
bash scripts/upload-directing-the-reference-media.sh
```

The script is intentionally allowlisted. It copies sources into a temporary
directory, remuxes the already compressed H.264 comparison videos with fast-start
metadata, converts approved presentation images to metadata-stripped WebP, checks
every expected content hash, uploads with the correct MIME type and immutable
cache metadata, and verifies each public URL.

It never uploads prompts, provider request JSON, task metadata, raw storyboard
frames, standalone source animatics, or source image files. The only character
art objects are the compressed derivatives explicitly shown in the article's
source-material section.

The Gatsby app has no application-level Content Security Policy. The post uses native `<video>` elements rather than a remote-image plugin, so `storage.googleapis.com` needs no additional client allowlist.

The article's Remote Startup Senpai production-transfer section adds two
approved comparison videos and their WebP posters. One compares the rough and
finished scene, and the other compares the approved source with an unsuccessful
upscale attempt. Reproduce those four derivatives with:

```sh
bash scripts/upload-directing-the-reference-l7-media.sh
```

That script reads the production sources without modifying them, creates only
the reviewed comparison deliverables in a temporary directory, verifies their
content hashes, and uploads them beneath the existing article prefix. It does
not upload prompts, request metadata, source keyframes, or character sheets.
