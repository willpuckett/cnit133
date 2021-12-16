<script>
  import { onMount } from "svelte";
  // import confetti from 'canvas-confetti';
  // import snow from 'https://cdn.skypack.dev/snow';
  onMount(async () => {
    const { default: confetti } = await import(
      "https://esm.sh/canvas-confetti"
    );
    confetti();
    // snow();
  });
</script>


# You've done it!

#### congratulations

And happy holidays! ❄️ 🏂 🍧
