# Akiyama Shō Director Portfolio

[![Website](https://img.shields.io/badge/akiyamasho.com-080808?style=for-the-badge&logo=googlechrome&logoColor=white)](https://akiyamasho.com)
[![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://akiyamasho-portfolio.web.app)

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/akiyamasho/)
[![Discord](https://img.shields.io/badge/5RPS_Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/cWae4TfR)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://www.x.com/akiyamasho_dev)

Bilingual filmmaker, animation-director, and software and ML engineering portfolio for Akiyama Shō. The site includes selected film work, engineering experience, papers, and an English/Japanese production journal.

## Stack

- Gatsby 5 and React 18
- styled-components
- Gatsby Intl with English and Japanese routes
- Public, compressed journal media served from Google Cloud Storage
- Firebase Hosting

## Requirements

- Git
- GNU Make 4.x or a compatible `make`
- Node.js with `npm`, `npx`, and Corepack available

The Makefile runs Gatsby with a contained Node 20 process and pins pnpm 9.15.9. A global Gatsby installation is not required. Newer system Node versions may not be compatible with Gatsby's data bridge, so use the Makefile instead of invoking Gatsby directly.

On Windows, use an environment that provides GNU Make, such as WSL or Git Bash. Otherwise, run the equivalent pnpm and Gatsby commands manually with Node 20.

## Installation

```bash
make dep
```

`make dep` installs the exact dependency versions recorded in `pnpm-lock.yaml` using a frozen lockfile. The package runner can be overridden for a one-off command:

```bash
make PNPM=pnpm dep
```

## Development

Before making changes, read [`AGENTS.md`](./AGENTS.md). It documents the visual system, bilingual typography, media policy, repository structure, validation requirements, and publishing boundaries for contributors and coding agents.

Start the Gatsby development server:

```bash
make dev
```

The site is available at <http://localhost:8000>. Use another port when needed:

```bash
make dev DEV_PORT=8001
```

Create a production build:

```bash
make build
```

Build and serve the production output locally:

```bash
make run
```

The production preview is available at <http://localhost:9000>. Override it with `RUN_PORT`, for example `make run RUN_PORT=9001`.

## Project structure

- `src/pages/`: Gatsby pages and localized article routes
- `src/components/`: shared layout, navigation, portfolio, and journal UI
- `src/intl/`: English and Japanese interface strings
- `src/blog/posts.js`: journal registry, localized metadata, tags, and external entries
- `src/blog/media.js`: public journal media URLs
- `src/components/blog/`: shared journal presentation
- `.codex/skills/add-director-blog-post/`: reviewed workflow and references for journal work
- `docs/blog-media.md`: public GCS media procedure
- `firebase.json`: Firebase Hosting output and security headers

## Bilingual and journal changes

Every public navigation label, heading, summary, caption, fallback, and accessible label must work in English and Japanese. Use Gatsby Intl links so the current locale is preserved, and test switching in both directions on the same route.

For a new journal article or a substantial article revision, follow the project-local [`add-director-blog-post` skill](./.codex/skills/add-director-blog-post/SKILL.md). Public GCS media must be approved, compressed, content-hashed, and uploaded with the documented immutable cache headers. Do not commit original production media, prompts, credentials, or private source material.

## Validation

For normal site changes:

1. Run Prettier on the files you changed.
2. Run `git diff --check`.
3. Run `make build`.
4. Check English and Japanese at mobile, tablet, and desktop widths when layout or navigation changes.

Journal changes must also pass the style checker documented in the journal skill and should be checked on both localized article routes.

## Deployment

![Firebase Hosting](https://img.shields.io/badge/Production-Firebase_Hosting-FFCA28?style=flat&logo=firebase&logoColor=black)

Production is hosted on Firebase at [akiyamasho.com](https://akiyamasho.com). Deployment is manual and requires authenticated access to the `akiyamasho-portfolio` Firebase project. Pushing `main` alone does not publish the site.

After reviewing the exact diff and confirming a clean production build:

```bash
make build
firebase deploy --only hosting --project akiyamasho-portfolio
```

Do not deploy, upload public media, or publish journal content without explicit authorization from the site owner.

## License

The source code is licensed under the terms in [`LICENSE`](./LICENSE). Portfolio writing, artwork, video, production materials, and project branding remain the property of their respective owners unless explicitly stated otherwise.
