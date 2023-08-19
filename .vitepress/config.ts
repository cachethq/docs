import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: config,
  title: "Cachet",
  description: "Cachet is an open-source status page system.",
  srcDir: 'src',
  cleanUrls: true,

  carbonAds: {
    code: 'CWYDE2QJ',
    placement: 'cachethqio',
  },

  head: [
    ['script', {
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': 'FDSKQOXU',
      defer: true,
    }],
  ],

  themeConfig: {
    githubUrl: 'https://github.com/cachethq/cachet',
    editLink: {
      pattern:
      'https://github.com/cachethq/docs/edit/main/src/:path',
    },
    
    logo: {
      light: 'logo.svg',
      dark: 'logo-dark.svg',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://demo.cachethq.io' }
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
    ],
    search: {
      provider: 'local',
      options: {
        placeholder: 'Search Cachet Docs...',
      },
    },
  },
  vite: {
    server: {
      host: true,
      fs: {
        allow: ['../../'],
      },
    },
  },
})
