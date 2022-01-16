module.exports = {
  title: 'RevPush',
  repo: ' makcmakc/rv-docs',
  docsDir: 'docs',
  themeConfig: {
    sidebar: {
      '/': getGuideSidebar()
    }
  },
  plugins: ['@vuepress/back-to-top']
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
      ]
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
      ]
    },
    {
      text: 'Data',
      children: [
        { text: 'Avatar', link: '/guide/frontmatter' },
        { text: 'Badge', link: '/guide/theming' },
        { text: 'Progress', link: '/guide/api' },
        { text: 'Pagination', link: '/guide/api' },
        { text: 'Tag', link: '/guide/api' },
      ]
    },
    {
      text: 'Feedback',
      children: [
        { text: 'Drawer', link: '/components/drawer' },
      ]
    }       
  ]
}

// Атомы (Atoms)
// Молекулы (Molecules)
// Организмы (Organisms)
// Шаблоны (Templates)