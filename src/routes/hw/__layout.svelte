<script>
  import Header from "$lib/Header.svelte";
  import Parts from "$lib/Parts.md";
  import Footer from "$lib/Footer.svelte";
  import "../../app.sass";
</script>

<Header />

<Parts />

<slot />

<br />
<br />

<Footer />

<style lang="sass">
</style>
