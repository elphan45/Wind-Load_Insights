---
layout: default
title: "Filderstadt Chroniken"
lang: de
description: "Historische und kulturelle Einblicke in Filderstadt – modern präsentiert und für Google optimal indexiert."
seo: true
---

<header>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">
  <meta name="geo.region" content="DE-BW">
</header>

# Willkommen zu den Filderstadt Chroniken!

Erleben Sie einen professionellen Auftritt historischer und kultureller Themen rund um Filderstadt.

## Aktuelle Beiträge

{% for post in site.posts %}
* [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}
