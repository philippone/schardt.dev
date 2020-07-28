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

In the lecture 'User Interface Design' all students had to develop an medium-fidelity prototype using the newly introduced style of browsing called <a href='http://en.wikipedia.org/wiki/Faceted_search' target='_blank'>'faceted browsing'</a>. This browsing style is based on a few core ideas, but it can be realized in many different ways with a user interface. Also, there are various conceivable uses to which the interaction style can be put, and no-one yet knows what other uses might still be thought of or how useful any of these really is.

The basic idea is that there is a large set of objects that a user may be interested in. These may be, for example, news stories, products in an electronics store, flights that can be booked, or works of art that can be admired. Each object can be described in terms of its values on several dimensions, or facets. The user essentially starts with the entire set of objects and narrows it down by specifying one or more values for a facet. This filtering process is repeated until the set of objects is a smaller set that the user is interested in – for example, the set of works of art that were created by a particular artist in a particular genre within a particular period of time.

<figure >
      <a href="{{'/assets/projects/user-interface-study/result.png' | url}}">
          <img src="{{'/assets/projects/user-interface-study/result.png' | url}}" alt="Prototype" />
      </a>
      <figcaption>Prototype</figcaption>
</figure>

A limitation of traditional faceted browsing is that the user can zoom in on only one subset of the total item set at a time. If the user wants to consider a different set instead, he or she can do so only by specifying different values of facets, thereby losing sight of the subset just focused on. My group an me developed an event manager that is able to display multiple request at once. The user can select certain options and the system filters the events accordingly. To evaluate the faceted browsing technique, we conducted a user studie in which the users have to simulate three scenarios and finally complete an questionnaire. The insights and findings were attached to the prototype to increase the usability of the event manager.