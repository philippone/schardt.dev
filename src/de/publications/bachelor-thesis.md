---
layout: layouts/post.njk
tags: ['publication', 'study']
date: 2014-04-23
title: Sensor-based hand posture recognition to develop dynamic adaptive user interfaces on smartphones
teaser:  Bachelorarbeit an der Universität des Saarlandes
abstract: Often, we operate mobile devices using only one hand. The hand thereby serves two purposes holding the device and op- erating the touch screen with the thumb. The current trend of increasing screen sizes even further (i.e., up to 6-inch), how- ever, makes it close to impossible to reach all parts of the screen for users with average hand sizes. One solution is to offer adapted user interfaces for such one-handed interaction. These modes have to be triggered manually and thus induce a critical overhead. Furthermore, these adaptations do not ad- dress the handedness (i.e., the hand currently operating the device). In this paper, we present an algorithm that allows determining the handedness of the user from their unlocking behaviour. Our algorithms correctly distinguishes one- and two-handed usage as well as left- and right handed unlocking in 98.51% of all cases. This is achieved through a k-nearest neighbour comparison of the internal sensor readings of the smartphone during the unlocking process.
type: Bachelorarbeit
authors:
    - Philipp Schardt
reviewer:
    - Prof. Antonio Krüger
    - Prof. Sebastian Boring
Advisor:
    - Dr. Markus Löchtefeld
technologies:
    - Machine Learning
    - Android
    - Java
---
<p>Sobald man ein mobiles Gerät, wie Smartphones, einhändig bedient, dann wählt man Objekte auf dem Touchscreen mit dem Daumen aus während der Rest der Hand das Gerät festhält. Der aktuelle Trend von Smartphoneherstellern geht dahin, dass die Displaygrößen über 6 Zoll groß werden und es dadurch fast unmöglich wird alle Teile des Displays einhändig mit einer durchschnittlichen Daumenlänge zu erreichen. Um diesem Problem entgegenzuwirken wurden bereits verschiedene angepasste User Interfaces zur einhändigen Bedienung entwickelt. Dennoch müssen diese immer manuell aktiviert werden.</p>

<p>In meiner Bachelorarbeit habe ich deshalb einen Algorithmus entwickelt der es erlaubt die Händigkeit des Nutzers bereits während dem Entsperren des Gerätes zu bestimmen. Basierend auf einem k-nächsten Nachbarn Vergleich der initialen Sensordaten während des Entsperrprozesses, unterscheidet der Algorithmus ein- und zweihändige sowie linke und rechte Interaktion bis zu 98,35% korrekt.</p>


<h3>Motivation</h3>
<p>Mit der Einführung des Apple iPhone wurden Touchscreen de-facto die Standardeingabe bei mobilen Geräten. Anders wie frühere Geräte, die verschiedene Formfaktoren und Layouts von Hardware-Knöpfen hatten, bieten Touchscreens ein flexibles Layout. Dennoch gibt es auch verschiedene Nachteile. Neben dem Fehlen von haptischem Feedback, ist das Hauptproblem, dass das Display und dessen Größe auch die Größe und Form des gesamten Gerätes definiert. Dieser Effekt verstärkt sich zudem mit dem aktuellen Trend zu über 6 Zoll großen Displays (z.B. das Samsung Galaxy Note 4). Dennoch werden diese großen Geräte immer beliebter, was man am iPhone 6 beobachten kann, das eine Größe von 4.7 Zoll hat und in den ersten drei Tagen bereits über zehn Millionen mal verkauft wurde. Es wird unmöglich ein solches solches Gerät noch bequem mit einer Hand zu bedienen (d.h. alle Teile des Displays erreichen zu können) ohne den Griff zu ändern.</p>

<p>Das Problem liegt darin - während man das Gerät in einem stabilen Griff hält - , dass allein der Daumen die Objekte auf dem Touchscreen berühren kann. Dies ist eine besondere Interaktion mit Touchscreens und resultiert in einem physikalischen Overhead. Mit größeren Displaygrößen wird es für Nutzer mit durchschnittlichen Handgrößen unmöglich alle Teile des Displays zu erreichen ohne den Griff zu wechseln. Der Griff hat aber signifikante Auswirkungen auf die Performanz des Nutzers. Aus diesem Grund ist es wichtig die Händiget des Nutzers und die Anzahl der Hände die in die Interaktion involviert sind zu kennen. Einhändig die obere Ecke eines großen Gerätes zu erreichen ist unmöglich ohne Anpassung des Interfaces. Es geht aber damit einher, dass man die Gefahr eingeht den Griff zu ändern und dabei das Gerät fallen zu lassen. Zudem beeinflusst es die Performanz der Interaktion.</p>

<p>Mit dem Einzug der größeren Displays haben die Hersteller auch begonnen User Interface Anpassungen vorzunehmen. Zum Beispiel das iPhone 6 erlaubt es das Interface temporär nach unten zu ziehen. Dennoch diese Anpassung hat verschiedene Limitierungen: (1) die Hälfte des User Interface ist nicht mehr sichtbar; (2) nachdem eine Aktion ausgeführt wurde, muss die Anpassung erneut aktiviert werden, was potentiell mehr Interaktionen erfordert als für die eigentliche Aufgabe nötig. Im Gegenzug würde eine immer aktive Anpassung den Nutzer dazu auffordern die Anpassung zu aktivieren und zu deaktivieren. Zusätzlich müssen die Nutzer mit dieser (3) generischen Adaption den Griff auch etwas ändern. Trotz dieser Limitierungen erlauben es Anpassungen an das User Interface bekannte Affordances zu erhalten.</p>


<p>
Um Adaptionen auf ein nächstes Level zu bringen, präsentiere ich einen Algorithmus der automatisch erkennt, ob der Nutzer das Gerät mit einer oder zwei Händen bedient sowie in welcher Hand das Gerät bei einhändiger Bedienung liegt. Mein Algorithmus basiert dabei auf den Sensordaten (Beschleunigungsmesser, Geräteorientierung und Touchpunkte auf dem Display) während des Entsperrvorgangs. Zum Vergleich wird die k-nearest Neighbour (kNN) Technik mit gewichtetem dynamic time warping (DTW) als Distanzfunktion benutzt. Bereits mit einem kleinen Trainingsset (n=5) für jede Handhaltung, wird eine Genauigkeit der Erkennung von 97,78% für die Entsperrung durch Wischen, 98,51 für die Musterentsperrung und 99,25% für die Pinentsperrung erzielt. Diese Erweiterung würde es schaffen, dass die Nutzer nicht zwischen linkem und rechtem Handmodus, beispielsweise bei einhändigen Tastaturen, hin und her schalten müssten.
</p>


<h3>Konzept</h3>
<p>Bevor man eine Anpassung des User Interface in Betrachtung zieht, ist es wichtig herauszufinden, ob der Benutzer das Gerät einhändig oder zweihändig bedient. Bei zweihändiger Bedienung ist es nicht nötig das Interface anzupassen, dem hingegen muss man bei einhändiger Bedienung zusätzlich wissen in welcher Hand das Gerät liegt. Somit kann man eine optimale Anpassung gewährleisten und der Nutzer muss die Änderung nicht manuell aktivieren.</p>
<p>Um dies umzusetzen, sammelt der Algorithmus verschiedene Sensorsamples (Beschleunigungsmesser, Geräteorientierung und Touchpunkte) während des Entsperrvorgangs. Diese Daten werden mit bereits vorherigen Aufnahmen verglichen von denen die Händigkeit bekannt ist. Für die Klassifikation wird dabei ein kNN, eine nicht parametrische Klassifizierungsmethode, benutzt. Der Input besteht dabei aus k Trainingssamples und dem unbekannten Sample, der Output ist die Klassenzugehörigkeit (Händigkeit). Das heißt jedes neue Sample wird durch eine Mehrheitswahl gewählt, wobei das Datenset zu den nächsten k Nachbarn am nächsten liegt.</p>


<div class="figure-container">

<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/studie_move.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/studie_move.png' | url}}" alt="Unlock: Move" />
      </a>
      <figcaption>Unlock: Move</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/studie_pattern2.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/studie_pattern2.png' | url}}" alt="Unlock: Pattern" />
      </a>
      <figcaption>Unlock: Pattern</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/studie_pin2_applied.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/studie_pin2_applied.png' | url}}" alt="Unlock: Pin" />
      </a>
      <figcaption>Unlock: Pin</figcaption>
    </figure>
</div>

<p>Normalerweise wird für eine solche Klassifikation eine Distanzfunktion benötigt. Diese sollte auch berücksichtigen, dass die Nutzer den Entsperrvorgang jedes Mal etwas anders ausführen. Deshalb wird zuerst DTW angewendet, um die verschieden langen Sensordaten vergleichen zu können. Ursprünglich wurde das DTW für die Spracherkennung entwickelt und ist dafür da, um zwei Zeitsequenzen zu vergleichen. Dabei wird nach Ähnlichkeiten zwischen beiden Sequenzen gesucht. Als Ergebnis berechnet das DTW eine Distanz, die Warp Distance, die angibt wie ähnlich eine Sequenz zu der Referenz ist. Eine Warp Distanz von 0 sagt aus, dass beide identisch sind. Größere Distanzen bezeichnen damit größere Unterschiede in den Sets.</p>
<p>Um die Trainingsdaten der Nutzer zu bekommen, wurden sie gefragt die Entsperrvorgänge in einer Studie durchzuführen, d.h. die Nutzer mussten einen Pin oder ein Muster mit der Linken und der rechten sowie einhändig und zweihändig eingeben. Dies ist ähnlich dem bereits vorhandenen  Mechanismus beim einstellen eines Musters oder Pins und würde nur zu einem minimalen Overhead führen.</p>

<h3>Unlock Nutzerstudie</h3>
<p>Um zu Testen, ob dieser Ansatz passend für die Erkennung der Händigkeit ist, wurde das vorher beschriebene Konzept implementiert. Die erforderlichen (Sensor-)Daten zu erheben, wurden drei Entsperr-Apps implementiert. Die Applikationen entsprechen den originalen Entsperr-Apps des Android Open Source Projekts. Sie wurden jedoch angepasst, sodass sie die Daten speichern, d.h. den Touchpunkt (x,y Position und die Größe) sowie die Accelerometer- und Geräteorientierungsinformationen. Den Pin- und Muster-Apps wurde ein Feld hinzugefügt, das die dementsprechenden auszuführenden Pins oder Muster anzeigt. Zum Erheben der Daten wurde ein LG Google Nexus 5 benutzt, das mit seinem 5 Zoll Display die aktuelle Entwicklung widerspiegelt.</p>

<p>Für jede Applikation gibt es drei Konditionen: linkshändige, rechtsändige und zweihändige Bedienung. Für den zweihändigen Fall wurden die Testpersonen gebeten ihre dominante Hand zum Tippen und die nichtdominante Hand zum Halten zu benutzen. Für die Pin und Muster gab es jeweils zwei verschiedene Eingabeabfolgen. Jede Teilnehmer musste jede Kondition 50 mal mit jeder App durchführen (2x Pin, 2xMuster, 1xSwipe). Dies ergeben 759 Trials pro Nutzer: 3 Konditionen x 50 Entsprungen x 5 Anwendungen. Den Nutzern wurde es freigestellt nach jedem Trial eine Pause einzulegen. Zusätzlich wurde vor jeder Entsperrapp die Eingabe fünf mal ausprobiert. Während der Studie sollten die Nutzer stehen, um zu simulieren, dass sie stoppen um beispielsweise nach dem Weg zu schauen. Mit Erklärungsphase dauerte die Studie pro Teilnehmer ungefähr 15 Minuten.</p>

<p>Die zwölf Teilnehmer bestanden zur Hälfte aus Frauen und Männern und waren im Durchschnitt 22.5 Jahre alt. Alle der Teilnehmer waren Rechtshänder und haben bereits ein Smartphone mit einem ähnlichen Entsperrprozess besessen. Die durchschnittliche Größe der Geräte der Nutzer lag bei 4.3” und alle nutzen auch eine Form der Entsperrapps (3 x Swipe, 4 x Muster und 4 x Pin), um ihr eigens Gerät zu schützen. Für die zweihändige Interaktion benutzen bis auf eine Person ihre linke Hand zum Halten des Gerätes und die rechte zum Interagieren. </p>


<h3>Discussion</h3>
<p>Über alle Anwendungen hinweg, konnte eine Geanuigkeit von 98,51% festgestellt werden. Von den nicht korrekt klassifizierten Trials waren nur 6 (0.88%) falsch klassifiziert. Obwohl dies zu einer schlechteren User Experience führen kann, kann man damit argumentieren, dass der Vorteil den diese Kontexterweiterung bringt größer ist als die mögliche schlechte Erfahrung für den Nutzer.<br/>
Neben dem vorher beschriebenen kNN Klassifizierungsansatz, wurde zudem der Ansatz von Support Vector Machines getestet. Dies führte zu keinen besseren Ergebnissen. Der Vorteil von kNN liegt zudem in einer besseren Laufzeit und kann damit besser in mobile Geräte integriert werden.<br/>
Man muss anmerken, dass die Daten während dem Stehen aufgenommen wurden und ggf. während dem Gehen andere Ergebnisse zu erwarten wären. Ein initialer Test mit zwei Nutzer während des Gehens zeigte, dass Beschleunigungsdaten mit Bewegungen des Nutzers die Distanz zwischen den Trainingsdaten leicht erhöhte. Aus diesem Grund ist zu erwarten, dass kein großer Unterschied in der Genauigkeit zu erwarten wäre. 
</p>


<div class="figure-container">

<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/nexus_ref.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/nexus_ref.png' | url}}"  alt="Standard Nexus 5 Drawer" />
      </a>
      <figcaption>Standard Nexus 5 Drawer</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/magnification.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/magnification.png' | url}}" alt="Magnification of Icons" />
      </a>
      <figcaption>Magnification of Icons</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/moving2.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/moving2.png' | url}}" alt="Moving" />
      </a>
      <figcaption>Moving</figcaption>
    </figure>
</div>
<div class="figure-container">
<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/resolution_home.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/resolution_home.png' | url}}" alt="Image description" />
      </a>
      <figcaption>Change resolution</figcaption>
    </figure>

<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/news_left.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/news_left.png' | url}}" alt="Google Play Kiosk layout left" />
      </a>
      <figcaption>Google Play Kiosk layout left</figcaption>
    </figure>

<figure >
      <a href="{{ '/assets/publications/bachelor-thesis/news_right.png' | url}}">
          <img src="{{ '/assets/publications/bachelor-thesis/news_right.png' | url}}" alt="Google Play Kiosk layout right" />
      </a>
      <figcaption>Google Play Kiosk layout right</figcaption>
    </figure>
</div>

<h3>User Interfaces</h3>

<p>In einem weiteren Schritt wurden verschiedene User Interfaces zur einhänidgen Bedienung konzipiert.<br/> 
Die erste Anpassung spiegelt den kompletten Inhalt, sodass er zu der jeweiligen Hand passt. Zum Beispiel in der Google Play Kiosk App wird der News-Titel mit einem Vorschaubild rechts davon angezeigt. Linkshänder haben beim Scrollen einen erheblichen Nachteil beim Lesen der Titel, da der Daumen über der Schrift liegt. Die einfachste Lösung ist es das Layout zu spiegeln, sodass das Vorschaubild links positioniert ist und der Daumen darüber liegt.<br/>
Eine weitere Anpassung des User Interface wäre eine Vergrößerung der Objekte welche außerhalb des Zugangsbereiches des Daumens liegen. Die Vergrößerung würde eine kleinere physische Distanz bewirken und somit die Kontrolle verbessern. <br/>
Ein ähnlicher Ansatz ist es die Objekte außerhalb der Reichweite in den zugänglichen Bereich zu verschieben. Die Distanz wird wiederum verkleinert, dennoch werden auch Elemente aus dem Display geschoben, die dann gar nicht mehr zu erreichen sind.<br/>
Eine letzte Anpassung ist die Änderung der Auflösung, sodass der komplette Inhalt in den Zugangsbereich des Daumens verkleinert wird. Die Distanz wird verkleinert, aber die Objekte sind kleiner und somit schwerer zu treffen.
</p>
