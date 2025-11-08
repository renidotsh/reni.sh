import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import unocss from 'unocss/astro'
import astroExpressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'

import { remarkPlugins, rehypePlugins } from './plugins'
import { SITE } from './src/config'

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE.website,
  base: SITE.base,
  integrations: [
    sitemap(),
    robotsTxt(),
    unocss({ injectReset: true }),
    astroExpressiveCode(),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins,
    rehypePlugins,
  },
  image: {
    domains: SITE.imageDomains,
    layout: 'constrained',
    responsiveStyles: true,
  },
  vite: {
    server: {
      host: true, // Add this line
      headers: {
        // Enable CORS for dev: allow Giscus iframe to load local styles
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: { chunkSizeWarningLimit: 1200 },
  },
  experimental: {
    contentIntellisense: true,
    preserveScriptOrder: true,
    headingIdCompat: true,
    chromeDevtoolsWorkspace: true,
    failOnPrerenderConflict: true,
  },
})