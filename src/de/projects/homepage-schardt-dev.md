---
layout: layouts/post.njk
tags: ["post", "project", "private", "homepage"]
date: 2020-07-28
updated: Last Modified
title: schardt.dev
teaser: Generalüberholung meiner Homepage
technologies:
  - Web
  - CSS Custom Properties
  - Static Web Page
  - 11ty
  - PWA
  - Workbox
  - Apache Server
  - Open Source
repo: https://github.com/philippone/schardt.dev
---

Auf meinem alten Webserver wurde vom Betreiber die PHP Version erhöht und die Webseite unter [philipptschardt.net](https://philippschardt.net) funktionierte nicht mehr richtig, da die API zum Datenbankzugriff nicht mehr erlaubt war.

Deshlab enschied ich mich meine Webseite neu aufzusetzen und so robust wie möglich zu gestalten. Das heißt sie soll so wenig wie möglich von anderen Systemen, Frameworks oder Versionen von Programmiersprachen abhänig sein. Da ich auch keine dynamischen Inhalte habe, konnte ich mich von der Datenbank trennen und die komplette Webseite statisch bauen.

Die Liste an Features, die ich unterstützen wollte ist folgende:

- Neues, responsives Design
- Light/Dark Theme (CSS Custom Properties)
- Hohe Performance (statische Webseite)
- Mehrsprachig (Deutsch, Englisch)
- Progressive Web App Features: Installierbar, Offline, Caching
- Open Source

Das neue Design ist an dem alten angelehnt, wurde jedoch modernisiert und funktioniert jetzt auch responsiv. Zudem kann man zwischen hellem und dunkelem Theme hin und her schalten. Beim Öffnen der Seite wird zudem die vom Nutzer gewählte Eistellung im Betriebssystem übernommen. Die Erkennung erfolgt dabei über `matchMedia("(prefers-color-scheme: dark)")` und kann genauer im [Repository](https://github.com/philippone/schardt.dev/blob/master/src/assets/utils/theme.js) eingesehen werden. Der Wechsel von hell zu dunkel wird durch eine CSS Klasse auf dem Document gehändelt, der die Farben in den CSS Custom Properties austauscht.

<div class="figure-container">
    <figure>
        <a href="{{'/assets/pwa/screenshots/desktop.png' | url}}">
            <img src="{{'/assets/pwa/screenshots/desktop.png' | url}}"alt="Desktop" />
        </a>
        <figcaption > Desktop Version </figcaption>
    </figure>
    <div class="figure-seperator"></div>
    <figure>
        <a href="{{'/assets/pwa/screenshots/mobile.png' | url}}">
            <img src="{{'/assets/pwa/screenshots/mobile.png' | url}}"alt="Mobile" style="width: 35%" />
        </a>
        <figcaption > Mobile Version </figcaption>
    </figure>
</div>

Um die Webseite statisch zu bauen nutze ich [11ty](https://www.11ty.dev/), der verspricht ein einfacher statischer Site Generator zu sein. Und tatsächlich bin ich von der Einfachheit positiv überrascht. Daten können leicht im `JSON`-Format gespeichert und genutzt werden. Die Beiträge sind in [`Markdown`](https://markdown.de/) geschrieben und die Templates in [`Nunjucks`](https://mozilla.github.io/nunjucks/). Die Beiträge werden zudem in Englisch und in Deutsch in dem betreffenden Unterordner ('de' oder 'en') angelegt und später unter dem Unterverzeichnis ausgeliefert. Dazu müssen Weiterleitungsregeln über die [`.htaccess` Datei](https://github.com/philippone/schardt.dev/blob/master/src/.htaccess) des Apache Server eingestellt werden. Der Server erkennt über den http-header die aktuell eingestellte Sprache und liefert entweder Deutsch oder Englisch (default) aus.

Zum Schluss wurde noch ein Manifest sowie ein Service Worker hinzugefügt, sodass man die Seite auch als PWA installieren kann. Zur Generierung des Service Workers, vor allem zur bequemen Auswahl welche Daten geprecached werden sollen, nutze ich [Workbox](https://developers.google.com/web/tools/workbox). Dies ist eine die Service Woker Libary von Google und zudem die einzige Abhänigkeit in der gebauten Webseite.

Diese Einfachheit und Unabhänigkeit spiegelt sich auch im Lighthouse Testbericht wieder:

<figure>
        <a href="{{'/assets/projects/homepage-schardt-dev/schardt-dev-lighthouse.png' | url}}">
            <img src="{{'/assets/projects/homepage-schardt-dev/schardt-dev-lighthouse.png' | url}}"alt="lighthosue results" style="width: 35%" />
        </a>
        <figcaption > Lighthouse</figcaption>
</figure>
