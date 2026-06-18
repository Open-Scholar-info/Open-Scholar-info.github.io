import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['essay', 'news']).default('news'),
    categories: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['active', 'foundational']),
    order: z.number().default(99),
    span: z.string(),
    partners: z.string().optional(),
    summary: z.string(),
    image: z.string().optional(),
    link: z.object({ href: z.string(), label: z.string() }).optional(),
    video: z.string().optional(),
  }),
});

export const collections = { posts, projects };
