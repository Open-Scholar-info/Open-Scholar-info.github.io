# Open Scholar — website

The openscholar.info website. Built with [Astro](https://astro.build), hosted
free on GitHub Pages, deployed automatically on every push to `main`.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve the built site
```

## Structure

- `src/pages/` — one file per route (`index`, `about`, `manifesto`, `projects`,
  `writing`, `news`, `publications`, `contact`, `404`). `[slug].astro` renders
  every blog post.
- `src/content/posts/` — the 32 migrated posts as Markdown. Original WordPress
  slugs are preserved, so old links keep working. Frontmatter `kind: essay`
  surfaces a post under Writing; `kind: news` keeps it in the archive only.
  Set `draft: true` to keep a post in the repo but off the site.
- `src/content/projects/` — one Markdown file per project (active +
  foundational), rendered at `/projects/<slug>/`. Original project-page text.
- `src/pages/resources.astro` — the full Publications, Talks, and Media list.
- `src/components/` — `Header`, `Footer`.
- `src/styles/global.css` — the design system (palette, type).
- `public/images/` — the real logos (`os-horizontal.png`, `os-vertical.png`).
- `public/CNAME` — the custom domain (`openscholar.info`).
- `astro.config.mjs` `redirects` — old WordPress URLs (`/libre/`, `/what-we-do/`,
  etc.) redirect to their new homes.

## Design

White, Poppins — matching the original site's look. Brand petrol `#1a6c7a` is
the accent. Fonts self-hosted via `@fontsource` (no Google Fonts calls, no
tracking).

## Before launch — checklist

1. **Contact form key.** The form uses [Web3Forms](https://web3forms.com)
   (free, no server). Create an access key and replace `WEB3FORMS_ACCESS_KEY`
   in `src/pages/contact.astro`. Submissions then arrive at the email tied to
   the key.
2. **GitHub org + repo.** Create the `openscholar-info` org (owned by your
   personal account → Free plan), push this folder to a public repo, and enable
   Pages with source = GitHub Actions.
3. **DNS.** Point `openscholar.info` at GitHub Pages (apex A/AAAA records +
   `www` CNAME), then verify the custom domain in repo settings. Keep the old
   WordPress site live until this resolves.

## Media

Featured images, inline post images, and team photos were downloaded from the
old WordPress site into `public/media/` (so nothing hot-links the old server).
Posts carry an `image:` field; the LIBRE project embeds a YouTube video via a
`video:` field.

## Team

`src/data/team.ts` holds the "Working Team" shown on `/about/#team` — the six
members from the original About page, with the photos Pandelis supplied. Role =
discipline, as on the original. Edit this file to update the roster.

## Not yet wired

- **Newsletter.** 31 subscribers were exported from MailPoet. No signup form is
  on the site yet — to be added with an external sender (e.g. Buttondown) when
  decided.
