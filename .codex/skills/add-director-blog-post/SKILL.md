---
name: add-director-blog-post
description: Turn a user-provided folder of notes, images, audio, and video into a reviewed bilingual EN/JA production-journal post for Akiyama Sho's Gatsby director portfolio. Use when Codex must inventory filmmaking material, prepare faithful web-media derivatives, draft or revise a director-focused article, update the portfolio's blog registry and localized React page, optionally upload approved derivatives to the configured public GCS bucket, and validate both locales without deploying automatically.
---

# Add a director blog post

Create one evidence-based bilingual journal entry from an explicit input folder.
Keep text and metadata in Git. Keep large approved media in GCS.

## Load required guidance

1. Read the repository `AGENTS.md` completely.
2. Read [references/repository-contract.md](references/repository-contract.md).
3. Read [references/writing-style.md](references/writing-style.md).
4. Read [references/media-compression.md](references/media-compression.md) before preparing media.
5. Read `src/blog/posts.js`, `src/blog/media.js`, the blog index, the most recent
   article, and current blog components before drafting or editing.
6. Read [references/gcs-media.md](references/gcs-media.md) before any upload or
   before inserting new remote URLs.

## Establish scope

- Accept only the folder the user identifies for the post.
- Treat source files as read-only. Generate derivatives in a temporary directory.
- Check `git status` before editing and preserve unrelated changes.
- Do not upload, commit, push, deploy, or describe a post as published unless the
  user explicitly authorizes that action.
- If publication rights, privacy, credits, or embargo status are unclear, stop at
  an inventory and proposed public-media manifest.

## Inventory and derive the story

Recursively classify files as factual source, publishable-media candidate,
supporting artifact, duplicate/derivative, or excluded/unknown. Record useful
metadata such as size, dimensions, duration, codec, and hashes when tools allow.

Derive only what the material supports:

- the completed action or production question;
- what changed from the prior pass;
- the next concrete directing or production step;
- the strongest media that explains the work;
- verified dates, tools, credits, links, and numbers;
- gaps that would require invention.

Prefer a focused article over a file dump. Never infer film strategy, character
meaning, production progress, quotations, or emotional reactions from filenames
or images alone.

## Prepare media

- Follow [references/media-compression.md](references/media-compression.md).
- Preserve sources byte-for-byte and work only on temporary copies.
- Prefer the smallest verified derivative that remains visually faithful.
- Use H.264/AAC MP4 with fast start for direct browser playback and make a poster.
- Record source-to-derivative mapping, sizes, dimensions, duration, codec, alt
  text, caption, and credit in a private working manifest.
- Use descriptive lowercase content-hashed names for GCS objects.
- Upload only explicitly approved derivatives. The configured bucket is public.

## Draft both locales

Write English first from the evidence. Lead with what happened, then explain a
specific filmmaking artifact, test, decision, or constraint and the next step.
Use media beside the paragraph it supports. Do not force a fixed article length,
table of contents, recap, numbered framework, or promotional CTA.

Write Japanese from the same facts and intent, not sentence by sentence. Use
natural restrained `です・ます` prose and precise production vocabulary. Keep EN
and JA equivalent in claims, media, credits, and links; small structural changes
are acceptable when they improve natural reading.

Follow [references/writing-style.md](references/writing-style.md) for both locales.

## Implement the post

1. Add post metadata and EN/JA list copy to `src/blog/posts.js`.
2. Add verified GCS URLs to `src/blog/media.js`; do not insert URLs for objects
   that were not uploaded and checked unless the page has a clear fallback.
3. Create `src/pages/blog/<slug>.js` with one canonical slug and locale-selected
   EN/JA article bodies.
4. Reuse `BlogLayout`, `PostHeader`, `TestVideo`, and existing figure/fallback
   patterns. Create the smallest reusable accessible component only when needed.
5. Add localized labels to both `src/intl/en.json` and `src/intl/ja.json` when the
   article changes shared UI.
6. Confirm the post appears automatically on the blog index in both locales.
7. Keep native media responsive, lazy-load images, and use video controls,
   `playsInline`, `preload="metadata"`, posters, and localized failure states.

## Run editorial and site checks

Run:

```bash
python3 .codex/skills/add-director-blog-post/scripts/check_post_style.py \
  src/pages/blog/<slug>.js
```

Then review manually for unsupported claims, EN/JA factual parity, copied wording,
unnatural Japanese, missing credits/alt text, broken URLs, and prose em dashes or
semicolons. The scanner is a guardrail, not proof of writing quality.

Format changed source files and run:

```bash
make build
```

When browser QA is available, inspect the EN and JA article and blog index at
320-360px, 768-800px, and 1280px or wider. Check media loading, captions,
controls, focus, Japanese wrapping, and horizontal overflow. If browser QA is
unavailable, state that limitation.

For uploaded objects, require successful public HEAD requests and verify content
type, length, and cache control. A fallback panel proves resilience, not a
successful upload.

## Hand off

Report the article path and publication state, supported story angle, selected
and excluded media, uploaded or pending URLs, open rights/credit questions, and
completed validation. Do not call the article published until an authorized
deployment and live EN/JA index/article checks succeed.
