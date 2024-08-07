---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Angular Gradle NX Monorepo'
  text: 'A PoC monorepo using NX to orchestrate angular and java projects'
  tagline: Build fast and scale with confidence
  image: /logo.webp
  actions:
    - theme: brand
      text: Get Started
      link: /intro/getting-started
    - theme: alt
      text: Documentation
      link: /docs/nx
    - theme: alt
      text: Reports
      link: /docs/reports

features:
  - icon: 🚀
    title: Nx Cache
    details: Use Nx to cache build artifacts and speed up your build process
  - title: Shared Libraries
    icon: 📚
    details: Build shared libraries to use across projects
  - title: Compose Applications
    icon: 🧩
    details:
      Use Nx to blazingly fastly compose applications from shared libraries
  - title: Centralized Configuration
    icon: ⚙️
    details: Store your configuration in one place and share it across projects
  - title: Nx Plugins
    icon: 🧰
    details: Use Nx plugins to quickly scaffold new projects and libraries
  - title: OS and IDE Agnostic
    icon: 🌍
    details: Develop on any OS and IDE
---
