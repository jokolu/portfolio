<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import { t } from '$lib/i18n/index.svelte';
</script>

<footer style="border-top: 1px solid var(--border); background: var(--bg)">
	<div class="container">
		<!-- Main row -->
		<div class="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 py-10">

			<!-- Brand (left) -->
			<div class="flex flex-col items-center md:items-start gap-0.5 text-center md:text-left">
				<span class="font-semibold text-sm" style="color: var(--text)">Jonah Willner</span>
				<span style="font-family: var(--font-display); font-style: italic; font-size: 0.8rem; color: var(--text-muted)">
					{t('footer').tagline}
				</span>
			</div>

			<!-- Legal links (center) -->
			<div class="flex items-center gap-1">
				<a href="/impressum" class="px-3 py-1.5 rounded-md text-xs transition-colors" style="color: var(--text-muted); text-decoration: none"
					onmouseenter={(e) => (e.currentTarget.style.color = 'var(--text)')}
					onmouseleave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
				>{t('footer').imprint}</a>
				<span style="color: var(--border); user-select: none">·</span>
				<a href="/datenschutz" class="px-3 py-1.5 rounded-md text-xs transition-colors" style="color: var(--text-muted); text-decoration: none"
					onmouseenter={(e) => (e.currentTarget.style.color = 'var(--text)')}
					onmouseleave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
				>{t('footer').privacy}</a>
			</div>

			<!-- Socials + copyright (right) -->
			<div class="flex items-center gap-3">
				<a href="https://github.com/Creeper100GB" target="_blank" rel="noopener noreferrer"
					class="p-2 rounded-md border transition-all" style="border-color: var(--border); color: var(--text-muted)" aria-label="GitHub"
					onmouseenter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text)'; el.style.borderColor = 'var(--border-hover)'; }}
					onmouseleave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-muted)'; el.style.borderColor = 'var(--border)'; }}
				><Github size={14} /></a>

				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
					class="p-2 rounded-md border transition-all" style="border-color: var(--border); color: var(--text-muted)" aria-label="LinkedIn"
					onmouseenter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text)'; el.style.borderColor = 'var(--border-hover)'; }}
					onmouseleave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-muted)'; el.style.borderColor = 'var(--border)'; }}
				><Linkedin size={14} /></a>

				<a href="mailto:jonah@willner.ws"
					class="p-2 rounded-md border transition-all" style="border-color: var(--border); color: var(--text-muted)" aria-label="E-Mail"
					onmouseenter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text)'; el.style.borderColor = 'var(--border-hover)'; }}
					onmouseleave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-muted)'; el.style.borderColor = 'var(--border)'; }}
				><Mail size={14} /></a>

				<span class="text-xs pl-1" style="color: var(--text-subtle)">© 2025</span>
			</div>
		</div>
	</div>
</footer>
