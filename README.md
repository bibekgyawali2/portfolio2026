# bibekgyawali — portfolio

A small static site built with Next.js (App Router), exported to plain HTML.
Four pages, no client-side JavaScript beyond the nav and theme toggle.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Opening statement, selected work, current status |
| `/work` | Project index |
| `/work/[slug]` | A project written up properly — problem, method, what it taught |
| `/cv` | The document version. Print it for a PDF. |

## Editing

Content is data, kept apart from presentation:

- [`content/profile.ts`](content/profile.ts) — identity, nav, home copy, credentials,
  education, coursework, thesis, experience, skills
- [`content/projects.ts`](content/projects.ts) — one entry per project; adding one
  creates its page at `/work/<slug>` automatically

`*asterisks*` inside content strings render as italics.

## Components

| Component | Purpose |
| --- | --- |
| `Page` | Shell: nav, main, footer |
| `Nav` | Site nav with current-page state, plus the theme toggle |
| `Lede` | Home display line, intro, "now" |
| `PageHeader` | Kicker, title and lede on interior pages |
| `ProjectList` | The work index rows |
| `ProjectBody` | Prose sections of a project page |
| `Section` | Titled section with optional lede and trailing link |
| `Entry` | Date column + title, affiliation, bullets |
| `DataList` | Two-column term/description list |
| `ThemeToggle` | Light/dark switch; light is the default |

## Design

One column, hairline rules, system font stack. No icons, images or web fonts.
Light by default regardless of OS setting; the choice persists in
`localStorage` and is re-applied before first paint. Nav and footer are hidden
when printing so `/cv` prints clean, with URLs expanded.

## Commands

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

`out/` is plain static output — GitHub Pages, Netlify, Vercel, or any file
server. Drop `output: "export"` from `next.config.ts` if you later want server
features.


