<script context="module">
import { browser, dev } from '$app/env'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate = dev

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router = browser

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true
</script>

<svelte:head>

<title>About</title>
</svelte:head>

Sometimes, you need to write a page. And then re-write it again. Several times.
I began this site using 11ty and webpack. As I wrote and rewrote things to accomodate trying to make the browser experience as frictionless as possible, I decided to give refactoring the project into Svelte a shot.

A lot of the reading I had seen over the past few months saw people coming and going from the Svelte ecosystem, and I was a little hesitant, but it seems like the project has really matured as time has gone on, and after getting a little more familiar with it over the course of the week, it's really enjoyable.

The form binding capabilities have proven especially useful for this class.

If you'd like to get started with Svelte, I'd recommend giving the svelte-add a shot.

```bash
npm init @svelte-add/kit@latest
cd my-app
npm install
npm run dev
```

The svelte-add script will walk you through selecting several different css styles/frameworks, and give you options to scaffold your project with demo files. I would recommend making sure to select `mdsvex` during installation. [mdsvex](https://mdsvex.com) brings markdown to Svelte and makes putting everything together _very_ pleasant.

Ultimately, getting switched over has allowed me to create a better developer _and_ user experience!

<style lang="sass">
p, pre 
	width: 100%
	max-width: $column-width
	margin: $column-margin-top auto 0 auto

</style>
