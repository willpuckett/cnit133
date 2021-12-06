<script>
import { page } from '$app/stores'
let chapter, thispart;
$: {
	chapter = $page.path.split("/")[2];
	thispart = $page.path.split("/")[3];
	}

const parts = (thischapter) => {
	let parts = [];
	const allPosts = import.meta.globEager(`/src/routes/hw/2/*.md`);
	for (let path in allPosts) {
		if (path.match(/(\d).md$/)) {
			parts = [...parts, path.match(/(\d).md$/)[1]]
		}
	}
	return parts;	
}
</script>

## Homework { chapter }

<nav>
  {#each parts(chapter) as part, i }
	<a class:active={$page.path === `/hw/${chapter}/${i+1}`} sveltekit:prefetch href="/hw/{ chapter }/{ i + 1 }"><span class="full-text">Part </span>{ i + 1 }</a>
{/each}
</nav>

<style lang="sass">
nav 
	border: none
	color: #33c3f0
	display: flex
	gap: 10px
	justify-content: space-between
	overflow: hidden
	padding-bottom: 10px
	padding-top: 15px
	text-align: center
	width: 100%
	z-index: 9999

a
	background-color: #fff
	border-radius: 4px
	border: 1px solid $border
	box-sizing: border-box
	color: $primary
	cursor: pointer
	display: inline-block
	flex-grow: 1
	font-family: $fonts
	font-size: 11px
	font-weight: 600
	height: 38px
	letter-spacing: .1rem
	line-height: 38px
	margin-bottom: 1rem
	border-radius: 4px
	padding: 0 30px
	text-align: center
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
		display: inline-block
		height: 38px
		padding: 0 15px
		border-radius: 4px

@media (max-width: 450px) 
	.full-text 
		display: none
		
</style>
