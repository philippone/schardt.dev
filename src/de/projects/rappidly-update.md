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

<p>Als Teil meiner Arbeit am DFKI wurde die Android App <a href="https://play.google.com/store/apps/details?id=org.rappidly.app" target="_blank" rel="noopener">Rappidly</a> welche ursprünglich von <a href="http://matthiasboehmer.de/" target="_blank" rel="noopener">Matthias Böhmer</a> programmiert wurde einem Update unterzogen. Die App zählt wie schnell Menschen ihre App Icons in ihrem Android Smartphone (Homescreen und App Drawer) finden können.</p>
<p>Meine Aufgabe war es einen kompetetiven Aspekt hinzuzufügen, um weitere Nutzer zu aquirieren. Dazu wurden Erungenschaften und verwschiedene Ranglisten eingeführt. Beispielsweise wurde erkannt, ob eine App in einem Ordner gefunden wurde. Es gibt eine Rangliste für die schnellste Zeit unabhänig von den Apps, aber zusätzlich werden beliebte Apps in eigenen Ranglisten gespeichert. </p>
<p>Zusätzlich ist es natürlich interessant zu wissen, welchen Weg der Nutzer zurück gelegt hat bis er die App gefunden hat. Dazu wurde die App mit dem Bedienungshilfen Service von Android ausgestattet, der es erlaubt fast alle Interaktionen abzufragen. Zur Auswertung wurden die Erkenntnisse in einer externen Datenbank gespeichert.</p>

<a href="https://play.google.com/store/apps/details?id=org.rappidly.app&hl=en" rel="nofollow" target="_blank" rel="noopener">rappidly (Play Store)</a>








