---
layout: layouts/post.njk
tags: ['post', 'project', 'professional']
date: 2019-10-22
title: Web Dev Guidelines
teaser: Ergosign's internal guidelines page for developers.
technologies:
    - Web
    - vuefy
    - Gitlab CI
---

The Web Dev Guidelines is a central, internal documentation for developers at Ergosign. It defines and documents development-relevant topics, best practices and processes.
Vuepress](https://vuepress.vuejs.org/) serves as a platform which is a static site generator based on Vue.
This ensures easy handling and extensibility as well as a high performance of the pre-rendered HTML pages.

<figure>
      <a href="{{'/assets/projects/web-dev-guidelines/dev-guide.jpg' | url}}">
          <img src="{{'/assets/projects/web-dev-guidelines/dev-guide.jpg' | url}}"alt="startpage" />
      </a>
      <figcaption > Startseite </figcaption>
</figure>

The topics described in the guide can be roughly summarized:

- General information
  - Resources
  - Tools
  - Trainings
- Workflow & Processes
  - design development workflow
  - Agile processes
  - Meetings
- Web
  - Essentials
  - Environment
  - best practices
  - Styling
  - Coding
  - Frameworks
  - Testing
  - build process
  - Reserch
  - Experiment
- QT

Each employee can easily add her own contributions by creating a separate branch with the new content and submit it in a merge request in the Gitlab repository. 
This is reviewd and released by me, as Technology Expert Web. When the branches are merged into the master, an automated building process is triggered, which deploys the latest version on the web server. Thus, every employee has access to it.
