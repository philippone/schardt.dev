---
layout: layouts/post.njk
title: Projection Space
teaser: Distortion-free mobile projection
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

The goal of this project was to build an simple multiplayer system which can project mobile projections of an Samsung Galaxy Beam smartphone without distortions on a wall from any angle in the room. The user's hand is automatically tracked by a kinect. Thereby we have the location in a 3D room. With the location sensors of the smartphone, we can compute the  vector which directs to the wall. This information can be used to compute the distortion of the projection.

We developed an small painting game to demonstrate the capabilities of such an system. Up to two users can simultaniously draw on the wall. Depending on the distance of the user to the wall, the projection displays only the illuminated area.

<iframe src="//www.youtube.com/embed/zqoZHQCqoMk" title="presentation-video" frameborder="0" allowfullscreen></iframe>


<p><time datetime="{{ post.date | date('YYYY-MM-DD') }}">{{ post.item|date("DD MMMM YYYY", locale) }}</time></p>