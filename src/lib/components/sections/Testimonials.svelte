<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { testimonials } from '$lib/data/content';
	import { t } from '$lib/i18n/index.svelte';
	import { locale } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';
</script>

<section id="reviews" class="section">
	<div class="container">
		<!-- Heading -->
		<div use:reveal class="mb-16 text-center">
			<span class="label block mb-3">03 — {t('reviews').heading}</span>
			<h2 class="text-section-heading" style="color: var(--text)">{t('reviews').heading}</h2>
			<p class="mt-3" style="color: var(--text-muted)">{t('reviews').sub}</p>
		</div>

		<!-- Cards -->
		<div class="grid md:grid-cols-3 gap-5">
			{#each testimonials as item, i}
				<div
					use:reveal={{ delay: i * 100 }}
					class="card relative p-7 flex flex-col gap-5"
					style="overflow: visible"
				>
					<!-- Big faded quote mark -->
					<div
						class="absolute pointer-events-none select-none"
						style="
							top: -0.5rem; left: 1.25rem;
							font-family: var(--font-display);
							font-size: 7rem;
							line-height: 1;
							color: var(--accent);
							opacity: 0.1;
							z-index: 0
						"
						aria-hidden="true"
					>"</div>

					<!-- Stars -->
					<div class="flex gap-0.5 relative z-10">
						{#each Array(item.rating) as _}
							<Star size={13} fill="var(--accent)" stroke="none" />
						{/each}
					</div>

					<!-- Quote -->
					<blockquote
						class="flex-1 relative z-10 leading-relaxed"
						style="color: var(--text); font-size: 0.95rem"
					>
						"{locale.current === 'de' ? item.quote.de : item.quote.en}"
					</blockquote>

					<!-- Author -->
					<footer
						class="relative z-10 pt-4 border-t"
						style="border-color: var(--border)"
					>
						<p class="font-medium text-sm" style="color: var(--text)">{item.author}</p>
						<p class="text-xs mt-0.5" style="color: var(--text-muted)">{item.role}</p>
					</footer>
				</div>
			{/each}
		</div>
	</div>
</section>
