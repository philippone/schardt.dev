---
layout: layouts/post.njk
tags: ['post', 'project', 'private', 'homepage']
date: 2020-07-28
updated: Last Modified
title: schardt.dev
teaser: Rebuild of my personal homepage
technologies:
    - Web
    - 11ty
    - Apache Server
---


On my old webserver the PHP version was increased by the operator and the website at [philipptschardt.net](https://philippschardt.net) didn't work properly anymore, because the API for database access was not allowed anymore.

Therefore I decided to rebuild my website and make it as robust as possible. That means it should depend as little as possible on other systems, frameworks or versions of programming languages. Since I have no dynamic content, I was able to remove the database and build the whole website statically.

The list of features I wanted to support is as follows:

- New, responsive design
- Light/Dark Theme (CSS Custom Properties)
- High performance (static website)
- Multilingual (German, English)
- Progressive Web App features: Installable, Offline, Caching
- Open Source

The new design is based on the old one, but has been modernised and now works responsively. You can also switch between light and dark themes. When the page is opened, the theme setting of the operating system is applied. The recognition was realized via `matchMedia("(prefers-color-scheme: dark)")` and can be viewed in detail in the [Repository](https://github.com/philippone/schardt.dev/blob/master/src/assets/utils/theme.js). The change from light to dark is handled by a CSS class on the document, which changes the colors in the CSS custom properties.

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

To build the website statically I use [11ty](https://www.11ty.dev/), which promises to be a simple static site generator. And indeed I am positively surprised by the simplicity. Data can easily be stored and used in the 'JSON' format. The posts are written in [`Markdown`](https://markdown.de/) and the templates in [`Nunjucks`](https://mozilla.github.io/nunjucks/). The posts are created in English and in German in the respective subfolder ('de' or 'en') and are later delivered under these subfolder by the webserver. For this purpose, forwarding rules must be set via [`.htaccess' file](https://github.com/philippone/schardt.dev/blob/master/src/.htaccess) of the Apache server. The server recognizes the current language via the http-header and delivers either German or English (default).

Finally, a manifest and a service worker were added so that the site can also be installed as a PWA. To generate the Service Worker, especially to select which data should be precached, I used [Workbox](https://developers.google.com/web/tools/workbox). This is a the Service Woker Libary from Google and the only dependency in the built website.

This simplicity and independence is also reflected in the Lighthouse review:

<figure>
        <a href="{{'/assets/projects/homepage-schardt-dev/schardt-dev-lighthouse.png' | url}}">
            <img src="{{'/assets/projects/homepage-schardt-dev/schardt-dev-lighthouse.png' | url}}"alt="lighthosue results" style="width: 35%" />
        </a>
        <figcaption > Lighthouse</figcaption>
</figure>
