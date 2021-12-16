<script>
  import Header from "$lib/Header.svelte";
  import Parts from "$lib/Parts.md";
  import Footer from "$lib/Footer.svelte";
  import "../../app.sass";

  import { onMount } from "svelte";

  onMount(async () => {
    const { default: jQuery } = await import("https://esm.sh/jquery");
    window.jQuery = jQuery;
    window.$ = jQuery;
  });
</script>

<Header />

<Parts />

<slot />

<br />
<br />

<Footer />

<style lang="sass">
</style>
