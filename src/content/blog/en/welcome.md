---
title: Welcome to the new site
description: A simpler Astro setup for a personal site and blog on GitHub Pages.
pubDate: 2026-07-13
draft: false
tags:
  - astro
  - meta
lang: en
---

This site is now a straightforward Astro static site: a few pages, Markdown posts, and a single deploy to GitHub Pages.

## What changed

- Kept bilingual routing for English and Brazilian Portuguese
- Replaced social modals and sidebars with simple links
- Added a Markdown blog via Astro content collections

## Writing a new post

Add matching files in `src/content/blog/en/` and `src/content/blog/br/` (same filename):

```md
---
title: My next post
description: A short summary for listings and SEO.
pubDate: 2026-07-20
tags: [nodejs]
lang: en
---

Your content here.
```

Push to `main` and GitHub Actions will rebuild the site.
