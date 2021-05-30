---
layout: layouts/post.njk
tags: ["post", "project", "private"]
date: 2020-08-11
updated: Last Modified
title: Webbasiertes Bewerbungs-Template 
teaser: Template für Bewerbungen basierend auf Webtechnologien
technologies:
  - Web
  - CSS Custom Properties
  - 11ty
repo: https://github.com/philippone/job-application-template
---

Als ein kleines Experiment habe ich versucht wie gut sich Webseiten in ein Din A 4 Format pressen und drucken (bzw. als PDF exportieren) lassen. Was bietet sich dabei besser an als die veraltetet Indesign Vorlage für Bewerbungen in einen kleinen Onepager zu überführen.

Da ich 11ty als statischen Webseitgnerator in Kombination mit JSON Datein sehr gerne nutze, ist die Wahl nicht schwer gefallen. Die Struktur und das Design sind typischerweise in verschiedene Partials ausgelagert, die kombiniert, die Sektionen Deckblatt, Anschreiben, Lebenslauf und Arbeitsproben abdecken.
Die Daten für die einzelnen Bereiche sind in verschiedene JSON Datein ausgelagert und können unabhänig vom Design angepasst werden.

Die Vorlage ist <a target="_blank" href="https://github.com/philippone/job-application-template">frei zugänglich auf Github</a> zu finden sowie ein <a target="_blank" href="https://github.com/philippone/job-application-template/blob/main/example.pdf">Beispiel im PDF Format</a>.
