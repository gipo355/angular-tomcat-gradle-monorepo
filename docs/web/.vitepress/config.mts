import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/angular-tomcat-gradle-monorepo/',
  title: 'Angular Gradle Monorepo',
  description:
    'A proof of concept monorepo using NX to orchestrate angular and java projects',
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/intro' },
      { text: 'Reports', link: '/docs/reports/' },
      // { text: 'Examples', link: '/markdown-examples' },
      // { text: 'Examples', link: '/examples/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Intro',
        items: [
          { text: 'Getting Started', link: '/intro/getting-started' },
          { text: 'Features', link: '/intro/features' },
        ],
      },
      {
        text: 'Docs',
        items: [
          {
            text: 'Intro',
            link: '/docs',
          },
          {
            text: 'Nx',
            items: [{ text: 'Start', link: '/docs/nx' }],
          },
          {
            text: 'Gradle',
            items: [{ text: 'Start', link: '/docs/gradle' }],
          },
          {
            text: 'Releases',
            items: [{ text: 'Start', link: '/docs/releases' }],
          },
          {
            text: 'Actions',
            items: [{ text: 'Start', link: '/docs/actions' }],
          },
          {
            text: 'Reports',
            items: [
              {
                text: 'Intro',
                link: '/docs/reports',
              },
            ],
          },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' },
        ],
      },
    ],

    footer: {
      message: 'Released under the MIT License. Created with vitepress.',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gipo355/angular-tomcat-gradle-monorepo',
      },
    ],
  },
});
