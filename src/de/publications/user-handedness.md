---
layout: layouts/post.njk
tags: ['publication', 'study']
date: 2015-11-30
title: Detecting Users Handedness for Ergonomic Adaptation of Mobile User Interfaces
teaser: Preset algorithm that allows determining the users' interacting hand from their unlocking behavior
type: Paper
appear: Proceedings of the 14th International Conference on Mobile and Ubiquitous Multimedia (Mum-15). November 30 - December 2, Linz, Austria, ACM, 2015.
url: https://dl.acm.org/doi/10.1145/2836041.2836066
authors:
    - Markus Löchtefeld
    - Philipp Schardt
    - Antonio Krüger
    - Sebastian Boring
---

Häufig benutzen wir ein Smartphone mit nur einer Hand. Die Hand dient dabei zwei Zwecken: das Gerät zu halten und den Touchscreen mit dem Daumen zu bedienen. 
Der aktuelle Trend zu immer grösseren Bildschirmen macht es jedoch für Benutzer mit durchschnittlichen Handgrössen nahezu unmöglich, alle Teile des Bildschirms (insbesondere den oberen Bereich) zu erreichen.

Eine Lösung besteht darin, adaptive Benutzerschnittstellen für solche einhändigen Interaktionen anzubieten. Diese Modi müssen manuell ausgelöst werden und verursachen somit einen kritischen Overhead. Darüber hinaus sind sie so konzipiert, dass sie alle Inhalte einander näher bringen, unabhängig davon, ob das Telefon mit der linken oder rechten Hand bedient wird.

In diesem Paper stellen wir einen Algorithmus vor, der es erlaubt, die interagierende Hand des Benutzers aus seinem Entriegelungsverhalten zu bestimmen. Unser Algorithmus unterscheidet in 98,51% aller Fälle korrekt zwischen ein- und zweihändiger Nutzung sowie zwischen links- und rechtshändigem Entsperren. Dies wird durch einen k-nächsten Nachbarn-Vergleich der internen Sensorwerte des Smartphones während des Entriegelungsvorgangs erreicht.