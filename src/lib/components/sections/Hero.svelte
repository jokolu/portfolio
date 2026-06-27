<script lang="ts">
	import { ArrowDown, ArrowRight } from 'lucide-svelte';
	import { t } from '$lib/i18n/index.svelte';

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section id="hero" class="noise-bg relative flex flex-col justify-center" style="min-height: 100dvh; padding-top: 64px">
	<!-- Radial accent glow top-left -->
	<div
		class="absolute pointer-events-none"
		style="top: 10%; left: -10%; width: 600px; height: 600px;
		       background: radial-gradient(circle, var(--accent-bg) 0%, transparent 70%);
		       filter: blur(60px); z-index: 0"
	></div>

	<div class="container relative" style="z-index: 1">
		<div style="max-width: 900px">
			<!-- Label -->
			<div class="will-reveal" style="--reveal-delay: 0ms">
				<span class="label inline-flex items-center gap-2 mb-8">
					<span
						class="inline-block w-2 h-2 rounded-full"
						style="background: var(--accent)"
					></span>
					{t('hero').label}
				</span>
			</div>

			<!-- Headline -->
			<div class="will-reveal" style="--reveal-delay: 100ms">
				<h1 class="text-hero mb-0 leading-none" style="color: var(--text)">
					{t('hero').line1}
				</h1>
				<h1 class="text-hero-serif mb-8" style="display: block">
					{t('hero').line2}
				</h1>
			</div>

			<!-- Subheadline -->
			<div class="will-reveal" style="--reveal-delay: 200ms">
				<p
					class="mb-10 leading-relaxed"
					style="max-width: 560px; color: var(--text-muted); font-size: clamp(1rem, 1.5vw, 1.15rem)"
				>
					{t('hero').sub}
				</p>
			</div>

			<!-- CTAs -->
			<div class="will-reveal flex flex-wrap gap-3" style="--reveal-delay: 300ms">
				<button
					onclick={() => scrollTo('projects')}
					class="btn btn-primary"
				>
					{t('hero').cta_primary}
					<ArrowDown size={14} />
				</button>
				<button
					onclick={() => scrollTo('contact')}
					class="btn btn-ghost"
				>
					{t('hero').cta_secondary}
					<ArrowRight size={14} />
				</button>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<button
		onclick={() => scrollTo('stats')}
		class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer border-none bg-transparent"
		aria-label={t('hero').scroll}
		style="color: var(--text-subtle)"
	>
		<div
			style="
				width: 1px;
				height: 48px;
				background: linear-gradient(to bottom, transparent, var(--text-muted));
				animation: scrollLine 1.8s ease-in-out infinite;
			"
		></div>
	</button>
</section>

<style>
	@keyframes scrollLine {
		0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
		50%  { opacity: 1; }
		100% { opacity: 0; transform: scaleY(1); transform-origin: top; }
	}
</style>
