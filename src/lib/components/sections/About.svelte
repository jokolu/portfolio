<script lang="ts">
	import { skills } from '$lib/data/content';
	import { t } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';

	// Duplicate skills for seamless marquee loop
	const marqueeItems = [...skills, ...skills];
</script>

<section id="about" class="section" style="background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border)">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<!-- Text -->
			<div>
				<div use:reveal>
					<span class="label block mb-3">02 — {t('about').heading}</span>
					<h2 class="text-section-heading mb-8" style="color: var(--text)">{t('about').heading}</h2>
				</div>

				<div use:reveal={{ delay: 100 }}>
					<p class="mb-4 leading-relaxed" style="color: var(--text-muted); font-size: 1.05rem">
						{t('about').p1}
					</p>
					<p class="leading-relaxed" style="color: var(--text-muted); font-size: 1.05rem">
						{t('about').p2}
					</p>
				</div>

				<!-- Availability dot -->
				<div use:reveal={{ delay: 200 }} class="flex items-center gap-2 mt-8">
					<span class="inline-block w-2 h-2 rounded-full animate-pulse" style="background: #4ade80"></span>
					<span class="label" style="color: #4ade80">Verfügbar für neue Projekte</span>
				</div>
			</div>

			<!-- Visual: big JW monogram + stats -->
			<div use:reveal={{ delay: 150 }} class="relative flex items-center justify-center" style="min-height: 320px">
				<!-- Faded monogram -->
				<div
					class="absolute select-none pointer-events-none"
					style="
						font-family: var(--font-display);
						font-style: italic;
						font-size: clamp(8rem, 15vw, 14rem);
						font-weight: 700;
						color: var(--accent);
						opacity: 0.06;
						line-height: 1;
						letter-spacing: -0.05em;
						user-select: none
					"
					aria-hidden="true"
				>JW</div>

				<!-- Skills grid over monogram -->
				<div class="relative grid grid-cols-2 gap-3 w-full" style="z-index: 1; max-width: 320px">
					{#each skills.slice(0, 8) as skill, i}
						<div
							class="px-3 py-2.5 rounded-lg border flex items-center gap-2 text-sm"
							style="
								background: var(--surface-2);
								border-color: var(--border);
								color: var(--text-muted);
								font-family: var(--font-mono);
								font-size: 0.75rem;
								transition: border-color 0.2s, color 0.2s
							"
							onmouseenter={(e) => {
								(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
								(e.currentTarget as HTMLElement).style.color = 'var(--text)';
							}}
							onmouseleave={(e) => {
								(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
								(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
							}}
						>
							<span style="color: var(--accent); opacity: 0.6; font-size: 0.6rem">{String(i + 1).padStart(2, '0')}</span>
							{skill}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Skills marquee -->
	<div class="mt-20 overflow-hidden" style="border-top: 1px solid var(--border); padding-top: 2rem">
		<div class="marquee-track">
			{#each marqueeItems as skill}
				<span
					class="mx-6 text-sm whitespace-nowrap"
					style="font-family: var(--font-mono); color: var(--text-subtle); letter-spacing: 0.05em"
				>
					{skill}
					<span style="color: var(--accent); margin-left: 1.5rem; opacity: 0.5">·</span>
				</span>
			{/each}
		</div>
	</div>
</section>
