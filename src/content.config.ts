import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    /** Shown as the page <h1> and on cards. */
    title: z.string(),
    /** One line under the title. Say what it *is*, not how great it is. */
    tagline: z.string(),
    /** Slightly longer blurb used on cards and in <meta description>. */
    summary: z.string(),

    org: z.string(),
    role: z.string(),
    period: z.string(),

    /** Lower numbers sort first across the site. */
    order: z.number().default(99),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    tags: z.array(z.string()).default([]),

    /**
     * Source availability. Company work stays closed, so the button renders as
     * a non-link badge instead of a dead GitHub URL.
     */
    source: z
      .object({
        state: z.enum(['public', 'private', 'none']).default('none'),
        url: z.string().url().optional(),
        note: z.string().optional(),
      })
      .default({ state: 'none' }),

    /** Hero media at the top of the case study. Paths are site-root relative. */
    video: z.string().optional(),
    poster: z.string().optional(),
    image: z.string().optional(),
    /**
     * Aspect ratio of the hero media, as a CSS ratio. Set this to the real
     * dimensions — a phone recording in a 16/9 frame is mostly black bars.
     */
    ratio: z.string().default('16 / 9'),
    /** Alt text / caption for the hero media. Required if `video` or `image` is set. */
    mediaCaption: z.string().optional(),

    /** Big numbers. Three or four reads best. */
    highlights: z
      .array(
        z.object({
          value: z.string(),
          unit: z.string().optional(),
          label: z.string(),
        })
      )
      .default([]),

    /** Grouped technology list rendered at the bottom of the case study. */
    stack: z
      .array(
        z.object({
          group: z.string(),
          items: z.array(z.string()),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };
