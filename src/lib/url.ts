/**
 * Prefix a site-root-relative path with the configured `base` from astro.config.mjs.
 *
 * The site is served from a subfolder on GitHub Pages (/portfolio/), so every
 * href / src written as "/projects" or "/media/foo.mp4" has to be rewritten to
 * "/portfolio/projects". Always run internal links through this helper.
 *
 *   url('/')                 -> '/portfolio/'
 *   url('/projects')         -> '/portfolio/projects'
 *   url('/media/x/demo.mp4') -> '/portfolio/media/x/demo.mp4'
 *
 * External URLs and data/blob URIs are returned untouched.
 */
export function url(path: string = '/'): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path;

  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const suffix = path.startsWith('/') ? path : `/${path}`;

  return `${base}${suffix}` || '/';
}

/** True when `href` is the page currently being rendered (used for nav highlighting). */
export function isActive(currentPath: string, href: string): boolean {
  const strip = (p: string) => {
    const rawBase = import.meta.env.BASE_URL || '/';
    const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
    const withoutBase = base && p.startsWith(base) ? p.slice(base.length) : p;
    return withoutBase.replace(/\/+$/, '') || '/';
  };

  const current = strip(currentPath);
  const target = strip(href);

  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}
