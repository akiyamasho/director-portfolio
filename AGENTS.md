# Director Portfolio Maintainer Guide

This file applies to the entire repository.

## Product and scope

-   This is Akiyama Sho's bilingual filmmaker and animation-director portfolio.
-   Keep the visual identity cinematic: black and charcoal surfaces, restrained
    typography, stills and motion as the focus, and editorial credit-sheet rhythm.
-   Preserve authored biography, credits, project descriptions, imagery, and user
    changes. Do not invent production facts, awards, clients, quotes, or film meaning.
-   Do not commit, push, deploy, upload public media, or publish a post unless the
    user explicitly asks for that action.

## Stack and important locations

-   Gatsby 5, React 18, styled-components, Gatsby Intl, and pnpm 9.15.x.
-   Use Node 20 for Gatsby commands. The Makefile provides a contained Node 20
    runner because newer local Node versions can break Gatsby's data bridge.
-   Pages: `src/pages/`.
-   Shared UI: `src/components/`.
-   Global and responsive CSS: `src/components/layout.css`.
-   Localized UI strings: `src/intl/en.json` and `src/intl/ja.json`.
-   Blog registry and media URLs: `src/blog/posts.js` and `src/blog/media.js`.
-   Blog UI: `src/components/blog/`; blog routes: `src/pages/blog.js` and
    `src/pages/blog/`.
-   Public blog media procedure: `docs/blog-media.md` and the project-local
    `$add-director-blog-post` skill.

## Commands

-   `make dep`: install the locked pnpm dependencies.
-   `make dev`: run the development site at `http://localhost:8000`.
-   `make build`: create the production build.
-   `make run`: build and serve the production output at `http://localhost:9000`.
-   Override ports with `DEV_PORT=<port>` or `RUN_PORT=<port>`.

## Localization

-   Every public navigation label, heading, summary, caption, fallback, and
    accessible label must work in English and Japanese.
-   Use Gatsby Intl links so the current locale is preserved.
-   Keep the language control as a full document navigation that preserves the
    current path, query, and hash.
-   Never rewrite React-owned text nodes after render to add Japanese line-break
    opportunities. Use `JapaneseLineBreak` for authored display phrases and the
    native `word-break: auto-phrase` enhancement for general Japanese copy.
-   A blog post uses one canonical slug with locale-specific title, summary, and
    article body. Add its metadata to `src/blog/posts.js` and ensure both localized
    route variants render successfully.
-   Write Japanese as natural public production Japanese, not a literal English
    translation. Keep precise terms such as `演出`, `絵コンテ`, and
    `アニマティック` where appropriate.

## Design and accessibility

-   Reuse existing color and typography primitives instead of introducing isolated
    styles. Avoid generic SaaS UI, arbitrary gradients, and decorative effects that
    compete with film imagery.
-   Keep keyboard focus visible, controls labeled, media responsive, and interactive
    targets at least 44px where practical.
-   Native video must use controls, `playsInline`, and `preload="metadata"`. Provide
    a poster and a localized unavailable-media fallback.
-   Check EN and JA at 320-360px, 768-800px, and 1280px or wider after shared layout
    or navigation changes.

## Blog and public media

-   Invoke `$add-director-blog-post` for new journal posts or substantial revisions.
-   Treat the user-provided source folder as read-only. Prepare derivatives in a
    temporary directory and keep originals out of Git and public storage.
-   The configured GCS bucket is public. Upload only explicitly approved web
    derivatives using lowercase content-hashed names and immutable cache headers.
-   Never upload prompts, credentials, request JSON, private notes, source animatics,
    unapproved storyboards, character sheets, or licensed/embargoed material.
-   A post is not published merely because its files exist locally. Verify the live
    EN/JA article and blog index only after an explicitly authorized deployment.

## Validation and change hygiene

-   Read files and `git status` before editing. Preserve unrelated and user-authored
    changes; do not reformat unrelated code.
-   Run Prettier on changed source files, then `make build` for normal site changes.
-   For blog posts, also run the style checker documented by the blogger skill.
-   Prefer rendered browser QA when available. If it is unavailable, distinguish
    static/build verification from visual verification.
-   Existing warnings are not passes or failures by themselves. Report new errors,
    unresolved media URLs, and validation limitations precisely.
