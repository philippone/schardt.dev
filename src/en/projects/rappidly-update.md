---
layout: layouts/post.njk
title: Rappidly
teaser: Revision of Rappidly for Android
date: 2014-01-01
tags: ["project", "study", "hiwi"]
technologies:
    - Android
    - Google Play Games Services
    - Google Accessibility Services
---

As part of my work at DFKI I revised the Android app <a href="https://play.google.com/store/apps/details?id=org.rappidly.app" target="_blank" rel="noopener">Rappidly</a> which was originally programmed by <a href="http://matthiasboehmer.de/" target="_blank" rel="noopener">Matthias Böhmer</a>. The app counts how fast people can find app icons on their homescreen and app drawer.

<div class="figure-container">
<figure>
      <a href="{{ '/assets/projects/rappidly/start.png' | url }}">
          <img src="{{ '/assets/projects/rappidly/start.png' | url }}" alt="Startscreen" />
      </a>
      <figcaption>Startscreen</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/projects/rappidly/search.png' | url }}" >
          <img src="{{ '/assets/projects/rappidly/search.png' | url }}" alt="Search" />
      </a>
      <figcaption>Search</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/projects/rappidly/erfolge.png' | url }}">
          <img src="{{ '/assets/projects/rappidly/erfolge.png' | url }}" alt="Achievements" />
      </a>
      <figcaption>Achievements</figcaption>
    </figure>
<figure>
      <a href="{{ '/assets/projects/rappidly/ranking.png' | url }}">
          <img src="{{ '/assets/projects/rappidly/ranking.png' | url }}" alt="Ranking" />
      </a>
      <figcaption>Ranking</figcaption>
    </figure>
</div>

My task was to add an competetive aspect. Therefore I added achievements (e.g. open app in folder) and ranking lists (fastest time overall or for certain apps). Furthermore it is interesting to know the route and actions of the user until she opens the app. With the use of Android's Accessibility Services, it was possible to track the actions and transfer to an database.

<a href="https://play.google.com/store/apps/details?id=org.rappidly.app&hl=en" rel="nofollow" target="_blank" rel="noopener">rappidly (Play Store)</a>

