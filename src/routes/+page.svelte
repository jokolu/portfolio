<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Stats from '$lib/components/sections/Stats.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import { reveal } from '$lib/actions/index';
</script>

<svelte:head>
	<title>Jonah Willner — Webentwickler</title>
	<meta name="description" content="Jonah Willner — Ich entwickle moderne, blitzschnelle Websites für lokale Unternehmen im DACH-Raum." />
	<meta property="og:title" content="Jonah Willner — Webentwickler" />
	<meta property="og:description" content="Moderne, performante Websites für lokale Unternehmen. Messbar besser als die Konkurrenz." />
</svelte:head>

<Hero />
<Stats />
<Projects />
<About />
<Testimonials />
<Contact />
