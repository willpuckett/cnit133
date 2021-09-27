---
layout: layouts/home.njk
title: Homework
---
## Fall 2021

*with Maura Devlin-Clancy.*  
A collection of problem solutions by Will Puckett.

{# <ul>
{% for i in collections.homework -%}
    <li class="button"><a href="hw{{ i }}.html">Homework {{ i }}</a></li>
{% else %}
    <li class="button">The Dog Ate My..</li>
{%- endfor %}
</ul> #}

  <div class="row">
  {% for homework in collections.homework -%}
      <div class="four columns button"><a href="hw{{ homework.fileSlug }}.html">Homework {{ homework.fileSlug }} </a></div>
  {%- endfor %}
  </div>
<br>
<br>
