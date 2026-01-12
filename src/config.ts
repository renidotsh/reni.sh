import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://reni.sh/',
  base: '/',
  title: 'Renish',
  description:
    'Personal Portfolio + Blogsite',
  author: 'Renish R',
  lang: 'en',
  ogLocale: 'en_US',
  imageDomains: ['cdn.bsky.app', 'images.unsplash.com'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'alwaysText',
      text: 'Blog',
    },
    // {
    //   path: '/projects',
    //   title: 'Projects',
    //   displayMode: 'alwaysText',
    //   text: 'Projects',
    // },
    {
        path: '/portfolio',
        title: 'Portfolio',
        displayMode: 'alwaysText',
        text: 'Portfolio',
    },
    {
      path: '/resources',
      title: 'Resources',
      displayMode: 'alwaysText',
      text: 'Resources',
    },
    {
      path: '/photos',
      title: 'Photos',
      displayMode: 'iconToTextOnMobile',
      text: 'Photos',
      icon: 'i-ri-camera-ai-line',
    },
    {
      path: '/shorts',
      title: 'Shorts',
      displayMode: 'iconToTextOnMobile',
      text: 'Shorts',
      icon: 'i-meteor-icons-grid',
    },
    {
      path: '/changelog',
      title: 'Changelog',
      displayMode: 'iconToTextOnMobile',
      text: 'Changelog',
      icon: 'i-ri-draft-line',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/renishdotdev',
      title: 'Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    // {
    //   link: 'https://x.com/renishdotdev',
    //   title: 'Astro on Twitter',
    //   displayMode: 'alwaysIcon',
    //   icon: 'i-ri-twitter-x-fill',
    // },
    // {
    //   link: 'https://discord.com',
    //   title: '@renidotsh on X',
    //   displayMode: 'alwaysIcon',
    //   icon: 'i-material-symbols:360',
    // },
    // {
    //   link: 'https://bsky.app/reni.sh',
    //   title: 'Bluesky',
    //   displayMode: 'alwaysIcon',
    //   icon: 'i-meteor-icons-bluesky',
    // },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
    //   'hr',
    //   'rssLink',
      'themeButton',
      'hr',
      'searchButton',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
  postMetaStyle: 'minimal',
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 75 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
      displayPosition: 'left',
      displayMode: 'always',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@renishdotdev'],
      bluesky: [true, '@renish.dev'],
      reddit: true,
      whatsapp: true,
      email: true,
      mastodon: false,
      facebook: false,
      pinterest: false,
      telegram: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'lin-stephanie/astro-antfustyle-theme',
      'data-repo-id': 'R_kgDOLylKbA',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_kwDOLylKbM4Cpugn',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'en',
    },
  ],
  search: [
    true,
    {
      includes: ['blog', 'changelog', 'resources', 'projects'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
}
