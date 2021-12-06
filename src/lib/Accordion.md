<script>

</script>

<details>
<summary><span>Click to show/hide assignment.</span></summary>
<br>

    <slot></slot>

</details>

<br>

<style lang="sass">
summary 
	cursor: pointer
	/* width: 100% */
	border: none
	outline: none
	transition: 0.5s
	
span	
	border-bottom: 1px solid transparent
	&:hover 
		border-bottom: 1px solid orchid
	
</style>
