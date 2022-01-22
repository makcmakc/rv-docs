module.exports = {
  title: 'RevPush',
  repo: ' makcmakc/rv-docs',
  base: '/rv-docs/',
  docsDir: 'docs',
  themeConfig: {
    sidebar: {
      '/': getGuideSidebar(),
    },
    // page meta
    editLinks: true,
    editLinkText: 'GitHub',
    lastUpdated: 'Последнее обновление',
  },
  markdown: {
    config: (md, options) => {

      const container = require('markdown-it-container')
      
      md.use(container, 'tab', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          const attributes = tabAttributes(token.info, options)

          if (token.nesting === 1) {
            return `<tab ${attributes}>\n`
          } else {
            return `</tab>\n`
          }
        },
      })
    },
  },
}

function getGuideSidebar() {
  return [
    {
      text: 'Basic',
      children: [
        { text: 'Button', link: '/components/button' },
        { text: 'Color', link: '/components/color' },
        { text: 'Icons', link: '/guide/configuration' },
        { text: 'Typography', link: '/guide/assets' },
        { text: 'Media', link: '/guide/markdown' },
        { text: 'Animation', link: '/guide/using-vue' },
      ],
    },
    {
      text: 'Form',
      children: [
        { text: 'Checkbox', link: '/guide/frontmatter' },
        { text: 'Input', link: '/guide/theming' },
        { text: 'Radio', link: '/guide/api' },
        { text: 'Switch', link: '/guide/api' },
        { text: 'Rate', link: '/guide/api' },
        { text: 'Select', link: '/guide/api' },
      ],
    },
    {
      text: 'Data',
      children: [
        { text: 'Avatar', link: '/components/avatar' },
        { text: 'Badge', link: '/components/badge' },
        { text: 'Progress', link: '/components/progress' },
        { text: 'Pagination', link: '/components/pagination' },
        { text: 'Tag', link: '/components/tag' },
      ],
    },
    {
      text: 'Feedback',
      children: [{ text: 'Drawer', link: '/components/drawer' }],
    },
  ]
}

// Атомы (Atoms)
// Молекулы (Molecules)
// Организмы (Organisms)
// Шаблоны (Templates)