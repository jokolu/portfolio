<script lang="ts">
	import AnimatedCounter from '$lib/components/ui/AnimatedCounter.svelte';
	import { t } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';
</script>

<section id="stats" style="border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface)">
	<div class="container">
		<div class="grid grid-cols-2 md:grid-cols-4 relative">
			{#each t('stats') as stat, i}
				<div
					use:reveal={{ delay: i * 70 }}
					class="flex flex-col items-center justify-center py-10 gap-1 relative"
				>
					<!-- FIX: explicit divider divs, not invalid CSS 'divide' property -->
					{#if i < 3}
						<div class="absolute right-0 top-1/4 bottom-1/4 w-px hidden md:block" style="background: var(--border)"></div>
					{/if}
					{#if i === 0 || i === 1}
						<div class="absolute bottom-0 left-[10%] right-[10%] h-px block md:hidden" style="background: var(--border)"></div>
					{/if}

					<span style="font-family: var(--font-mono); font-size: clamp(1.9rem, 3.2vw, 2.6rem); color: var(--accent); letter-spacing: -0.03em; line-height: 1; font-weight: 600">
						<AnimatedCounter to={stat.value} suffix={stat.suffix} />
					</span>
					<span class="label mt-1 text-center">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
