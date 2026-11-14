import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const allowedEmbed = /^https:\/\/(www\.youtube\.com\/embed\/|www\.youtube-nocookie\.com\/embed\/|player\.vimeo\.com\/video\/)[\w-]+([/?#].*)?$/;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string(),
      tools: z.array(z.string()),
      duration: z.string().optional(),
      year: z.number(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      video: z
        .string()
        .regex(
          allowedEmbed,
          'video must be an https embed URL: use the embed URL (https://www.youtube.com/embed/ID, https://www.youtube-nocookie.com/embed/ID or https://player.vimeo.com/video/ID), not the watch page link',
        )
        .optional(),
      playUrl: z
        .string()
        .regex(/^https:\/\/\S+$/, 'playUrl must be an https:// URL (e.g. your itch.io page)')
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
