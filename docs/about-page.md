# About page

The About page (`/about`, `/br/about`) is scroll-driven: hero, skills, career timeline, hobbies, and Spotify top tracks.

**Source of truth for copy/structure:** [`src/data/resume.timeline.yaml`](../src/data/resume.timeline.yaml)  
**UI chrome (section titles, CTAs):** [`src/i18n/ui.ts`](../src/i18n/ui.ts)  
**Resume PDF download:** still from [`src/data/site.ts`](../src/data/site.ts) (`site.resume`)  
**Music list:** [`src/data/spotify-top.json`](../src/data/spotify-top.json) (manual JSON — no Spotify API)

## Edit timeline, skills, hobbies

1. Open `src/data/resume.timeline.yaml`.
2. Update `intro` (`lead`, `paragraphs`, `location`), `experience`, `education`, `skills`, or `hobbies`.
3. Keep bilingual fields as `{ en, br }`. Use `**bold**` in intro paragraphs for emphasis. Skill chips may be plain strings (tech names, same in all locales) or `{ en, br }` for soft labels.
4. Dates use `YYYY-MM` (or `YYYY`). Use `end: null` for current roles.
5. Sync manually with the PDF resumes when those change.

Loader: [`src/lib/resume-profile.ts`](../src/lib/resume-profile.ts) (YAML + Zod).

## Spotify top tracks (committed JSON)

There is **no** Spotify API call at build or runtime. Drop a **Spotify Web API top-tracks response** into the file and redeploy (or refresh local dev).

File: [`src/data/spotify-top.json`](../src/data/spotify-top.json)

Expected shape (native API dump):

```json
{
  "items": [
    {
      "id": "…",
      "name": "Song title",
      "artists": [{ "name": "Artist" }],
      "album": {
        "name": "Album",
        "images": [{ "url": "https://i.scdn.co/image/…", "height": 300, "width": 300 }]
      },
      "external_urls": { "spotify": "https://open.spotify.com/track/…" }
    }
  ],
  "total": 10,
  "limit": 10,
  "offset": 0
}
```

The loader ([`src/lib/spotify-top.ts`](../src/lib/spotify-top.ts)) reads `items[]` in order and maps them to the About UI (rank = index + 1). Extra API fields are ignored.

## Scroll reveal

[`src/scripts/reveal-on-scroll.ts`](../src/scripts/reveal-on-scroll.ts) observes `[data-reveal]` and sets `data-reveal="visible"`. Respects `prefers-reduced-motion`. Album art uses native `loading="lazy"`.

## Checklist

- [ ] YAML dates and bilingual copy match the resume PDFs
- [ ] `spotify-top.json` filled with the tracks you want to show
- [ ] Commit JSON/YAML changes so deploys pick them up
