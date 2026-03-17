import { glob, file } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import {
  pageSchema,
  postSchema,
  projectSchema,
  photoSchema,
} from '~/content/schema'

const pages = defineCollection({
  loader: glob({ base: './src/pages', pattern: '**/*.mdx' }),
  schema: pageSchema,
})

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: 'index.{md,mdx}' }),
})

const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: 'index.{md,mdx}' }),
  schema: pageSchema,
})

const resources = defineCollection({
  loader: glob({ base: './src/content/resources', pattern: 'index.{md,mdx}' }),
  schema: pageSchema,
})

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: postSchema,
})

const projects = defineCollection({
  loader: file('./src/content/projects/data.json'),
  schema: projectSchema,
})

const pics = defineCollection({
  loader: file('src/content/pics/data.json'),
  schema: photoSchema,
})

export const collections = {
  pages,
  home,
  portfolio,
  blog,
  projects,
  resources,
  pics,
}
