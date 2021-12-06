<script>
  import { page } from "$app/stores";
</script>

<footer>
  <a href="https://github.com/willpuckett/cnit133">🔧</a> |
  <a href="https://validator.w3.org/check?uri=referer">HTML</a>
  |
  <a
    href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmootrpootr.com%2F{$page.path}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"
    >CSS</a
  >
</footer>

<style lang="sass">
  footer 
    position: fixed
    font-size: small
    left: 0
    bottom: 0
    width: 100%
    background-color: $background
    color: $border
    line-height: 0
    text-align: center
    padding: none
    height: 0
    font-family: $fonts
    font-weight: 300
  
  footer a 
    font-weight: bold
  
  @media (min-width: 480px) 
    footer 
      padding: 15px 0
    
  
</style>
