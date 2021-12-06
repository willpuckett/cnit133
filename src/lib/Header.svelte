<script>
  import { page } from "$app/stores";
  let homeworks = [2, 3, 4, 5, 6, 7, 8];
</script>

<header>
  <div class="container">
    <nav>
      <a sveltekit:prefetch href="/">⚓️</a>
      {#each homeworks as hw}
        <a
          class:active={$page.path.match(/^\/hw\/\d/) == `/hw/${hw}`}
          sveltekit:prefetch
          href="/hw/{hw}"><span class="full-text">HW </span>{hw}</a
        >
      {/each}
    </nav>
  </div>
</header>

<style lang="sass">
  header 
    overflow: hidden
    padding-bottom: 10px
    position: fixed
    text-align: center
    padding-top: 15px
    background-color: whitesmoke
    left: 0
    top: 0
    width: 100%
    z-index: 9999
  
  nav 
    display: flex
    gap: 10px
    justify-content: space-between
  
  a 
    background-color: #fff
    border-radius: 4px
    border: 1px solid $border
    box-sizing: border-box
    cursor: pointer
    flex-grow: 1
    font-size: 11px
    font-weight: 600
    height: 38px
    letter-spacing: 0.1rem
    line-height: 38px
    margin-bottom: 1rem
    padding: 0 30px
    text-decoration: none
    text-transform: uppercase
    white-space: nowrap
    &:hover 
      color: $secondary
      border-color: $secondary
      outline: 0
    
    &.active 
      box-shadow: 1px 1px 1px 1px $accent
    
  
  @media (max-width: 850px) 
    nav 
      padding-bottom: 7px
      & a 
        display: inline-block
        height: 38px
        padding: 0 15px
        border-radius: 4px
      
    
  
  @media (max-width: 650px) 
    header 
      padding-bottom: 0px
    
    nav 
      gap: 4px
    
    a 
      font-size: 10px
      letter-spacing: 0rem
    
  
</style>
