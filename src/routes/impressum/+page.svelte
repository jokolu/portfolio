<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Impressum — Jonah Willner</title>
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

		<h1 class="text-section-heading mb-10" style="color: var(--text)">Impressum</h1>

		<div class="flex flex-col gap-8" style="color: var(--text-muted); line-height: 1.8; font-size: 0.95rem">
			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">Angaben gemäß § 5 TMG</h2>
				<p>Jonah Willner<br />
				[Straße und Hausnummer]<br />
				[PLZ] Berlin<br />
				Deutschland</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">Kontakt</h2>
				<p>Telefon: +49 155 63220496<br />
				E-Mail: <a href="mailto:jonah@willner.ws" style="color: var(--accent); text-decoration: none">jonah@willner.ws</a></p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
				<p>Jonah Willner<br />
				[Adresse wie oben]</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">Haftungsausschluss</h2>
				<p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
			</section>

			<section>
				<h2 class="font-semibold mb-2" style="color: var(--text); font-size: 1rem">Urheberrecht</h2>
				<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
			</section>
		</div>
	</div>
</div>
