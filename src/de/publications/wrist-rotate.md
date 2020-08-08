---
layout: layouts/post.njk
title: Wrist Rotate
teaser: A Personalized Motion Gesture Delimiter for Wrist-Worn Devices
date: 2015-04-14
tags: ["publication", "study", "hiwi"]
type: Paper
appear: Proceedings of the 14th International Conference on Mobile and Ubiquitous Multimedia (Mum-15). November 30 - December 2, Linz, Austria, ACM, 2015.
url: https://dl.acm.org/doi/10.1145/2836041.2836063
authors:
  - Frederic Kerber
  - Philipp Schardt
  - Markus Löchtefeld
technologies:
  - Arduino
  - Pebble Smartwatch
  - c++
team:
  - Dr. Markus Löchtefeld
  - { name: "Frederic Kerber", url: "https://www.frederickerber.de/" }
---

<p>WristRotate ist ein personalisierter Gesten-Delimiter der es erlaubt beim Gesteninput von Smartwatches unbeabsichtigte Bewegungen akkurat von echten Gesten zu trennen. Durch eine intensive Datenerhebung und Analyse war es uns möglich eine Geste zu identifizieren, die (1) im Alltag nicht benutzt wird, (2) leicht und schnell auszuführen und (3) leicht und zuverlässig zu erkennen ist. Um die Geste auszuführen wird das Handgelenk und der untere Arm zwei mal um circa 90° rotiert. Wir haben ein System zur Gestenerkennung implementiert, das auf Dynamic Time Warping basiert und aus einen Stream von Beschleunigungsdaten mögliche Gesten herausfiltert um diese bekannten Gesten zuzuordnen. Zur Datenaquise haben wir 435.1 Stunden an Beschleunigungsdaten einer Pebble Smartwatch während des Alltags aufgenommen. In dieser Zeit wurde die WristRotate Geste nur zwei mal gefunden.
</p>

<h3>Einleitung</h3>
<p>Mit dem aktuellen Interesse an Smartwatches und Fitness-Armbändern erhöht sich die Anzahl der Personen die ein Gerät an ihrem Handgelenk tragen das permanent Bewegungsdaten sammelt. Während Smartwatches oft einen anspruchsvollen Input bieten, ist dieser nicht immer passend (z.B. Spracheingabe) oder nicht immer möglich (z.B. Toucheingaben erfordern das Benutzen der anderen Hand). Fitness-Armbänder wie beispielsweise das <a href='http://www.fitbit.com/'>fitbit</a> beiten meistens keine direkten Eingabemöglichkeit. Sie sind meistens mit einem Smartphone des Nutzers verbunden. Wir haben ein gestenbasiertes Interaktionsdesign vorgestellt, dass eine unaufdringliche und einhändige Interaktion ermöglicht. Beispielsweise im Vergleich mit Spracheingabe, ist eine Gesteneingabe auch gesellschaftlich mehr akzeptiert.</p>

<p>Die wichtigen Faktoren zu einer hohen Nutzerakzeptanz eines gestenbasierten System sind hohe Zuverlässigkeit und hohe Erkennungsraten mit niedrigen False-Positives. Verglichen mit der Interaktion mit einem herkömmlichen Smartphone, stellen Geräte die am Handgelenk getragen werden ein größeres Problem dar. Während das Smartphone die meiste Zeit in der Hosentasche verweilt, sitzen die Smartwatches ständig am Handgelenk und sind damit ständig in Bewegung. Besonders wenn während dem Alltag komplexere Bewegungen mit dem Arm durchgeführt werden, können diese leicht als Gesten fehlinterpretiert (Midas touch problem) werden. Zur Interpretation von Gesten die auf internen Sensoren basieren gibt es bereits eine breite Facette an Techniken. Dennoch sind diese nicht dazu designt, um mit ständigen Bewegungen des Handgelenks umzugehen und beinhalten oft einen Auslöser zum Starten der tatsächlichen Erkennung (Drücken eines Button). Um dies zu vermeiden, ist ein effektiver und leicht zu benutzender Delimiter nötig, der unbeabsichtigte Bewegungen vom Gesteninput trennt. Danach kann die vorherig besprochene Gestenerkennung leicht eingesetzt werden.</p>

<figure >
      <a href="{{ '/assets/projects/wrist-rotate/wristrotate.png' | url}}" >
      <img src="{{ '/assets/projects/wrist-rotate/wristrotate.png' | url}}" alt="Wristrotate gesture" />
      </a>
      <figcaption>Wristrotate gesture</figcaption>
</figure>

<h3>Design von WristRotate</h3>

<p>Wie bereits erwähnt, zielen wir nicht nur darauf ab Smartwatches mit anspruchsvollen Eingabemöglichkeiten, wie Touchscreens oder einigen Buttons, zu unterstützen, da viele andere Geräte, wie Fitness-Armbänder, eine solche Möglichkeit nicht bieten. Ein weiterer Grund liegt in dem Zwang zur Interaktion eine zweite Hand benutzen zu müssen (opposite Hand for activating, OSI). Um auch Interaktionen während des Gehens zu unterstützen, bevorzugen wir die same-side Interaktion (SSI). Damit ist es beispielsweise möglich etwas in der einen Hand zu tragen während man immer noch mit seinem Gerät interagieren kann. Wir fokussieren uns deshalb auf die Informationen die wir aus den Bewegungssensoren gewinnen können.<br/>
Die Anforderungen die unser Delimiter erfüllen sollte:
<ol>
<li>Die Geste soll nicht unabsichtlich während des Alltages ausgelöst werden.</li>
<li>Die Geste soll keine langen oder komplizierten Bewegungen des Arms erfordern. </li>
<li>Die Geste soll leicht zu merken und schnell auszuführen sein.</li>
<li>Die Geste soll zuverlässig erkannt werden, wenn sie absichtlich ausgeführt wird</li>
<li>Die Geste soll sich nicht mit bereits bewehrten Gesten aus anderen Anwendungen überschneiden.</li>
</ol>
</p>

<p>Verglichen mit den möglichen Gesten, die mit einem Smartphone in der Hand ausgeführt werden können, sind die möglichen Gesten für Geräte am Handgelenk durch die Anatomie bereits limitiert. Unserer obigen Anforderungen beschränken diese noch weiter. Damit werden komplexe Gesten (lange und die erforderliche Bewegung) sowie bereits in anderen Anwendungen benutze Gesten (z.B. das Handgelenk zum Gesicht drehen um die Smartwatch zu aktivieren ) ausgeschlossen. Zusätzlich müssen alle Interaktionen die unabsichtlich während des Alltages ausgelöst werden ausgeschlossen werden, um False-Positives-Erkennungen zu vermeiden.<br/>
Die daraus identifizierten Gesten sind:
<ul>
<li>(a) Pull: Der Arm hängt parallel zum Körper und wird zur Schulter hochgezogen.</li>
<li>(b) Push: Der Arm wird parallel zum Boden gehalten und kurz nach vorne gestoßen.</li>
<li>(c) Curl: Der Arm ist parallel zum Boden und die Handfläche zeit nach oben. Der komplette Unterarm wird zur Schulter gezogen, ähnlich eines Bicepcurls.</li>
<li>(d) Rotate: Eine Rotation des unteren Arms und des Handgelenks. Zuerst nach außen, gefolgt von der Bewegung in die Ausgangsstellung.</li>
<li>(e) DoubleRotate: Die gleiche Bewegung wie bei Rotate, aber zwei mal schnell hintereinander ausgeführt.</li>
</ul>
</p>

<figure >
      <a href="{{ '/assets/projects/wrist-rotate/gestures.png' | url}}" >
      <img src="{{ '/assets/projects/wrist-rotate/gestures.png' | url}}" alt="Wristrotate " />
      </a>
      <figcaption >Wristrotate</figcaption>
</figure>

<h3>System zur Gestenerkennung</h3>

<p>Unser Ansatz zur Erkennung von Gesten basiert auf den Beschleunigungsdaten einer Pebble Smartwatch. Die Rohdaten des 3-Achsen Acchelerometers enthalten Rauschen und die Erdanziehungskraft, d.h. wenn die Uhr still liegt, dann ist die Erdanziehung die einzige Kraft, die den Sensor beeinflusst. Um diese Rohdaten in lineare Beschleunigung umzuwandeln und die unverfälschte Bewegung zu extrahieren, verwenden wir eine Kombination von Low- und High-Pass Filter.</p>
<p>Im Nächsten Schritt müssen potentielle Gesten aus dem kontinuierlichen Sensorstream herausgefiltert werden. Dazu benutzen wir einen Algorithmus welcher den Start- und Endpunkt einer Geste identifiziert und somit den Stream in Segmente teilt. Diese Segmente werden als potentielle Geste betrachtet und von dem Klassifizierungsalgorithmus weiter behandelt. Die Segmenterkennung basiert auf der Annahme dass die Bewegungsenergie der Smartwatch beim Beginn einer Geste über einen gewissen Grenzwert steigt und beim Ende unter einen weiteren Grenzwert fällt.<br/>
Um den Start- und Endpunkt einer potentiellen Geste zu berechnen, wird der Sliding Window Ansatz mit einer Fenstergröße von N=5 verwendet. Da die Daten der Pebble mit 50Hz aufgenommen werden, entspricht ein Fenster der Länge 100 ms. Um weiteres Rauschen herauszufiltern, verwenden wir zwei überlappende Fenster und berechnen den Durchschnittswert des Energieniveaus für jedes Fenster und vergleichen diesen mit den Grenzwerten. Diese Werte wurden empirisch ermittelt und liegen bei 70 bzw. 5. </p>

<p>
Dieser Segmentierungsprozess liefert potentielle Gesten die gegen die Delimiter Geste getestet werden müssen. Für die Klassifikation wird die Dynamic Time Warping (DTW) Technik eingesetzt, die von dem Feld der Spracherkennung bekannt ist und auch in vielen anderen Bereichen zum Einsatz kommt. Die DTW misst die Ähnlichkeit zweier Zeitsequenzen, die gegeneinander verschoben sein können, d.h. in Zeit und Geschwindigkeit verschieden sind, aber eigentlich die gleiche Geste abbilden. Genauer, der Algorithmus versucht ein optimales Matching zwischen den zwei Sequenzen zu bilden, indem diese nicht-linear in der Zeitdimension verzogen werden. Dabei entsteht ein Kostenwert. Diese sog. Warp Distance kann dazu benutzt werden um die Ähnlichkeit auszudrücken. Eine Distanz von 0 sagt aus, dass die zwei Sequenzen identisch sind. Je größer die Distanz wird, desto größer sind die Unterschiede der Sequenzen.
</p>

<h3>Ergebnisse</h3>

<p>Insgesamt wurden 7501 Segmente bzw. potentielle Gesten von dem Segmentierungsalgorithmus während der 435.1 Stunden erkannt. Zur Klassifikation wurden zusätzlich Trainingsdaten erhoben, um die potentiellen Gesten zu interpretieren. Die kombinierten Ergebnisse aller Teilnehmer können in folgernder Tabelle eingesehen werden. An diesen ist zu erkennen, dass die doubleRotate Geste über alle Teilnehmer hinweg nur 10 mal erkannt wurde.</p>

<table width="0" border="0" cellspacing="10">
  <tr>
    <th scope="col"></th>
    <th scope="col">pull</th>
    <th scope="col">push</th>
    <th scope="col">curl</th>
    <th scope="col">rotate</th>
    <th scope="col">dblRotate</th>
  </tr>
  <tr>
    <th scope="row">Erkennungen</th>
    <td>40</td>
    <td>79</td>
    <td>126</td>
    <td>608</td>
    <td>10</td>
  </tr>
  <tr>
    <th scope="row">FP Rate in [%]</th>
    <td>0.53</td>
    <td>1.05</td>
    <td>1.68</td>
    <td>8.11</td>
    <td>0.13</td>
  </tr>
  <tr>
    <th scope="row">Durchschnitt pro Stunde</th>
    <td>0.09</td>
    <td>0.18</td>
    <td>0.29</td>
    <td>1.40</td>
    <td>0.02</td>
  </tr>
</table>

<h3>Diskussion</h3>

<p>Unsere Analyse der 435.1 Stunden der aufgenommenen Daten zeigt, dass drei unserer vorgeschlagenen Delimter-Gesten nur sehr wenig vorkommen. Zusätzlich ist eine geringe False-Positive Rate auszumachen. Aufgrund der signifikant höheren False-Positive Rate der Rotate Geste scheint diese Geste keine passende Wahl zu sein. Eine bessere Wahl ist die double Rotate Geste, die sehr gute Resultate liefert. </p>
