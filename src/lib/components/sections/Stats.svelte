<script lang="ts">
	import AnimatedCounter from '$lib/components/ui/AnimatedCounter.svelte';
	import { t } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';
</script>

<section id="stats" style="border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface)">
	<div class="container">
		<div
			class="grid grid-cols-2 md:grid-cols-4"
			style="divide: var(--border)"
		>
			{#each t('stats') as stat, i}
				<div
					use:reveal={{ delay: i * 80 }}
					class="flex flex-col items-center justify-center py-10 gap-1 relative"
				>
					<!-- Vertical divider (not on last) -->
					{#if i < 3}
						<div
							class="absolute right-0 top-1/4 bottom-1/4 w-px hidden md:block"
							style="background: var(--border)"
						></div>
					{/if}
					<!-- Horizontal divider mobile (bottom of first row) -->
					{#if i < 2}
						<div
							class="absolute bottom-0 left-1/4 right-1/4 h-px md:hidden"
							style="background: var(--border)"
						></div>
					{/if}

					<span
						class="font-mono font-semibold"
						style="font-family: var(--font-mono); font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--accent); letter-spacing: -0.03em; line-height: 1"
					>
						<AnimatedCounter to={stat.value} suffix={stat.suffix} />
					</span>
					<span class="label mt-1">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
