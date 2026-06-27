<script lang="ts">
	import { Sun, Moon, Monitor, Menu, X, ChevronDown } from 'lucide-svelte';
	import { theme, type Theme } from '$lib/stores/theme.svelte';
	import { locale, t } from '$lib/i18n/index.svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let themeOpen = $state(false);
	let themeBtn: HTMLButtonElement;
	let themeMenu: HTMLDivElement;

	const themeOptions: { value: Theme; label: { de: string; en: string }; icon: typeof Sun }[] = [
		{ value: 'light', label: { de: 'Hell', en: 'Light' }, icon: Sun },
		{ value: 'dark',  label: { de: 'Dunkel', en: 'Dark' }, icon: Moon },
		{ value: 'auto',  label: { de: 'System', en: 'System' }, icon: Monitor }
	];

	function themeIcon() {
		const r = theme.resolved;
		return r === 'dark' ? Moon : Sun;
	}

	$effect(() => {
		function onScroll() { scrolled = window.scrollY > 40; }
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		function onClickOutside(e: MouseEvent) {
			if (themeOpen && themeMenu && !themeMenu.contains(e.target as Node) && !themeBtn.contains(e.target as Node)) {
				themeOpen = false;
			}
		}
		document.addEventListener('mousedown', onClickOutside);
		return () => document.removeEventListener('mousedown', onClickOutside);
	});

	function scrollTo(id: string) {
		mobileOpen = false;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	const navLinks = [
		{ id: 'projects', key: 'projects' as const },
		{ id: 'about',    key: 'about'    as const },
		{ id: 'reviews',  key: 'reviews'  as const },
		{ id: 'contact',  key: 'contact'  as const }
	];
</script>

<nav class="navbar" class:scrolled>
	<div class="container flex items-center justify-between h-full gap-6">
		<!-- Logo -->
		<button
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			class="flex flex-col items-start leading-none cursor-pointer border-none bg-transparent p-0"
			aria-label="Zurück nach oben"
		>
			<span class="font-semibold text-sm tracking-tight" style="color: var(--text)">Jonah Willner</span>
			<span class="label" style="font-size: 0.62rem; margin-top: 1px">Webentwickler</span>
		</button>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-1">
			{#each navLinks as link}
				<button
					onclick={() => scrollTo(link.id)}
					class="px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer border-none bg-transparent"
					style="color: var(--text-muted); font-family: var(--font-sans)"
					onmouseenter={(e) => (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)'}
					onmouseleave={(e) => (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'}
				>
					{t('nav')[link.key]}
				</button>
			{/each}
		</div>

		<!-- Controls -->
		<div class="flex items-center gap-2">
			<!-- Language toggle -->
			<button
				onclick={() => locale.toggle()}
				class="flex items-center gap-1 px-2.5 py-1 rounded-md border text-xs font-mono cursor-pointer transition-colors"
				style="border-color: var(--border); color: var(--text-muted); background: transparent; font-size: 0.72rem; letter-spacing: 0.08em"
				aria-label="Sprache wechseln"
			>
				<span style="color: {locale.current === 'de' ? 'var(--text)' : 'var(--text-muted)'}">DE</span>
				<span style="color: var(--border)">|</span>
				<span style="color: {locale.current === 'en' ? 'var(--text)' : 'var(--text-muted)'}">EN</span>
			</button>

			<!-- Theme dropdown -->
			<div class="relative">
				<button
					bind:this={themeBtn}
					onclick={() => themeOpen = !themeOpen}
					class="flex items-center gap-1 px-2.5 py-1.5 rounded-md border cursor-pointer transition-colors"
					style="border-color: var(--border); color: var(--text-muted); background: transparent"
					aria-label="Theme wechseln"
					aria-expanded={themeOpen}
				>
					<svelte:component this={themeIcon()} size={14} />
					<ChevronDown size={11} style="opacity:0.5; transition: transform 0.2s; transform: rotate({themeOpen ? '180deg' : '0deg'})" />
				</button>

				{#if themeOpen}
					<div
						bind:this={themeMenu}
						class="absolute right-0 mt-2 rounded-lg border overflow-hidden py-1"
						style="background: var(--surface); border-color: var(--border); min-width: 130px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); z-index: 200"
					>
						{#each themeOptions as opt}
							<button
								onclick={() => { theme.set(opt.value); themeOpen = false; }}
								class="flex items-center gap-2.5 w-full px-3 py-2 text-left text-sm cursor-pointer transition-colors border-none"
								style="background: {theme.current === opt.value ? 'var(--accent-bg)' : 'transparent'}; color: {theme.current === opt.value ? 'var(--accent)' : 'var(--text-muted)'}; font-family: var(--font-sans)"
								onmouseenter={(e) => { if (theme.current !== opt.value) (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-2)'; }}
								onmouseleave={(e) => { if (theme.current !== opt.value) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
							>
								<svelte:component this={opt.icon} size={13} />
								{locale.current === 'de' ? opt.label.de : opt.label.en}
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Mobile hamburger -->
			<button
				class="md:hidden flex items-center justify-center w-9 h-9 rounded-md border cursor-pointer transition-colors"
				style="border-color: var(--border); color: var(--text-muted); background: transparent"
				onclick={() => mobileOpen = !mobileOpen}
				aria-label="Menü"
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}<X size={16} />{:else}<Menu size={16} />{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Mobile overlay -->
{#if mobileOpen}
	<div
		class="fixed inset-0 z-50 flex flex-col pt-20 pb-8 px-6"
		style="background: var(--bg)"
	>
		<nav class="flex flex-col gap-2 flex-1">
			{#each navLinks as link}
				<button
					onclick={() => scrollTo(link.id)}
					class="text-left py-4 border-b text-2xl font-semibold tracking-tight cursor-pointer bg-transparent border-x-0 border-t-0"
					style="border-color: var(--border); color: var(--text); font-family: var(--font-sans)"
				>
					{t('nav')[link.key]}
				</button>
			{/each}
		</nav>
		<button
			onclick={() => { mobileOpen = false; scrollTo('contact'); }}
			class="btn btn-primary w-full justify-center mt-6"
		>
			{t('hero').cta_secondary}
		</button>
	</div>
{/if}
