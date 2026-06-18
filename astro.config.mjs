// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://openscholar.info',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // preserve original WordPress URLs that have moved
  redirects: {
    '/what-we-do/': '/projects/',
    '/blo-posts/': '/news/',
    '/independent-peer-review-manifesto/': '/manifesto/',
    '/libre/': '/projects/libre/',
    '/the-notify-project/': '/projects/the-notify-project/',
    '/next-generation-repositories/': '/projects/next-generation-repositories/',
    '/open-peer-review-module-for-repositories/': '/projects/open-peer-review-module-for-repositories/',
    '/psicologica-journal/': '/projects/psicologica-journal/',
    '/the-self-journal-of-science/': '/projects/the-self-journal-of-science/',
  },
});
