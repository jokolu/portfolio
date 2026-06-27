<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Datenschutz — Jonah Willner</title>
</svelte:head>

<div style="padding-top: 64px; min-height: 100vh; background: var(--bg)">
	<div class="container section" style="max-width: 720px">
		<a
			href="/"
			class="inline-flex items-center gap-2 mb-10 text-sm transition-colors"
			style="color: var(--text-muted); text-decoration: none"
			onmouseenter={(e) => (e.currentTarget.style.color = 'var(--text)')}
			onmouseleave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
		>
			<ArrowLeft size={14} />
			Zurück
		</a>

		<h1 class="text-section-heading mb-10" style="color: var(--text)">Datenschutzerklärung</h1>

		<div class="flex flex-col gap-8" style="color: var(--text-muted); line-height: 1.8; font-size: 0.95rem">
			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">1. Datenschutz auf einen Blick</h2>
				<p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">2. Verantwortlicher</h2>
				<p>Jonah Willner, jonah@willner.ws, +49 155 63220496, Berlin, Deutschland.</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">3. Datenerfassung auf dieser Website</h2>
				<p><strong style="color: var(--text)">Cookies:</strong> Diese Website verwendet ausschließlich technisch notwendige Einstellungen (Theme-Präferenz, Sprachauswahl), die lokal in Ihrem Browser gespeichert werden (localStorage). Es werden keine Tracking-Cookies gesetzt.</p>
				<p class="mt-3"><strong style="color: var(--text)">Server-Logs:</strong> Beim Besuch dieser Website werden automatisch Informationen in Server-Logfiles gespeichert (IP-Adresse, Browser, Betriebssystem, Referrer-URL, Datum/Uhrzeit). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
				<p class="mt-3"><strong style="color: var(--text)">Kontaktformular:</strong> Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">4. Schriftarten</h2>
				<p>Diese Website verwendet ausschließlich selbst gehostete Schriftarten (via Fontsource/npm). Es werden keine Anfragen an externe Schriftarten-Dienste (z. B. Google Fonts CDN) gestellt.</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">5. Ihre Rechte</h2>
				<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer gespeicherten Daten. Wenden Sie sich dazu an: <a href="mailto:jonah@willner.ws" style="color: var(--accent); text-decoration: none">jonah@willner.ws</a></p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">6. Hosting</h2>
				<p>Diese Website wird über Cloudflare Pages gehostet. Cloudflare kann dabei technische Daten erheben. Weitere Informationen finden Sie in der <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none">Datenschutzerklärung von Cloudflare</a>.</p>
			</section>
		</div>
	</div>
</div>
