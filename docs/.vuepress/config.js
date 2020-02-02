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
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
          '/plugin/': []
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
          '/guide/': getGuideSidebar('指南', '深入'),
          '/plugin/': []
        }
      }
    }
  }
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: []
    }
  ]
}
