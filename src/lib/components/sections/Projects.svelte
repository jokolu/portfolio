<script lang="ts">
	import { ExternalLink, Lock } from 'lucide-svelte';
	import { projects } from '$lib/data/content';
	import { t } from '$lib/i18n/index.svelte';
	import { locale } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';
</script>

<section id="projects" class="section">
	<div class="container">
		<!-- Heading -->
		<div use:reveal class="mb-16">
			<span class="label block mb-3">01 — {t('projects').heading}</span>
			<h2 class="text-section-heading" style="color: var(--text)">{t('projects').heading}</h2>
			<p class="mt-4" style="color: var(--text-muted); max-width: 480px">{t('projects').sub}</p>
		</div>

		<!-- Grid -->
		<div class="grid md:grid-cols-2 gap-4">
			{#each projects as project, i}
				<article use:reveal={{ delay: (i % 2) * 100 }} class="card group flex flex-col">
					<!-- Thumbnail -->
					<div
						class="relative overflow-hidden"
						style="height: 200px; background: {project.gradient}"
					>
						<!-- Subtle grid pattern overlay -->
						<div
							class="absolute inset-0 opacity-10"
							style="background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 32px 32px"
						></div>
						<!-- Project title watermark -->
						<div
							class="absolute inset-0 flex items-center justify-center"
							style="font-family: var(--font-display); font-style: italic; font-size: clamp(2rem, 4vw, 3rem); color: white; opacity: 0.12; letter-spacing: -0.03em; text-align: center; padding: 1rem; pointer-events: none"
						>
							{project.title}
						</div>
						<!-- Live badge -->
						{#if project.live}
							<div
								class="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-mono"
								style="background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); color: var(--accent); border: 1px solid var(--accent); letter-spacing: 0.08em"
							>
								<span class="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style="background: var(--accent)"></span>
								LIVE
							</div>
						{/if}
					</div>

					<!-- Content -->
					<div class="p-6 flex flex-col flex-1 gap-4">
						<div class="flex-1">
							<h3
								class="font-semibold mb-2"
								style="font-size: 1.15rem; color: var(--text); letter-spacing: -0.02em"
							>
								{project.title}
							</h3>
							<p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6">
								{locale.current === 'de' ? project.description.de : project.description.en}
							</p>
						</div>

						<!-- Tags -->
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag}
								<span class="badge">{tag}</span>
							{/each}
						</div>

						<!-- CTA -->
						<div class="pt-2 border-t" style="border-color: var(--border)">
							{#if project.live}
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-ghost w-full justify-center text-sm"
								>
									{t('projects').visit}
									<ExternalLink size={13} />
								</a>
							{:else}
								<div
									class="flex items-center justify-center gap-2 py-2"
									style="color: var(--text-subtle); font-size: 0.8rem; font-family: var(--font-mono)"
								>
									<Lock size={12} />
									{t('projects').wip}
								</div>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
