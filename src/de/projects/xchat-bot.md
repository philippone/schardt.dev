---
layout: layouts/post.njk
title: Chat Bot
teaser: Mattermost Chat Bot developed in Ergosign's Group Focus Time
date: 2018-06-03
tags: ["project", "professional", "private"]
technologies:
    - Machine Learning
    - Google Dialog API

---


Seit 2018 hat Ergosign die Focus Time eingeführt, welche einmal im Monat ein einem Freitag für 4 Stunden stattfindet. An diesem Tag beschäftigen sich alle Mitarbeiter mit einem (Innovations-)Thema Ihrer Wahl. Einmal im Jahr wird dieser Freitag zu einer Group Focus Time ausgeweitet, sodass während des ganzen Tages alle Kollegen aller Standort zusammen an Projekten arbeiten. 

<div style="padding:56.25% 0 0 0;position:relative;"><iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  src="https://player.vimeo.com/video/378785901" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/378785901">Ergosign Group Focus Time 2018</a> from <a href="https://vimeo.com/user4591735">Ergosign</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


Im Vorhinein wurden einige Themen gepitcht, um Kollegen darauf aufmerksam zu machen. So habe auch ich mein Thema eines Chat Bots vorgestellt und 8 weitere Kollegen dafür motivieren können.

An dem Tag haben wir die Ziele gemeinsam konkretisiert und uns darauf geeinigt einen Chat Bot zu entwickeln, der hift Kollegen ad-hoc zu finden und zumden die Terminfindung und Raumfindung erleichtert.

Neben der kurzen Forschungsanalyse von Dialogen und Gesprächsverläufen, konnten wir mithilfe der Dialog Api von Google einen MVP entwickeln, der in unserem hausinternen Chat Tool Mattermost auf die Anfragen der Kollegen und Kolleginnen in einer Art Konversation geantwortet hat.

<figure>
      <a href="{{'/assets/projects/x-chat-bot/chat-bot.png' | url}}">
          <img src="{{'/assets/projects/x-chat-bot/chat-bot.png' | url}}"alt="Chat Beispiel" />
      </a>
      <figcaption > Chat Beispiel </figcaption>
</figure>