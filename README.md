<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=monospace&size=32&duration=2800&pause=2000&color=F1F1F1&center=true&vCenter=true&width=940&lines=Ladies+and+Gentlemans%2C+Welcome+to+my+portifoly!" alt="Welcome to my portifoly! animated typed out" width="90%" align="middle"/>
</div>

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5-000000?style=for-the-badge&logo=astro&logoColor=red)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwindcss-007ACC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Daisyui](https://img.shields.io/badge/Daisyui-38B2AC?style=for-the-badge&logo=daisyui&logoColor=white)
![Github%20Pages](https://img.shields.io/badge/GitHub%20Pages-000000?style=for-the-badge&logo=github&logoColor=white)
</div>
<p align="center">
   <img height=250 width=350 src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGd3bzNjZjJsNGxic3N6OXlraHhpbzdpcndvNmI4aGlxZHltdTF5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J4zT1A80r9q92/giphy.gif" alt="dark mage surrounded by dark pokemons">  
</p>

<p align="center"><italic>"Let's start"</italic></p>

<p align="center">
  <a href="https://rdvid.github.io/aboutme"><strong>rdvid.github.io/aboutme</strong></a> · personal site + blog · part of the portifoly
</p>

## 💡 About

This repository **is** the portifoly surface: a personal website and Markdown blog that also showcases how I like to ship frontend — static-first, content-driven, and boring to operate.

It started as a learning playground for Astro SSG. The current version (v2) keeps that spirit but treats the site itself as a product: clearer architecture, bilingual UX where it matters (`en` + `br`), and a publish flow that fits GitHub Pages without ceremony.

Live on GitHub Pages: [rdvid.github.io/aboutme](https://rdvid.github.io/aboutme/) (`base: /aboutme`).

| URL | Behavior |
|-----|----------|
| `…/aboutme/` | English home |
| `…/aboutme/br/` | Portuguese home |
| `…/aboutme/en/…` | Redirects to the same path without `/en` |
| `rdvid.github.io/` and `…/en/` | Need the user-site kit in `root-redirects/` (project Pages cannot serve the host root) |

### Technologies used
- **Astro 5** — static output, file-based routing, content collections
- **TypeScript** — typed i18n keys, project data, content schema
- **Tailwind CSS** + **DaisyUI** — utility styling + light/dark themes (`lofi` / `business`)
- **GitHub Pages** + **GitHub Actions** — build on `main`, atomic-ish deploy

### Architecture (current version)

```
src/
  content/blog/en|br/   # Markdown posts (same slug across langs)
  content.config.ts     # Zod schema for posts
  data/                 # site metadata + projects list
  i18n/                 # UI strings + path helpers
  pages/[lang]/         # /en|br · about · projects · blog
  layouts/              # BaseLayout + BlogPost
  components/           # Header, Footer, ProjectCard, ThemeToggle
```

- Routes are prefixed by locale (`/en/...`, `/br/...`). `/` redirects to the default language (`en`).
- Page chrome (nav, CTAs, about copy) lives in `src/i18n/ui.ts`. Project blurbs are bilingual in `src/data/projects.ts`.
- Blog posts are real content files with frontmatter (`title`, `description`, `pubDate`, `lang`, optional `draft` / `tags`). Matching filenames in `en/` and `br/` keep the language toggle on the same article.

### Publish flow (zero-downtime PR)

1. Branch → add or edit Markdown under `src/content/blog/en/` and/or `br/`.
2. Open a PR — review content and (optionally) run `npm run build` locally.
3. Merge to `main`.
4. `.github/workflows/deploy.yml` installs, runs `astro build`, and deploys to Pages.

Production keeps serving the previous build until the new one is ready. No server to babysit; no CMS; shipping a post is a merge.

**Local loop:** `npm install` → `npm run dev` → `npm run build` / `npm run preview`.

### Tech nuances worth knowing

- **SSG only** — no adapter, no SSR. Ideal for Pages; every route is HTML at build time.
- **`draft: true`** — keeps a post in the repo without listing/building it as public.
- **Language switch** — swaps `/en` ↔ `/br` on the current path; shared post slugs are intentional.
- **Resumes** — locale picks `en-resume-*.pdf` or `br-resume-*.pdf` from `public/`.
- **Theme** — DaisyUI `data-theme` + `localStorage`; toggle in the header.

## ✨ Highlights

Some features that I'm proud of in this version:

- **Bilingual i18n** — English and Brazilian Portuguese (leaner than the old 4-locale setup)
- **Markdown blog** — Astro content collections + typed frontmatter
- **PR-based publishing** — merge to `main` → Actions → Pages, no downtime window to plan around
- **Projects as data** — portfolio cards driven by `src/data/projects.ts`
- **Responsiveness** — mobile drawer nav, desktop header
- **Dark / light theme** — DaisyUI themes with persistence

## ⚙️ Next Features

The development process starts but never ends. Next features will be focused on:

- [ ] RSS / sitemap for the blog
- [ ] Optional post preview checks on PRs
- [ ] Richer MDX when a post needs interactive bits
- [ ] Tag pages / archive filters

## 📫 Find a bug or have any suggestion?

### Pull Requests 

1. Fork this repo.
2. Create a branch: `git checkout -b <branch_name>`.
3. Do your alterations and tell then in your commit message: `git commit -m '<commit_message>'`
4. Send then to origin fork: `git push origin <project-name> / <local>`
5. Create a pull request detailing your implementation.

For **new blog posts**, prefer a focused PR that only adds/updates files under `src/content/blog/` (same slug in `en/` and `br/` when you publish both languages).

[How to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Issues

1. Access the Issues Section:
2. Click the “New issue” button.
3. In the “Title” field, type a descriptive title for your issue.
4. In the comment body field, provide a detailed description of the issue you’re facing or the feature you’d like to request.
5. Apply labels to categorize the issue.
    - `Enhancement` for new features
    - `Bug` for some issue in usability
6. Click “Submit new issue” to create the issue.

<h3 align=center>❤️ Proudly developed by:</h2>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://rdvid.github.io/aboutme">
        <img src="https://avatars.githubusercontent.com/u/60834135" alt="Foto de Rafael David" width=115><br>
        <sub>
          <b>Rafael David</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
