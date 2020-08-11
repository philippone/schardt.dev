---
layout: layouts/post.njk
tags: ['post', 'project', 'professional']
date: 2019-10-22
title: Web Dev Guidelines
teaser: Ergosign's internal guidelines page for developers.
technologies:
    - Web
    - Vue
    - Vuepress
    - Gitlab CI
---

Die Web Dev Guidelines sind eine zentrale, interne Anlaufstelle für Entwickler bei Ergosign. Darin werden entwicklungsrelevante Themen, Best Practices und Prozesse definiert und dokumentiert.
Als Plattform dient dabei [Vuepress](https://vuepress.vuejs.org/). Dies ist ein statischer Seitengernerator, der auf Vue basiert. 
Dies stellt die leichte Bedienung und Erweiterbarkeit sowie eine hohe Performacne der vorgerenderten HTMO Seiten sicher.

<figure>
      <a href="{{'/assets/projects/web-dev-guidelines/dev-guide.jpg' | url}}">
          <img src="{{'/assets/projects/web-dev-guidelines/dev-guide.jpg' | url}}"alt="startpage" />
      </a>
      <figcaption > Startseite </figcaption>
</figure>

Die im Guide beschriebenen Themen können grob zusammengefasst werden:

- Allgemeines
  - Resourcen
  - Tools
  - Schulungen
- Workflow & Prozesse
  - Design Development Workflow
  - Agile Prozesse
  - Meetings
- Web
  - Essentials
  - Environment
  - Best Practices
  - Styling
  - Coding
  - Frameworks
  - Testing
  - Build Process
  - Reserch
  - Experiments
- QT

Dabei kann jeder Mitarbeiter leicht eigene Beiträge einpflegen, indem über einen Merge Request in dem Gitlab Reposetory ein eigener Branch mit dem Inhalt erzeugt wird. 
Dieser wird von mir, als Technology Expert Web, überprüft und freigegeben. Mit dem Zusammenbringen der Branches in den Master wird ein automatisierter Bauprozess angestoßen, der die neuste Version auf dem Webserver bereitstellt und somit jeder Mitarbeiter Zugang dazu hat.