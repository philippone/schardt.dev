---
layout: layouts/post.njk
tags: ["post", "project", "private"]
date: 2020-08-11
updated: Last Modified
title: Web-based Job Application Template 
teaser: Template for job applications based on web technologies
technologies:
  - Web
  - CSS Custom Properties
  - 11ty
repo: https://github.com/philippone/job-application-template
---

In a small experiment, I wanted to find the capabilities and limitations of CSS to generate paper formatted output, like DIN A 4 or PDF. Therefore, I tried to reconstruct an InDesign template of an old jop application as an onepager website. 

Since I really like to use 11ty as a static site generator that plays very well together with JSON files, my choice was not difficult. The sturcture and the design are typically diviced into partials. The composition results in the sections cover page, letter, resume and work samples.

Due to the seperation of data into JSON files, each section can be edited accordingly.

The template is open source and <a target="_blank" href="https://github.com/philippone/job-application-template">available at Github</a>. You can find an example PDF <a target="_blank" href="https://github.com/philippone/job-application-template/blob/main/example.pdf">here</a>.


