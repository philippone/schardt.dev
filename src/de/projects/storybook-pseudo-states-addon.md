---
layout: layouts/post.njk
title: Storybook Pseudo States Add-on
teaser: Open Source Add-on to easily display css pseudo states in storybook.
date: 2019-08-03
tags: ["project", "professional", "private", "open-source"]
technologies:
    - Web
    - StorybookJs
    - Typescript
    - Angular
    - Vue
    - React
    - Lit-Html
---

[Storybook](https://storybook.js.org/) ist ein Open Source Tool das den Entwicklungsprozess organisiert und es erlaubt sich bei der UI-Entwicklung isoliert auf eine Komponente zu konzentrieren. Es bietet Unterstützung für viele gängige Frameworks wie React, Angular, Vue oder auch Web Components. Zudem kann eine „Live“-Dokumentation erstellt werden und die Stories können zum Testen verwendet werden.
In den letzten Jahren ist es zum Industrie-Standard geworden und hat auch bei Ergosign die intern entwicklete UX Library abgelöst, die ähnliche Funktionalität für AngularJS und Angular geboten hat.

Die Basisfunktionalität von Storybook kann über sogenannte Add-ons erweitert werden, sodass die Entwickler weitere Werkzeuge zur Hand haben. Beispielsweise bietet das Viewport Add-on die Möglichkeit die Komponente schnell in verschiedenen Browsergrößen (Smartphone, Tablet, Desktop) darzustellen.

Das Storybook Pseudo States Add-on erweitert die Funktionalität von Storybook dahingehend, dass die Komponente in den verschiedenen Pseudo States (:hover, :focus, :active, :visited, :dis-abled, :checked, etc) gleichzeitig dargestellt werden. Zudem können auch HTML-Attribute (readonly, valid, etc) sowie Javascript Properties bzw. framework-spezifische deklarative Properties (selected, big-version, etc) aktiviert werden. Welche Status eine Komponente darstellen soll, kann leicht über eine Konfiguration in einer Story definiert werden.

<figure>
      <a href="{{'/assets/projects/storybook-pseudo-states-addon/addon-example.jpg' | url}}">
          <img src="{{'/assets/projects/storybook-pseudo-states-addon/addon-example.jpg' | url}}"alt="Beispiel Stroy" />
      </a>
      <figcaption > Beispiel-Stroy</figcaption>
</figure>

Diese übersichtliche Darstellung macht einen Abgleich mit den Designanforderungen für den Entwickler, aber auch bei Design Reviews leichter, da nicht alle Status manuell herbeigeführt werden müssen. Außerdem ist dadurch eine leichte Einbindung in Tools zum automatisierten visuellen Regressiontesten möglich.

Das Add-on wurde im August 2019 in der Focus Time bei Ergosign begonnen sowie ab Oktober 2019 im Zuge meiner Rolle als Technology Expert Web weiterentwickelt. Aktuell steht es als Open Source Tool in dem Github Repository von Ergosign für alle zur Verfügung. 

Zudem wurde das Tool von mir auf einem Web-Worker Meet-up zum Thema Storybook vorgestellt und ist auf reges Interesse gestoßen.

- <a href="https://github.com/Ergosign/storybook-addon-pseudo-states" rel="noopener" target="_blank">Github Repo</a>
- <a href="https://philippone.github.io/angular-ci-storybook-pseudo-states-example/?path=/story/simple-button--simple-button" rel="noopener" target="_blank">Live Demo in Angular</a>