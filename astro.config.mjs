// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a *project* site, so the final URL is
// https://nguyen-thinh-48.github.io/portfolio/
// `base` must match the repository name. If you ever rename the repo, or move
// to a custom domain, change these two lines and nothing else.
export default defineConfig({
  site: 'https://nguyen-thinh-48.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    // GitHub Pages serves /projects/foo/index.html for /projects/foo
    format: 'directory',
  },
});
