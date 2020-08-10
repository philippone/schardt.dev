---
layout: layouts/post.njk
tags: ['publication', 'professional']
date: 2020-05-13
title: Automated Visual Regression Testing for Responsive Web Technologies
teaser: Review of Peter Kuhns Bachelor Thesis at Ergosign
type: Review
authors:
    - Pether Kuhn
reviewer:
    - Prof. Dr. Naumann
    - Philipp Schardt
technologies:
    - HTML
    - CSS
    - Javascript
    - Storybook
    - Playwright
    - Pixelmatch
---

Frontend development is hard. Adaption to the layout affects hidden parts of the layout and produce unnoticed side effects.

Xight is a tool for detecting visual regressions in your applications! It compares two screenshots based on your configurations. You can test cross-browser and responsive!

Since Xight is using Playwright under the hood you can test your Applications on Chromium, Firefox and Webkit! Also there are predefined resolutions and you can even add your custom sizes.

<a href="https://www.npmjs.com/package/@pietsen/xight-npm" target="_blank" rel="noopener">Xight auf NPM</a>