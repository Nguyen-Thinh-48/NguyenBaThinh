# Portfolio — Nguyen Ba Thinh

Personal site for an AIoT / Edge AI engineer. Static, built with
[Astro](https://astro.build), published to GitHub Pages by GitHub Actions on every
push to `main`.

**Live:** https://nguyen-thinh-48.github.io/portfolio/

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built `dist/` exactly as it will be published |
| `npm run check` | Type-check the Astro components and content schema |

> The dev URL includes `/portfolio` because the site is deployed to a repository
> subpath. Do not drop it.

---

## Adding a project

One project = one `.mdx` file in `src/content/projects/`. The filename becomes the
URL (`connected-drone.mdx` → `/projects/connected-drone`).

```mdx
---
title: Project name
tagline: One sentence — what it is, not how great it is.
summary: Two sentences, used on cards and in the page description.
org: Company or "Personal project"
role: Your role
period: 'May 2025 — Jan 2026'      # quote it, or YAML may read it as a number
order: 6                            # lower sorts first, everywhere
featured: false                     # true puts it on the home page
tags: [Edge AI, Python]             # these become the filter buttons on /projects
source:
  state: private                    # public | private | none
  url: https://github.com/...       # only used when state is "public"
  note: Why the source is closed.
video: /media/my-project/demo.mp4   # optional hero media
mediaCaption: What the recording shows.
highlights:                         # the big numbers at the top
  - value: '<300'
    unit: ms
    label: What that number measures
stack:
  - group: Languages
    items: ['Go', 'Python']
---

import MediaSplit from '../../components/MediaSplit.astro';
import Video from '../../components/Video.astro';

## A section heading

Body text.
```

The schema is enforced at build time — a typo in the frontmatter fails the build
rather than silently producing a broken page. The rules live in
`src/content.config.ts`.

### Putting a video or image beside the text

`MediaSplit` is the two-column block. Whatever you pass in the `media` slot sits
next to the prose on desktop and stacks underneath it on a phone.

```mdx
<MediaSplit flip>
  <Video slot="media" src="/media/my-project/demo.mp4" caption="What it shows." />

  ### Heading for this section
  - a point
  - another point
</MediaSplit>
```

| Prop | Effect |
| --- | --- |
| `flip` | Media on the left instead of the right (desktop only) |
| `wide` | Give the media column extra width — good for diagrams |
| `sticky` | Pin the media while the text scrolls past it |

Available in the `media` slot: `<Video>`, `<Figure>` (images) and `<Diagram>`
(inline SVG that follows the light/dark theme).

---

## Media files

Put them in `public/media/<project-slug>/` and reference them from the root:
`/media/<project-slug>/demo.mp4`. Never hard-code `/portfolio/` — the `url()`
helper in `src/lib/url.ts` adds it.

**Keep videos small.** GitHub rejects any single file over 100 MB, and every visitor
pays for the download. Aim for under 10 MB:

```bash
# compress
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an -movflags +faststart demo.mp4

# grab a poster frame at 2 s so the card is not black before playback
ffmpeg -i demo.mp4 -ss 00:00:02 -vframes 1 -q:v 3 poster.jpg
```

Then add `poster: /media/<slug>/poster.jpg` to the project frontmatter.

For anything longer than about 30 seconds, upload it to YouTube as unlisted and embed
it instead of committing the file.

---

## Personal details

Name, role, contact, skills, education and experience all live in
`src/site.config.ts`. Nothing personal is hard-coded into components.

---

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

First-time setup, once the repository exists on GitHub:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main`. The Actions tab shows the build; it takes about a minute.
3. The site appears at `https://<username>.github.io/portfolio/`.

If the repository is ever renamed, change `base` in `astro.config.mjs` to match the
new name — that one value controls every internal link.

---

## Stack

Astro · MDX content collections · hand-written CSS with custom properties (no CSS
framework) · GitHub Actions → GitHub Pages. No client-side framework; the only
JavaScript shipped is the theme toggle, the project filter and the card video hover.
