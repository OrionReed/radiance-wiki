# Contributing to the Radiance Cascades Wiki

Thanks for helping build this resource! This wiki is community-driven and we want contributions to be as frictionless as possible.

## The Easy Way (no setup needed)

1. Go to [radiance.wiki](https://radiance.wiki)
2. Find the page you want to edit (or any page to create a new one)
3. Click **"Edit this page"** or **"Create a new page"** at the bottom
4. Make your changes in the GitHub editor
5. Click **"Propose changes"** — done!

## What to Contribute

Literally anything useful:

- Fix a typo
- Add a link to a resource
- Write a sentence explaining a concept
- Add your implementation to the list
- Create a whole new page
- Improve an existing explanation

**Stubs are welcome.** A page with one sentence is better than no page at all. Someone else will expand it later.

## Page Format

Pages are Markdown files in the `content/` folder. Start each with frontmatter:

```markdown
---
title: Your Page Title
tags:
  - relevant-tag
---

Content goes here.
```

- Use `[[wikilinks]]` to link between pages
- Use `[[page-name|Display Text]]` for custom link text
- Use folders inside `content/` to organise related pages
- Images go in `content/images/`

## Trusted Contributors

Trusted contributors get their content-only PRs auto-merged. If you're an active community member and want to be added, ask in the Discord or open an issue.

## Local Preview

```bash
git clone https://github.com/OrionReed/radiance-wiki.git
cd radiance.wiki
npm i
npx quartz build --serve
```

Opens at http://localhost:8080
