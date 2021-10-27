---
layout: layouts/home.njk
title: Homework
---
## Fall 2021

*with [Maura Devlin-Clancy](https://sites.google.com/mail.ccsf.edu/maura-cnit/).*  
A collection of problem solutions by Will Puckett.

<span class="splash button-row">
{% for homework in collections.homework -%}
    <a class="button" href="hw{{ homework.fileSlug }}.html">Homework {{ homework.fileSlug }}</a>
{% else %}
    <a class="button">The Dog Ate My..</a>
{%- endfor %}
</span>

<br>
<br>


