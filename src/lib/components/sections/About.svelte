<script lang="ts">
	import { skills } from '$lib/data/content';
	import { t } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';

	const marqueeItems = [...skills, ...skills, ...skills];
</script>

<section id="about" class="section" style="background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border)">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

			<!-- Text -->
			<div>
				<div use:reveal class="section-head">
					<span class="label">02 — {t('about').heading}</span>
					<h2 class="text-section-heading mt-3" style="color: var(--text)">{t('about').heading}</h2>
				</div>

				<div use:reveal={{ delay: 100 }} class="flex flex-col gap-4">
					<p class="leading-relaxed" style="color: var(--text-muted); font-size: 1.025rem">{t('about').p1}</p>
					<p class="leading-relaxed" style="color: var(--text-muted); font-size: 1.025rem">{t('about').p2}</p>
				</div>

				<!-- FIX: i18n for availability text -->
				<div use:reveal={{ delay: 180 }} class="flex items-center gap-2 mt-8">
					<span class="w-2 h-2 rounded-full animate-pulse shrink-0" style="background: #4ade80"></span>
					<span class="label" style="color: #4ade80; letter-spacing: 0.08em">{t('about').availability}</span>
				</div>
			</div>

			<!-- Skills grid + JW monogram -->
			<div use:reveal={{ delay: 120 }} class="relative flex items-center justify-center" style="min-height: 280px">
				<div
					class="absolute select-none pointer-events-none"
					style="font-family: var(--font-display); font-style: italic; font-size: clamp(7rem, 14vw, 12rem); font-weight: 700; color: var(--accent); opacity: 0.055; line-height: 1; letter-spacing: -0.05em"
					aria-hidden="true"
				>JW</div>

				<div class="relative grid grid-cols-2 gap-2.5 w-full" style="z-index: 1; max-width: 300px">
					{#each skills.slice(0, 8) as skill, i}
						<div
							class="px-3 py-2.5 rounded-lg border flex items-center gap-2 transition-all cursor-default"
							style="background: var(--surface-2); border-color: var(--border); color: var(--text-muted); font-family: var(--font-mono); font-size: 0.72rem"
							onmouseenter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--accent)'; el.style.color = 'var(--text)'; }}
							onmouseleave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-muted)'; }}
						>
							<span style="color: var(--accent); opacity: 0.5; font-size: 0.58rem; flex-shrink: 0">{String(i + 1).padStart(2, '0')}</span>
							{skill}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- FIX: marquee outside container padding, but inside section — correct spacing -->
	<div class="overflow-hidden mt-16" style="border-top: 1px solid var(--border); padding-top: 2rem; padding-bottom: 0">
		<div class="marquee-track" aria-hidden="true">
			{#each marqueeItems as skill}
				<span class="mx-5 whitespace-nowrap" style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-subtle); letter-spacing: 0.06em; text-transform: uppercase">
					{skill}<span style="color: var(--accent); margin-left: 1.25rem; opacity: 0.4"> ·</span>
				</span>
			{/each}
		</div>
	</div>
</section>
