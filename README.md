# bibekgyawali - portfolio

A small static site built with Next.js (App Router), exported to plain HTML.
Four pages, no client-side JavaScript beyond the nav and theme toggle.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Portfolio and Curriculum Vitae |
| `/projects` | Project index |
| `/projects/[slug]` | Individual project write-ups and documentation |

## Editing

Content is data, kept apart from presentation:

- [`content/profile.ts`](content/profile.ts): identity, nav, credentials,
  education, coursework, thesis, experience, skills
- [`content/projects.ts`](content/projects.ts): one entry per project; adding one
  creates its page at `/projects/<slug>` automatically

`*asterisks*` inside content strings render as italics.

## Components

| Component | Purpose |
| --- | --- |
| `Page` | Shell: nav, main, footer |
| `Nav` | Site nav with current-page state, plus the theme toggle |
| `Lede` | Home display line, intro, "now" |
| `PageHeader` | Title, metadata and lede on interior pages |
| `ProjectList` | The work index rows |
| `ProjectBody` | Prose sections of a project page |
| `Section` | Titled section with optional lede and trailing link |
| `Entry` | Date column + title, affiliation, bullets |
| `DataList` | Two-column term/description list |
| `Icons` | Minimalist SVG vector icons for contact links |
| `ThemeToggle` | Light/dark switch; light is the default |

## Design

One column, hairline rules, system font stack, subtle vector icons.
Light by default regardless of OS setting; the choice persists in
`localStorage` and is re-applied before first paint. Nav and footer are hidden
when printing so `/cv` prints clean, with URLs expanded.

## SEO

- [`content/site.ts`](content/site.ts) holds the canonical origin, the search
  title and description, and the `Person` structured data. Everything else (canonicals, sitemap, robots, Open Graph) derives from it.
- `sitemap.xml` and `robots.txt` are generated at build from the route list.
- The Open Graph card is rendered from the headline at build time; `vercel.json`
  pins its Content-Type, and a `.png` copy is published alongside it.

## Commands

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

`out/` is plain static output for GitHub Pages, Netlify, Vercel, or any file
server. Drop `output: "export"` from `next.config.ts` if you later want server
features.


