<script>
  export let click,
    type = "button";
</script>

<button {type} on:click={click}><slot>{type}</slot></button>

<style lang="sass">
button 
  color: $primary
  border: 1px solid $border
  padding: auto
  background-color: $pure-white
  flex-grow: 1

button:hover 
  color: #1eaedb
  background-color: $tertiary
  border-radius: 5px
  border: 1px groove $secondary

button[type="submit"] 
  color: $pure-white
  background-color: $primary
  border-color: $primary

button[type="submit"]:hover 
  background-color: $accent
  border-color: $secondary

</style>
