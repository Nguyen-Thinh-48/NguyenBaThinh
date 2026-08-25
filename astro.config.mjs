// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a *project* site, so the final URL is
// https://nguyen-thinh-48.github.io/portfolio-s-/
// `base` must match the repository name. If you ever rename the repo, or move
// to a custom domain, change BASE and nothing else.
const BASE = '/portfolio-s-';

/**
 * Prefix root-relative links and images written in Markdown with the site base.
 *
 * Astro rewrites paths in `.astro` components (via the `url()` helper), but a
 * plain `[text](/projects/foo)` inside an .mdx file is passed through untouched
 * and would 404 on a subpath deployment. This fixes them at build time so
 * content can be written with clean paths.
 */
function rehypeBasePaths() {
  /** @param {any} tree */
  return (tree) => {
    /** @param {any} node */
    const walk = (node) => {
      if (node.type === 'element' && node.properties) {
        for (const attr of ['href', 'src']) {
          const value = node.properties[attr];
          if (
            typeof value === 'string' &&
            value.startsWith('/') &&
            !value.startsWith('//') &&
            !value.startsWith(`${BASE}/`)
          ) {
            node.properties[attr] = BASE + value;
          }
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://nguyen-thinh-48.github.io',
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeBasePaths],
  },
  build: {
    // GitHub Pages serves /projects/foo/index.html for /projects/foo
    format: 'directory',
  },
});
