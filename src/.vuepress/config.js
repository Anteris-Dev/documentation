const { description } = require('../../package')

module.exports = {
  base: process.env.VUEPRESS_BASE || '/',

  title: 'Anteris Documentation',
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    logo: '/assets/img/anteris-logo.png',
    repo: 'https://github.com/anteris-dev/documentation',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Update At',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Join the Discord!', link: 'https://discord.gg/JmYNRbg' }
    ],
    sidebar: {

      // Changes the sidebar for the Autotask Client page
      '/autotask-client/': [
        {
          title: 'Autotask Client',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'entities',
            'crud-actions',
          ]
        },
        {
          title: 'GitHub',
          path: 'https://github.com/anteris-dev/autotask-client',
        }
      ],

      // Changes the sidebar for the cache page
      '/cache/': [
        {
          title: 'Cache',
          collapsable: false,
          children: [
            '',
            'interacting-with-the-cache',
            'cache-proxy',
          ]
        },
        {
          title: 'GitHub',
          path: 'https://github.com/anteris-dev/cache',
        },
      ],

      // Changes the sidebar for the DDD Laravel page
      '/ddd-laravel/': [
        {
          title: 'Domain Driven Laravel',
          collapsable: false,
          children: [
            '',
            'commands',
            'changes-made',
          ]
        }
      ],

      // Changes the sidebar for the DTO Factory page
      '/dto-factory/': [
        {
          title: 'Data Transfer Object Factory',
          collapsable: false,
          children: [
            '',
            'getting-started',
          ]
        },
        {
          title: 'GitHub',
          path: 'https://github.com/anteris-dev/data-transfer-object-factory',
        },
      ],

      // Sets the sidebar for the home page
      '/': [
        ['/autotask-client/', 'Autotask Client'],
        ['/cache/', 'Cache'],
        ['/ddd-laravel/', 'Domain Driven Laravel'],
        ['/dto-factory/', 'Data Transfer Object Factory'],
      ]
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/last-updated',
    'vuepress-plugin-smooth-scroll'
  ]
}
