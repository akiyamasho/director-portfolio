# Repository contract

## Content model

- `src/blog/posts.js` is the blog-index registry. Each record has `slug`, ISO
  `date`, `tags`, optional `media`, and `translations.en`/`translations.ja`
  objects containing `title` and `summary`.
- `src/blog/media.js` owns remote object URLs and keeps bucket/prefix construction
  outside page components.
- Each article is a Gatsby page at `src/pages/blog/<slug>.js`.
- Gatsby Intl emits locale-aware routes. Use the same slug in both locales and
  select copy from `intl.locale`.
- `src/pages/blog.js` maps the registry and therefore lists every registered post
  in English and Japanese automatically.

## Post record example

```js
{
    slug: "short-slug",
    date: "2026-08-08",
    tags: ["production"],
    media: postMedia,
    translations: {
        en: { title: "Concrete title", summary: "One factual sentence." },
        ja: { title: "具体的なタイトル", summary: "事実に基づく一文。" },
    },
}
```

## Page contract

- Wrap articles in `BlogLayout` and provide locale-aware `SEO` metadata.
- Use `PostHeader` for registry metadata.
- Keep EN and JA article functions in the same page module unless a later shared
  content layer replaces this established pattern.
- Reuse the remote-image and video fallback patterns from the current first post.
- Put repeated remote URLs in `src/blog/media.js`, not inline in prose.
- External links opened in a new tab require `rel="noopener noreferrer"` and an
  accessible localized label.

## Boundaries

- Do not expose local paths, EXIF locations, private notes, credentials, prompts,
  provider request JSON, or unpublished production material.
- Keep originals out of Git. Only small intentional repository assets belong in
  `src/assets/`.
- Editing a page is not permission to upload, commit, push, deploy, or publish.
