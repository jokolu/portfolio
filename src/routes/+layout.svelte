<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import { locale } from '$lib/i18n/index.svelte';
	import { cursorGlow } from '$lib/actions/index';

	let { children } = $props();

	let progressEl: HTMLDivElement;

	$effect(() => {
		// Init persisted preferences
		theme.init();
		locale.init();

		// Scroll progress bar
		function onScroll() {
			const scrolled = window.scrollY;
			const total = document.documentElement.scrollHeight - window.innerHeight;
			const pct = total > 0 ? scrolled / total : 0;
			if (progressEl) progressEl.style.transform = `scaleX(${pct})`;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<!-- Scroll progress indicator -->
<div bind:this={progressEl} id="scroll-progress"></div>

<!-- Cursor glow (dark mode) -->
<div use:cursorGlow style="position: fixed; inset: 0; pointer-events: none; z-index: -1"></div>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />
