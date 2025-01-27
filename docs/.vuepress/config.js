import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import nav from './configurations/nav.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: './public/images/logo.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
    navbar: nav,
    logo: '/images/logo.png',
    repo: 'https://github.com/1099216627',
    repoLabel: 'Github',
    lastUpdated: false,   // 禁用显示更新时间
    contributors: false,   // 禁用显示贡献者
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      // 配置项
      appId: 'BH4D9OD16A',
    }),
  ],
})