<script lang="ts">
	import { Github, Linkedin } from 'lucide-svelte';
	import { t } from '$lib/i18n/index.svelte';
</script>

<footer style="border-top: 1px solid var(--border); background: var(--bg)">
	<div class="container">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6 py-10">
			<!-- Left: brand + tagline -->
			<div class="flex flex-col items-center md:items-start gap-1">
				<span class="font-semibold text-sm" style="color: var(--text)">Jonah Willner</span>
				<span class="text-xs" style="color: var(--text-muted); font-family: var(--font-display); font-style: italic">
					{t('footer').tagline}
				</span>
			</div>

			<!-- Center: legal links -->
			<div class="flex items-center gap-5">
				<a
					href="/impressum"
					class="text-xs transition-colors"
					style="color: var(--text-muted); text-decoration: none"
					onmouseenter={(e) => (e.currentTarget.style.color = 'var(--text)')}
					onmouseleave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
				>{t('footer').imprint}</a>
				<span style="color: var(--border)">·</span>
				<a
					href="/datenschutz"
					class="text-xs transition-colors"
					style="color: var(--text-muted); text-decoration: none"
					onmouseenter={(e) => (e.currentTarget.style.color = 'var(--text)')}
					onmouseleave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
				>{t('footer').privacy}</a>
			</div>

			<!-- Right: socials + copyright -->
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/Creeper100GB"
					target="_blank"
					rel="noopener noreferrer"
					class="p-2 rounded-md transition-colors border"
					style="border-color: var(--border); color: var(--text-muted)"
					aria-label="GitHub"
					onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'; }}
					onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
				>
					<Github size={15} />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					class="p-2 rounded-md transition-colors border"
					style="border-color: var(--border); color: var(--text-muted)"
					aria-label="LinkedIn"
					onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'; }}
					onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
				>
					<Linkedin size={15} />
				</a>
				<span class="text-xs" style="color: var(--text-subtle)">
					© 2025 Jonah Willner. {t('footer').rights}
				</span>
			</div>
		</div>
	</div>
</footer>
