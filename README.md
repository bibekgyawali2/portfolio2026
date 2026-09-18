# Portfolio — Bibek Gyawali

A single static page, built with Next.js (App Router) and exported to plain HTML.
Weighted toward academic and research background for master's applications.

## Editing

All content lives in [`content/profile.ts`](content/profile.ts) as typed data.
The page in [`app/page.tsx`](app/page.tsx) composes it from a handful of
components; nothing else needs touching to change what the site says.

`*asterisks*` inside content strings render as italics.

## Components

| Component | Purpose |
| --- | --- |
| `Page` / `Footer` | Page shell and closing line |
| `Masthead` | Name, summary, contact row |
| `Section` | Titled section with optional lede |
| `Entry` | Date column + title, affiliation, bullets, note |
| `DataList` | Two-column term/description list |
| `Prose` | Paragraph block |

## Design

One column, hairline rules, system font stack. No icons, no images, no web
fonts, no client-side JavaScript. Dark mode follows the OS setting. Printing the
page produces a clean CV with URLs expanded.

## Commands

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Deploy

`out/` is plain static output — GitHub Pages, Netlify, Vercel, or any file
server. On Vercel, drop `output: "export"` from `next.config.ts` if you later
want server features.
