---
layout: layouts/post.njk
title: Towards an Ambient Assistive System Using Wrist-Worn Human Activity Recognition
teaser: Master Thesis at Saarland University
type: Master Thesis 
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

The change in age distribution is one of the most significant trends of the twenty
first century. People have the desire to live independently as long as possible. With
the development of new technology, there arise possibilities to support people in
their everyday tasks and activities. The research area of Ambient Assistive Living
(AAL) explores the use of these technologies to increase people’s well-being and
independent living. To support the users, it is important to know what they are
doing and to adapt in an appropriate way. Especially, in the context of Smart
Home Environments (SHE), it would be interesting to provide long-time support,
like monitoring the health status and make recommendations to maintain people’s
behaviour despite beginning signs of ageing. However, the process of generating
the context-awareness about the user, in particular the modelling of behaviour, to
create an Ambient Assistant System (AAS) is still challenging.

Based on a Deep Neuronal Network (DNN), I explored how a Human Activity Recognition (HAR) system performs to classify activities of daily living in the household context. To make such systems more accessible and affordable, we
used only a wrist-worn motion sensor of the publicity available OPPORTUNITY dataset. For further investigation, a recording and annotation tool was implemented to facilitate the tedious task of collecting and labelling sensor data. The
tool allows to create own recordings with advanced sensors, make annotations
easily addable, and usable in the classifier. In addition, the acceptance of the
considered AAS that using wrist-worn HAR was evaluated in a Wizard-of-Oz user
study.

The implemented HAR was evaluated with short-activities as well as long-lasting
activities of daily living. Tested with simple short activities, the classifier detected only 41.79%, while exploring the more interesting long-lasting activities, the accuracy rate increased to 68.25%. The user study revealed that the envisioned system needs improvements in controllability and privacy to be more accepted by the participants. The enhancements are presented as design guidelines that should be considered by designing an AAS.

The recognition of activities of daily living using only a wrist-worn motion sensor
shows the potential of DNN. However, the detection rate is still not high enough
to reliably model the behaviour of the user and to infer routines. It is a first step
towards an Ambient Assistive System that can support the users in their tasks.
The recording tool allows us to start further investigation in that field and the
study gave a first impression about the Human-Computer-Interaction.