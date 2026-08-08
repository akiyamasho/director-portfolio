# GCS media procedure

Read this file before uploads or when verified remote URLs are required.

## Fixed configuration

- Google Cloud project: `akiyamasho-portfolio`
- Bucket: `gs://5rps-film-public-media`
- Public base URL: `https://storage.googleapis.com/5rps-film-public-media`
- Location: `us-central1`
- Storage class: `STANDARD`
- Access: uniform public object viewer

This bucket is public. Never upload originals, working files, private notes,
credentials, prompts, request metadata, embargoed material, or assets without
confirmed publication rights.

## Prefix and object rules

Use one prefix per post:

```text
YYYYMMDD_short-description/
```

Use a concise lowercase ASCII description with hyphens. Reuse the prefix for
revisions. Put derivatives directly inside it unless a large post clearly needs
`images/` and `video/` sub-prefixes.

Name each object:

```text
descriptive-name-<content-hash>.<ext>
```

- Upload only validated web derivatives.
- Set the correct content type.
- Set `Cache-Control: public,max-age=31536000,immutable`.
- Never overwrite a hashed object with different bytes.
- Remove sensitive EXIF and location metadata.
- Use `storage.googleapis.com`, never `storage.cloud.google.com`, in the site.

## Preconditions and verification

Before uploading, confirm the active account/project, exact prefix, local-to-object
mapping, publication rights, and user authorization for the public state change.
Do not broaden IAM or store credentials as part of drafting.

Show the exact mapping before upload unless already approved. After upload, issue
a public HEAD request for every URL and verify content type, content length, cache
control, and browser accessibility before adding it to `src/blog/media.js`.

For video, prefer fast-start H.264/AAC MP4 plus a poster. Use native controls,
`playsInline`, and `preload="metadata"`. Direct GCS delivery suits modest clips;
recommend a streaming platform for long-form or adaptive-bitrate delivery.

If browser CORS fails, inspect the bucket's current CORS rules and propose the
narrow origins needed for `https://www.akiyamasho.com`, `http://localhost:8000`,
and `http://localhost:9000`. Changing bucket CORS is a separate external mutation
that requires explicit authorization.
