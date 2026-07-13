# Root host redirects (`rdvid.github.io`)

The Astro site lives at **https://rdvid.github.io/aboutme/** (project Pages).

GitHub does **not** let a project repo control these URLs:

- `https://rdvid.github.io/`
- `https://rdvid.github.io/en/`

Publish this folder as a **user site** so those URLs bounce to `/aboutme/`.

## One-time setup

```bash
# create the user site repo (once)
gh repo create rdvid/rdvid.github.io --public --source=root-redirects --push
```

Or manually:

1. Create repo `rdvid/rdvid.github.io`
2. Copy `index.html` and `en/index.html` from this folder to that repo
3. Enable GitHub Pages on branch `main` / root

Then:

| URL | Goes to |
|-----|---------|
| `https://rdvid.github.io/` | `https://rdvid.github.io/aboutme/` |
| `https://rdvid.github.io/en/` | `https://rdvid.github.io/aboutme/` |

Legacy `/aboutme/en/*` redirects are handled inside this Astro project (`astro.config.mjs`).
