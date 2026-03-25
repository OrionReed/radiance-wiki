---
title: How to Contribute
tags:
  - meta
---

This wiki is designed to be as easy as possible to contribute to. You don't need to install anything or clone any repo. Just edit in your browser.

## Quick Edit (easiest)

1. Find the page you want to edit
2. Click **"Edit this page"** at the bottom
3. GitHub opens with an editor — make your changes
4. Click **"Propose changes"** — this creates a pull request automatically
5. A maintainer (or auto-merge) will handle the rest.

## Create a New Page

1. Click **"Create a new page"** at the bottom of any page, or
2. Go to the [content folder on GitHub](https://github.com/OrionReed/radiance-wiki/new/main/content?filename=your-page-name.md) and create a new `.md` file

Start your page with frontmatter:

```markdown
---
title: Your Page Title
tags:
  - technique
---

Your content here. Use [[wikilinks]] to link to other pages.
```

## Content Structure

Pages are organised into folders:

- `papers/` — academic papers
- `talks/` — presentations, videos, talks
- `guides/` — tutorials and explainers
- `techniques/` — specific fixes and optimizations (bilinear fix, pre-averaging, etc.)
- `variants/` — variant algorithms (HRC, surfel RC, etc.)
- `implementations/` — code by engine/platform
- `tools/` — utilities, calculators, visualisers

Don't overthink it — put a page where it seems to fit.

## Tags

You can use tags to make pages browsable by topic:

- `paper` — academic papers
- `talk` — presentations and videos
- `guide` — tutorials and walkthroughs
- `implementation` — working code
- `fix` — specific fixes and corrections
- `variant` — variant algorithms
- `tool` — utilities and helpers

If no appropriate tag exists, create a new one.

## Writing Tips

- **Use wikilinks** — `[[page-name]]` or `[[page-name|Display Text]]` to link between pages
- **Add tags** — helps with discovery and navigation
- **Keep it loose** — the wiki is for reference, not an encyclopedia.

## Page Naming

- Use lowercase kebab-case: `my-page-name.md`
- Keep names short and descriptive

## For Trusted Contributors

If you're a [trusted contributor](https://github.com/OrionReed/radiance-wiki/blob/main/.github/trusted-contributors.json), your PRs to the `content/` directory will be auto-merged. Ask me (OrionReed) in the Discord if you'd like to be added. I am happy to add admins to the repo, and also happy to migrate this wiki to someone else's control or org if it is beneficial to the community.