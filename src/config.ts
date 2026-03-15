import type { Site, Ui, Features } from './types'

export const SITE: Site = {
    website: 'https://reni.sh/',
    base: '/',
    title: 'reni.sh',
    description:
        'Personal Blogsite',
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
        {
            path: '/projects',
            title: 'Projects',
            displayMode: 'alwaysText',
            text: 'Projects',
        },
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
            'hr',
            'rssLink',
            'themeButton',
            'hr',
            'searchButton',
        ],
        mergeOnMobile: true,
    },
    tabbedLayoutTabs: false,
    groupView: {
        maxGroupColumns: 3,
        showGroupItemColorOnHover: true,
    },
    githubView: {
        monorepos: [],
        mainLogoOverrides: [],
        subLogoMatches: [],
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
            'data-repo': 'renidotsh/reni.sh',
            'data-repo-id': 'R_kgDOQQZvXw',
            'data-category': 'Giscus',
            'data-category-id': 'DIC_kwDOQQZvX84C4Zab',
            'data-mapping': 'pathname',
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
            includes: ['blog', 'resources', 'projects'],
            filter: true,
            navHighlight: true,
            batchLoadSize: [true, 5],
            maxItemsPerPage: [true, 3],
        },
    ],
}
