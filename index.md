---
layout: layouts/home.njk
title: Homework
---
## Fall 2021

*with Maura Devlin-Clancy.*  
A collection of problem solutions by Will Puckett.

{# <ul>
{% for i in range(2,9) -%}
    <li class="button"><a href="hw{{ i }}.html">Homework {{ i }}</a></li>
{% else %}
    <li class="button">The Dog Ate My..</li>
{%- endfor %}
</ul> #}

  <div class="row">
  {% for i in range(2,9) -%}
      <div class="three columns button"><a href="hw{{ i }}.html">Homework {{ i }} </a></div>
  {%- endfor %}
  </div>
<br>
<br>
