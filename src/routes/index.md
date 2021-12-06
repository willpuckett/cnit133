<script context="module">
	export const prerender = true;
</script>

<script>
	let homeworks = [2,3,4,5,6,7,8];
</script>

<svelte:head>

<title>Mootrpootr</title>
</svelte:head>

<header>

## Fall 2021

</header>

_with [Maura Devlin-Clancy](https://sites.google.com/mail.ccsf.edu/maura-cnit/)._  
A collection of problem solutions by Will Puckett.

<nav>
	{#each homeworks as homework}
		<a sveltekit:prefetch href="/hw/{ homework }">Homework { homework }</a>
	{:else}
		<a  href="/#">The Dog Ate My..</a>
	{/each}
</nav>

<style lang="sass">
header 
	position: relative
	box-sizing: border-box
	margin: 0 auto
	max-width: 960px
	padding: 0 20px
	width: 100%
	@media (min-width: 400px) 
		width: 85%
		padding: 0
	@media (min-width: 850px) 
		width: 80%

nav 
	align-content: stretch
	border: none
	display: flex
	flex-wrap: wrap
	gap: 20px
	justify-content: space-between
	text-align: center
	width: 100%
	& > a 
		background-color: transparent
		border-radius: 4px
		border: 1px solid #bbb
		box-sizing: border-box
		cursor: pointer
		display: block
		flex-basis: 250px
		flex-grow: 1
		font-size: 11px
		font-weight: 600
		height: 38px
		letter-spacing: .1rem
		line-height: 38px
		line-height: auto
		padding: 0 30px
		text-align: center
		text-decoration: none
		text-transform: uppercase
		white-space: nowrap
	& a:hover 
		border-color: $secondary
	@media (max-width: 500px) 
		flex-direction: column
		& > a 
			flex-basis: 14px
			gap: 0px
</style>
