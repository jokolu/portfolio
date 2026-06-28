<script lang="ts">
	import { ArrowDown, ArrowRight } from 'lucide-svelte';
	import { t } from '$lib/i18n/index.svelte';

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<section
	id="hero"
	class="noise-bg relative overflow-hidden"
	style="min-height: 100dvh; display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 7rem;"
>
	<!-- ── Geometric visuals (upper-right) ─────────────────────────── -->
	<div class="hero-arc"   aria-hidden="true"></div>
	<div class="hero-arc-2" aria-hidden="true"></div>
	<div class="hero-dots"  aria-hidden="true"></div>

	<!-- Bottom fade-to-bg -->
	<div class="hero-fade" aria-hidden="true"></div>

	<!-- ── Content ─────────────────────────────────────────────────── -->
	<div class="container relative" style="z-index: 3; padding-top: calc(var(--navbar-h) + 2rem)">
		<div style="max-width: 860px">

			<!-- Label -->
			<p class="hero-anim label inline-flex items-center gap-2 mb-7" style="animation-delay: 0ms">
				<span class="inline-block w-1.5 h-1.5 rounded-full" style="background: var(--accent)"></span>
				{t('hero').label}
			</p>

			<!-- Headline -->
			<div class="hero-anim mb-8" style="animation-delay: 80ms">
				<h1 class="text-hero" style="color: var(--text); display: block; margin-bottom: 0.1em">
					{t('hero').line1}
				</h1>
				<h1 class="text-hero-serif" style="display: block">
					{t('hero').line2}
				</h1>
			</div>

			<!-- Subheadline -->
			<p
				class="hero-anim mb-10 leading-relaxed"
				style="animation-delay: 160ms; max-width: 520px; color: var(--text-muted); font-size: clamp(0.95rem, 1.4vw, 1.1rem)"
			>
				{t('hero').sub}
			</p>

			<!-- CTAs -->
			<div class="hero-anim flex flex-wrap gap-3" style="animation-delay: 240ms">
				<button onclick={() => scrollTo('projects')} class="btn btn-primary">
					{t('hero').cta_primary} <ArrowDown size={14} />
				</button>
				<button onclick={() => scrollTo('contact')} class="btn btn-ghost">
					{t('hero').cta_secondary} <ArrowRight size={14} />
				</button>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<button
		onclick={() => scrollTo('stats')}
		aria-label="Scrollen"
		class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer border-none bg-transparent"
		style="z-index: 3"
	>
		<div class="scroll-indicator-line"></div>
	</button>
</section>
