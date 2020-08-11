---
layout: layouts/post.njk
title: xDesk PWA
teaser: Ergosign's xDesk as Progressive Web App Experiment
date: 2020-06-03
tags: ["project", "professional", "private"]
technologies:
    - Web
    - Web Components
    - Lit-HTML
    - PostgreSql
    - NodeJS
    - Express Server
    - Docker
---

xDesk ist eine App, die von <a href="https://www.ergosign.de/" target="_blank" ref="noopener"> Ergosign</a> entwickelt wurde. Mit der App können die Mitarbeiterinnen und Mitarbeitern bequem von zu Hause aus oder unterwegs einen Arbeitsplatz im Büro zu buchen und beim Eintreffen im Büro an ihrem Platz einchecken. Mehr Informationen gibt es in dem <a href="https://www.ergosign.de/de/news/2020/news-xdesk.html" target="_blank" ref="noopener">Newsartikel von Ergosign</a>.

Die App ist mit Google's Framework <a href="https://flutter.dev/" target="_blank" ref="noopener"> Flutter</a> entwickelt. Im Backend laufen in Docker Containern eine PostgreSQL Datenbank und ein Node Express Server der eine REST Schnittstelle zur Verfügung stellt. Der große Vorteil von Flutter im Vergleich zu nativen IOS und Android Implementation ist, dass Flutter für jede mobile aber auch desktop Plattform, wie MacOS und Windows, aus einer gemeinsamen Codebasis heraus gebaut werden kann und damit auf jeder Plattform performant ausführbar ist.

Progressive Web Apps folgen einem ähnlichen Ansatz innerhalb der Web Plattform. In den letzten Jahren sind immer mehr Schnittstellen zur Verfügung gestellt worden, die das Web näher an die nativen Implementation der verschiedenen Platformen heranbringen. Dazu zählen beispielsweise Offline-support und Installierbarkeit sowie Notification oder Sensordatenzugriffe.

In meiner Freizeit habe ich deshalb das Experiment gewagt, die xDesk App als Progressive Web App nachzubauen. Dazu sollte sie folgenden Anforderungen  erfüllen:

- Installierbar
- Offline-Support (Bundle + Assets + Get Requests)
- Speichern der Login Daten
- Notifications
- QR Code Erkennung zum Einchecken
- NFC Erkennung zum Einchecken

Da zum Zeitpunkt meiner Entwicklung noch nicht das finale Design feststand, weicht das Design der PWA von der offiziellen App ab. Jedoch ging es mir auch mehr um den Vergleich, wie gut man eine native App nachbauen kann und welche APIs dazu zur Verfügung stehen.

<div class="figure-container">
    <figure >
        <a href="{{ '/assets/projects/x-desk/book.png' | url}}">
            <img src="{{ '/assets/projects/x-desk/book.png' | url}}" alt="buchen" style="border: 1px solid var(--ps--color-primary)" />
        </a>
        <figcaption>Buchen</figcaption>
    </figure>
    <div class="figure-seperator"></div>
    <div class="figure-seperator"></div>
    <figure >
      <a href="{{ '/assets/projects/x-desk/bookings.png' | url}}">
          <img src="{{ '/assets/projects/x-desk/bookings.png' | url}}" alt="bookings" style="border: 1px solid var(--ps--color-primary)" />
      </a>
      <figcaption>Buchungen</figcaption>
    </figure>
    <div class="figure-seperator"></div>
    <div class="figure-seperator"></div>
    <figure >
      <a href="{{ '/assets/projects/x-desk/checkin.png' | url}}">
          <img src="{{ '/assets/projects/x-desk/checkin.png' | url}}" alt="checkin" style="border: 1px solid var(--ps--color-primary)" />
      </a>
      <figcaption>Checkin</figcaption>
    </figure>
</div>

Die Architektur der Anwendung baut auf dem Vorhandenen Backend auf. Die PWA setzt sich dabei aus folgenden Komponenten zusammen:

- Anlehnung an die Leitlinien von <a href="https://open-wc.org/" target="_blank" ref="noopener"> Open Web Components</a>
- Web Components (Lit-Html, Lit-Element)
- Single Page Application mithilfe des Vaadin-Router
- CSS only (kein Preprocessor)
- Custom CSS Properties
- Shadow Dom Encapsulation
- Typescript Support
- Es-dev-server während der Entwicklung
- Build mit Rollup
- Tools: 
  - EsLint
  - Karma
  - precompiled Storybook

Zur Umsetzung der Anforderungen wurden die folgenden Schnittstellen verwendet:

- PWA Manifest zur Auffindbarkeit und Installierbarkeit
- Service Worker mit Caching Strategien der Requests und Assets mit Workbox
- Credentials API zum Speichern der Einlogg-Daten
- Task Scheduling + Notifications um eine Benachrichtigung am Buchungstag anzuzeigen und den Nutzer zu erinnern einzuchecken
- Media Devices API zur Nutzung der Kamera
- Shape Detection zur Erkennung des QR-Code (only Chrome; für ander Browser wir dein Polyfill geladen)
- NFC wird von Android gelesen und öffnet eine Webseite, in diesem Fall die PWA Check in Seite, die den Nutzer automatisch einloggt, ähnlich dem QR Code 

Die App wurde im Laufe der Zeit mit Unterstützung von Ergosign dahingehend ausgebaut, dass eine Nutzer und Standort sowie Raumverwaltung eingabut wurde, mit der man auch die Kapazitäten der Räume schnell anpassen kann.

<div class="figure-container">
    <figure >
        <a href="{{ '/assets/projects/x-desk/user.png' | url}}">
            <img src="{{ '/assets/projects/x-desk/user.png' | url}}" alt="user managment" style="border: 1px solid var(--ps--color-primary)" />
        </a>
        <figcaption>Nutzer Managment</figcaption>
    </figure>
    <div class="figure-seperator"></div>
    <div class="figure-seperator"></div>
    <figure >
      <a href="{{ '/assets/projects/x-desk/locations.png' | url}}">
          <img src="{{ '/assets/projects/x-desk/locations.png' | url}}" alt="location managment" style="border: 1px solid var(--ps--color-primary)" />
      </a>
      <figcaption>Standort und Räume Managment</figcaption>
    </figure>
</div>

