---
layout: layouts/post.njk
title: User Interface Design Study
teaser: Faceted browsing event manager prototype
date: 2012-07-01
tags: ["project", "study"]
technologies:
    - CogTool
    - User study
    - Scenarios
    - Questionnaire
team:
    - Nadja Rutsch
    - Thomas Rupp
    - Christian Neurohr
---

<p>In der Vorlesung ‘User Interface Design’ mussten alle Studenten einen medium-fidelity Prototype über das erst kürzlich eingeführte <a href='http://en.wikipedia.org/wiki/Faceted_search' target='_blank'>'faceted browsing’</a>entwickeln. Dieser Browsing-Stil basiert auf einigen Kernideen, kann aber in vielen verschiedenen Ausprägungen als User Interface vorkommen. Außerdem gibt es verschiedene denkbare Anwendungen für welche dieser Interaktionsstil eingesetzt werden kann.  </p>

<p>Die Basis bildet eine große Menge an Objekten, an denen der Nutzer interessiert ist. Dies können zum Beispiel neue Nachrichten, Elektronikprodukte, Flüge oder Kunstobjekte sein. Jedes Objekt kann durch seine Werte in mehreren Dimensionen oder Facetten beschrieben werden. Der Nutzer startet dabei mit dem kompletten Set und verkleinert es durch Auswählen und Spezifizieren von bestimmten Werten für die Facetten. Dieser Folterungsprozess wird solange wiederholt bis der Nutzer nur noch Objekte seines Interesses sieht. Beispielsweise die Menge von Kunstobjekten die von einem bestimmten Künstler in einem bestimmten Genre innerhalb einer bestimmten Zeitperiode entstanden sind.  </p>

<figure >
      <a href="{{'/assets/projects/user-interface-study/result.png' | url}}">
          <img src="{{'/assets/projects/user-interface-study/result.png' | url}}" alt="Prototype" />
      </a>
      <figcaption>Prototype</figcaption>
</figure>

<p>Eine Einschränkung des traditionellen Faceted Browsing ist, dass der Nutzer nur eine Datenmenge gleichzeitig verkleinern kann. Möchte er jedoch ein anderes Set betrachten, so muss er die Werte neu spezifizieren und kann dabei den Fokus auf seine eigentliches Interesse verlieren.<br/>
Aus diesem Grund haben wir einen Event-Manager entwickelt, der es ermöglicht mehrere Anfragen gleichzeitig anzuzeigen. Der Nutzer kann verschiedene Optionen auswählen und das System filtert die Events dementsprechend. Um das Interface zu evaluieren wurde eine Benutzerstudie durchgeführt, in der die Teilnehmer drei simulierte Szenarios durchspielen mussten. Abschließend wurde ein Fragebogen durchgeführt, der weitere Aufschlüsse geben sollte. Die Ergebnisse wurden danach in den Prototype eingepflegt, sodass die Benutzbarkeit des Event Managers verbessert werden konnte.</p>