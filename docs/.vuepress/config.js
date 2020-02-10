module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VAQ-DOCS',
      description: 'Document for the Vue-APICloud-Quickstart'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VAQ-DOCS',
      description: 'Vue-APICloud-Quickstart 文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/img/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'w-xuefeng/vue-apicloud-quickstart',
    docsRepo: 'w-xuefeng/vaq-docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南', '深入')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-157789861-1'
      }
    ],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ],
    ['flowchart']
  ],
  extraWatchFiles: ['.vuepress/nav/en.js', '.vuepress/nav/zh.js']
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'dev-tools',
        'getting-started',
        'directory-structure',
        'assets',
        'build-package'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'life-cycle',
        'api-event',
        'network-request',
        'global-help'
      ]
    }
  ]
}
