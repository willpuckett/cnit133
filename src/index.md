---
layout: layouts/home.njk
title: Homework
---
## Fall 2021

*with [Maura Devlin-Clancy](https://sites.google.com/mail.ccsf.edu/maura-cnit/).*  
A collection of problem solutions by Will Puckett.

<ul>
{% for homework in collections.homework -%}
    <li class="button"><a href="hw{{ homework.fileSlug }}.html">Homework {{ homework.fileSlug }}</a></li>
{% else %}
    <li class="button">The Dog Ate My..</li>
{%- endfor %}
</ul>


