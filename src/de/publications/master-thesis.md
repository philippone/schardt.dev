---
layout: layouts/post.njk
title: Towards an Ambient Assistive System Using Wrist-Worn Human Activity Recognition
teaser: Masterarbeit an der Universität des Saarlandes
type: Masterarbeit
date: 2017-12-12
tags: ["publication", "study"]
technologies:
    - Machine Learning
    - Tensorflow
    - Keras
    - Android
    - HTML
    - CSS
    - Javascript
    - AngularJs
    - Django
advisor:
    - Frederik Wiehr
reviewer:
    - Prof. Dr. Antonio Krüger
    - Prof. Dr. Markus Löchtefeld
---


Die Überalterung der Bevölkerung ist einer der bedeutendsten Trends des einundzwanzigsten Jahrhunderts. Die Menschen haben den Wunsch, so lange wie möglich unabhängig zu leben. Mit der Entwicklung neuer Technologien ergeben sich Möglichkeiten, die Menschen bei ihren alltäglichen Aufgaben und Aktivitäten zu unterstützen. Der Forschungsbereich "Ambient Assistive Living" (AAL) erforscht den Einsatz dieser Technologien zur Steigerung des Wohlbefindens und des unabhängigen Lebens der Menschen. Zur Unterstützung der Benutzer ist es wichtig zu wissen was sie tun und in geeigneter Weise zu reagieren. Insbesondere im Zusammenhang mit Smart Home Environments (SHE) wäre es interessant, langfristige Unterstützung zu leisten, wie z.B. die Überwachung des Gesundheitszustands und Empfehlungen zu geben, um die gesunden Verhaltensweisen der Menschen trotz beginnender Alterserscheinungen beizubehalten. Die Generierung des Kontextbewusstseins über den Benutzer, insbesondere die Modellierung des Verhaltens zur Schaffung eines Ambient Assistant Systems (AAS) ist jedoch immer noch eine Herausforderung.

Basierend auf einem Deep Neuronal Network (DNN) habe ich untersucht, wie ein Human Activity Recognition (HAR)-System zur Klassifizierung von Aktivitäten des täglichen Lebens im Haushaltskontext funktioniert. Um solche Systeme zugänglicher und erschwinglicher zu machen, verwendeten wir nur ein am Handgelenk getragenen Bewegungssensor aus dem in der öffentlich verfügbaren OPPORTUNITY-Datensatz. Zur weiteren Untersuchung wurde ein Aufzeichnungs- und Annotationstool implementiert, um die mühsame Aufgabe der Erfassung und Beschriftung von Sensordaten zu erleichtern. Das Werkzeug erlaubt es, eigene Aufzeichnungen mit fortgeschrittenen Sensoren zu erstellen, Labels leicht hinzuzufügen und im Klassifikator zu verwenden. Darüber hinaus wurde die Akzeptanz eines AAS mit am Handgelenk getragenem HAR in einer Wizard-of-Oz-Benutzerstudie evaluiert.

Das implementierte HAR System wurde sowohl mit kurzen Aktivitäten als auch mit lang andauernden Aktivitäten des täglichen Lebens evaluiert. Bei Tests mit einfachen kurzen Aktivitäten erkannte der Klassifikator nur 41,79%, während bei der Untersuchung der interessanteren lang andauernden Aktivitäten die Genauigkeitsrate auf 68,25% stieg. Die Benutzerstudie ergab, dass das geplante System Verbesserungen der Kontrollierbarkeit und der Privatsphäre benötigt, um von den Teilnehmern besser akzeptiert zu werden. Die Verbesserungen wurden in der Arbeit als Design-Richtlinien vorgestellt, die beim Entwurf einer AAS berücksichtigt werden sollten.

Die Erkennung von Aktivitäten des täglichen Lebens nur mit einem am Handgelenk getragenen Bewegungssensor zeigt das Potenzial von DNN. Die Erkennungsrate ist jedoch noch nicht hoch genug, um das Verhalten des Benutzers zuverlässig zu modellieren und Routinen abzuleiten. Es ist ein erster Schritt hin zu einem Ambient Assistive System, das die Benutzer bei ihren Aufgaben unterstützen kann. Das Aufzeichnungswerkzeug erlaubt es uns, weitere Untersuchungen in diesem Bereich zu beginnen, und die Studie gab einen ersten Eindruck über die Mensch-Computer-Interaktion mit einem AAS.

In dem folgenden Video ist beispielhaft gezeigt, wie das Labeling Tool funktioniert:

<iframe width="700" height="395" src="https://www.youtube-nocookie.com/embed/0dunvQrrctc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>