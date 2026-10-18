# Portfolio assets per repository

Pinned GitHub repositories are listed on [me.rdvid.online/projects](https://me.rdvid.online/projects). Each pin can ship two files under **`public/`**:

| File | Purpose |
|------|---------|
| `cover.png` | Card and modal cover image |
| `manifest.md` | Frontmatter (links, status, bilingual blurbs) + markdown body for the detail modal |

## Setup

1. Copy [`manifest.template.md`](./manifest.template.md) to `public/manifest.md` in your repo.
2. Add `public/cover.png` (custom cover). If missing, the site shows a placeholder.
3. Pin the repo on your GitHub profile to include it in the list.

Frontmatter fields match the legacy portfolio cards: `status` (`ready` \| `dev`), `docUrl`, `liveDemoUrl`, `badges`, and `description.en` / `description.br`.

If `manifest.md` is absent, the site still lists the pin using GitHub metadata (description, topics, homepage URL).
