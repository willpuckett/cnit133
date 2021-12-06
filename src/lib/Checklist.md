<script>
  import { marked } from 'marked';
  const splitLines = str => str.split('&');
  const rmptags = str => str.match(/<p>(.*)<\/p>/);
  export let list = `you need to use
the **list** prop
to get your list into this component`;

</script>

<ul>
{#each splitLines(list) as item }
<li>{@html rmptags(marked(item))[1]}</li>
{/each}
</ul>


<style lang="sass">
ul 
  list-style: none inside 
  li::before 
    content: "✓" 
    padding-right: 8px
    color: #33C3F0 

</style>