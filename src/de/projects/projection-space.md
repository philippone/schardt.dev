---
layout: layouts/post.njk
title: Projection Space
teaser: Verzerrungsfreie mobile Projektion
date: 2012-07-23
tags: ['project', 'study']
technologies:
    - Android
    - Java
    - Microsoft Kinect
    - Samsung Galaxy Beam
team:
    - Nadja Rutsch
    - Thomas Rupp
    - Philipp Hermann
---

Das Ziel dieses Projekt war es ein simples Multiplayer System zu entwickeln, welches mobile Projektionen mehrerer Samsung Galaxy Beam Smartphones verzerrungsfrei aus jedem Winkel im Raum auf eine Wand wirft. Die Hand, in der sich das Smartphone befindet, wird automatisch von einer Kinect Kamera getracked. Damit ist die 3D position im Raum bekannt. Mit den zusätzlichen Lagesensoren des Smartphones, kann der Richtungsvektor zur Wand bestimmt werden. Mithilfe dieser Informationen kann die Verzerrung aus der Projektion herausgerechnet werden.

Um die Möglichkeiten besser zeigen zu können, entwickelten wir ein simples Zeichenspiel basierend auf dem Peephole-Prinzip. In diesem können bis zu zwei Benuzter (Smartphones) gleichzeitg auf die Wand zeichnen.

<iframe width="700" height="395" src="//www.youtube.com/embed/zqoZHQCqoMk" frameborder="0" allowfullscreen></iframe>