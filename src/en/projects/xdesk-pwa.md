---
layout: layouts/post.njk
title: xDesk PWA
teaser: Ergosign's xDesk as Progressive Web App Experiment
date: 2020-06-03
tags: ["project", "professional", "private"]
technologies:
    - Web
    - Web Components
    - PostgreSql
    - NodeJS
---

xDesk is an app developed by <a href="https://www.ergosign.de/" target="_blank" ref="noopener"> Ergosign</a>. With the app, employees can conveniently book a workplace in the office from home or on the road and check in at their desk when they arrive at the office. More information is available in the <a href="https://www.ergosign.de/de/news/2020/news-xdesk.html" target="_blank" ref="noopener">news article from Ergosign</a>.

The app is developed with Google's framework <a href="https://flutter.dev/" target="_blank" ref="noopener"> Flutter</a>. In the backend, a PostgreSQL database and a Node Express Server which provides a REST interface are running in Docker Containers. The big advantage of Flutter compared to native IOS and Android implementations is that Flutter can be built from a common code base for any mobile or desktop platform, like MacOS and Windows, and can therefore be executed on any platform with high performance.

Progressive Web Apps follow a similar approach within the web platform. In recent years more and more interfaces have been made available to bring the web closer to the native implementation of different platforms. These include offline support and installability as well as notification or sensor data access.

Therefore, I have started an experiment in my spare time. I wanted to implement the xDesk App as a Progressive Web App. For this purpose, it should meet the following requirements:

- Installable
- Offline support (bundle + assets + get requests)
- Saving the login data
- Notifications
- QR Code recognition for check-in
- NFC recognition for check-in

At the time of my development start, the final design was not yet fixed. Therefore, the design of the PWA differs from the official app. Nevertheless, I was more interested in comparing how you can emulate a native app and which APIs are available.


<div class="figure-container">
    <figure >
        <a href="{{ '/assets/projects/x-desk/book.png' | url}}">
            <img src="{{ '/assets/projects/x-desk/book.png' | url}}" alt="buchen" style="border: 1px solid var(--ps--color-primary)" />
        </a>
        <figcaption>Book</figcaption>
    </figure>
    <div class="figure-seperator"></div>
    <div class="figure-seperator"></div>
    <figure >
      <a href="{{ '/assets/projects/x-desk/bookings.png' | url}}">
          <img src="{{ '/assets/projects/x-desk/bookings.png' | url}}" alt="bookings" style="border: 1px solid var(--ps--color-primary)" />
      </a>
      <figcaption>Bookings</figcaption>
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

The architecture of the application builds on top of the existing backend. The PWA consists of the following components:

- Following the guidelines of <a href="https://open-wc.org/" target="_blank" ref="noopener"> Open Web Components</a>
- Web Components (Lit-Html, Lit element)
- Single page application using the Vaadin router
- CSS only (no preprocessor)
- Custom CSS Properties
- Shadow Dom Encapsulation
- Typescript Support
- Es-dev-server during development
- Build with Rollup
- Tools:
  - EsLint
  - Karma
  - precompiled storybook

The following interfaces were used to implement the requirements:

- PWA Manifest for discoverability and installability
- Service Worker with caching strategies of requests and assets with Workbox
- Credentials API to store the login data
- Task Scheduling + Notifications to display a notification on the booking day and remind the user to check in
- Media Devices API for using the camera
- Shape Detection to detect the QR-Code (only Chrome; for other browsers a polyfill will be loaded)
- NFC is read by Android and opens a web page, in this case the PWA Check in page, which automatically logs the user in, similar to the QR Code

Over time, the app has been expanded (with the support of Ergosign) to include a user and location and room management, which also allows the capacity of the rooms to be quickly adjusted.

<div class="figure-container">
    <figure >
        <a href="{{ '/assets/projects/x-desk/user.png' | url}}">
            <img src="{{ '/assets/projects/x-desk/user.png' | url}}" alt="user managment" style="border: 1px solid var(--ps--color-primary)" />
        </a>
        <figcaption>User Managment</figcaption>
    </figure>
    <div class="figure-seperator"></div>
    <div class="figure-seperator"></div>
    <figure >
      <a href="{{ '/assets/projects/x-desk/locations.png' | url}}">
          <img src="{{ '/assets/projects/x-desk/locations.png' | url}}" alt="location managment" style="border: 1px solid var(--ps--color-primary)" />
      </a>
      <figcaption>Location Managment</figcaption>
    </figure>
</div>

