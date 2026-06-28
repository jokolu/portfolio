<script lang="ts">
	import { Sun, Moon, Monitor, Menu, X, ChevronDown } from 'lucide-svelte';
	import { theme, type Theme } from '$lib/stores/theme.svelte';
	import { locale, t } from '$lib/i18n/index.svelte';

	let scrolled   = $state(false);
	let mobileOpen = $state(false);
	let themeOpen  = $state(false);
	let themeMenu: HTMLDivElement | undefined;
	let themeBtn:  HTMLButtonElement | undefined;

	const options: { value: Theme; de: string; en: string }[] = [
		{ value: 'light', de: 'Hell',   en: 'Light'  },
		{ value: 'dark',  de: 'Dunkel', en: 'Dark'   },
		{ value: 'auto',  de: 'System', en: 'System' },
	];

	$effect(() => {
		const onScroll = () => { scrolled = window.scrollY > 40; };
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		const onOut = (e: MouseEvent) => {
			if (themeOpen && themeMenu && themeBtn &&
				!themeMenu.contains(e.target as Node) &&
				!themeBtn.contains(e.target as Node)) themeOpen = false;
		};
		document.addEventListener('mousedown', onOut);
		return () => document.removeEventListener('mousedown', onOut);
	});

	function goTo(id: string) {
		mobileOpen = false;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	const links = [
		{ id: 'projects', key: 'projects' as const },
		{ id: 'about',    key: 'about'    as const },
		{ id: 'reviews',  key: 'reviews'  as const },
		{ id: 'contact',  key: 'contact'  as const },
	];
</script>

<nav class="navbar" class:scrolled aria-label="Hauptnavigation">
	<div class="container flex items-center justify-between h-full gap-4">

		<!-- Logo -->
		<button
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			class="flex flex-col items-start leading-none cursor-pointer border-none bg-transparent p-0 shrink-0"
			aria-label="Zurück nach oben"
		>
			<span class="font-semibold text-sm tracking-tight" style="color: var(--text)">Jonah Willner</span>
			<span class="label" style="font-size: 0.6rem; margin-top: 1px; letter-spacing: 0.1em">Webentwickler</span>
		</button>

		<!-- Desktop nav links -->
		<div class="hidden md:flex items-center gap-0.5 flex-1 justify-center">
			{#each links as link}
				<button
					onclick={() => goTo(link.id)}
					class="px-3 py-1.5 rounded-md text-sm cursor-pointer border-none bg-transparent transition-colors"
					style="color: var(--text-muted); font-family: var(--font-sans)"
					onmouseenter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
					onmouseleave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
				>
					{t('nav')[link.key]}
				</button>
			{/each}
		</div>

		<!-- Right controls -->
		<div class="flex items-center gap-2 shrink-0">

			<!-- Language toggle -->
			<button
				onclick={() => locale.toggle()}
				aria-label="Sprache wechseln"
				class="flex items-center gap-1 px-2.5 py-1 rounded-md border cursor-pointer transition-colors"
				style="border-color: var(--border); background: transparent"
			>
				<span class="font-mono text-xs transition-colors" style="color: {locale.current === 'de' ? 'var(--text)' : 'var(--text-muted)'}; letter-spacing: 0.08em">DE</span>
				<span style="color: var(--border); font-size: 0.65rem">|</span>
				<span class="font-mono text-xs transition-colors" style="color: {locale.current === 'en' ? 'var(--text)' : 'var(--text-muted)'}; letter-spacing: 0.08em">EN</span>
			</button>

			<!-- Theme dropdown -->
			<div class="relative">
				<button
					bind:this={themeBtn}
					onclick={() => themeOpen = !themeOpen}
					aria-label="Theme wechseln"
					aria-expanded={themeOpen}
					class="flex items-center gap-1 px-2.5 py-1.5 rounded-md border cursor-pointer"
					style="border-color: var(--border); color: var(--text-muted); background: transparent"
				>
					<!-- FIX: explicit conditional instead of svelte:component -->
					{#if theme.resolved === 'dark'}
						<Moon size={14} />
					{:else}
						<Sun size={14} />
					{/if}
					<ChevronDown
						size={11}
						style="opacity:0.5; transition: transform 0.2s; transform: rotate({themeOpen ? 180 : 0}deg)"
					/>
				</button>

				{#if themeOpen}
					<div
						bind:this={themeMenu}
						class="absolute right-0 mt-2 rounded-lg border overflow-hidden py-1"
						style="background: var(--surface); border-color: var(--border); min-width: 128px; box-shadow: 0 8px 32px rgba(0,0,0,0.25); z-index: 200"
					>
						{#each options as opt}
							{@const active = theme.current === opt.value}
							<button
								onclick={() => { theme.set(opt.value); themeOpen = false; }}
								class="flex items-center gap-2.5 w-full px-3 py-2 text-left text-sm cursor-pointer border-none transition-colors"
								style="background: {active ? 'var(--accent-bg)' : 'transparent'}; color: {active ? 'var(--accent)' : 'var(--text-muted)'}; font-family: var(--font-sans)"
								onmouseenter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'; }}
								onmouseleave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
							>
								<!-- FIX: explicit conditionals for each icon -->
								{#if opt.value === 'light'}
									<Sun size={13} />
								{:else if opt.value === 'dark'}
									<Moon size={13} />
								{:else}
									<Monitor size={13} />
								{/if}
								{locale.current === 'de' ? opt.de : opt.en}
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Mobile hamburger -->
			<button
				class="md:hidden flex items-center justify-center w-9 h-9 rounded-md border cursor-pointer"
				style="border-color: var(--border); color: var(--text-muted); background: transparent"
				onclick={() => mobileOpen = !mobileOpen}
				aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}<X size={16} />{:else}<Menu size={16} />{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Mobile overlay — FIX: z-index 110 > navbar 100 -->
{#if mobileOpen}
	<div
		class="fixed inset-0 flex flex-col"
		style="z-index: 110; background: var(--bg); padding-top: calc(var(--navbar-h) + 1.5rem)"
	>
		<div class="container flex flex-col flex-1">
			<nav class="flex flex-col gap-1">
				{#each links as link}
					<button
						onclick={() => goTo(link.id)}
						class="text-left py-5 border-b text-2xl font-semibold tracking-tight cursor-pointer bg-transparent border-x-0 border-t-0"
						style="border-color: var(--border); color: var(--text); font-family: var(--font-sans)"
					>
						{t('nav')[link.key]}
					</button>
				{/each}
			</nav>
			<button
				onclick={() => goTo('contact')}
				class="btn btn-primary w-full justify-center mt-auto mb-8"
			>
				{t('hero').cta_secondary} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			</button>
		</div>
	</div>
{/if}
