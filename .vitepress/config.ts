import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: config,
  title: "Cachet",
  description: "The open-source status page system.",
  srcDir: 'src',
  cleanUrls: true,

  sitemap: {
    hostname: 'https://docs.cachethq.io',
  },

  head: [
    ['script', {
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': 'FDSKQOXU',
      defer: true,
    }],

    ['link', {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: 'https://cachethq.io/apple-touch-icon.png',
    }],
    ['link', {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      href: 'https://cachethq.io/favicon-16x16.png',
    }],
    ['link', {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      href: 'https://cachethq.io/favicon-32x32.png',
    }],
    ['link', {
      rel: 'manifest',
      href: 'https://cachethq.io/site.webmanifest',
    }],
    ['link', {
      rel: 'mask-icon',
      href: 'https://cachethq.io/safari-pinned-tab.svg',
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#04c147',
    }],
    // ['meta', {
    //   property: 'og:image',
    //   content: 'https://cachethq.io/social-share.png',
    // }],
    ['meta', {
      property: 'twitter:card',
      content: 'summary_large_image',
    }],
    // ['meta', {
    //   property: 'twitter:image',
    //   content: 'https://cachethq.io/social-share.png',
    // }],
  ],

  themeConfig: {
    githubUrl: 'https://github.com/cachethq/cachet',
    editLink: {
      pattern:
      'https://github.com/cachethq/docs/edit/main/src/:path',
    },
    
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://demo.cachethq.io' },
      { text: 'Blog', link: 'https://blog.cachethq.io' },
      { text: 'Sponsor', link: 'https://github.com/cachethq/cachet?sponsor=1' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Component Statuses', link: '/component-statuses' },
          { text: 'Incident Statuses', link: '/incident-statuses' },
          { text: 'Third-party Integrations', link: '/integrations' },
          { text: 'Client Libraries', link: '/client-libraries' },
          { text: 'Frequently Asked Questions', link: '/faq' },
        ],
      },
      {
        text: 'Installation',
        items: [
          { text: 'Installation', link: '/installation/' },
          { text: 'Installation with Docker', link: '/installation/docker' },
          { text: 'Installation with Windows', link: '/installation/windows' },
          { text: 'Upgrading', link: '/installation/upgrading' },
          { text: 'Beacons', link: '/installation/beacons' },
        ],
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Prerequisites', link: '/configuration/prerequisites' },
          { text: 'GitHub OAuth Token', link: '/configuration/github-oauth-token' },
          { text: 'CORS', link: '/configuration/cors' },
          { text: 'Mail', link: '/configuration/mail' },
          { text: 'Queue', link: '/configuration/queue' },
          { text: 'Subscribers', link: '/configuration/subscribers' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Introduction', link: '/api/' },
          { text: 'Advanced Usage', link: '/api/advanced' },
          { text: 'Timezone Header', link: '/api/timezone-header' },
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        placeholder: 'Search Cachet Docs...',
      },
    },
  },
})
