<script lang="ts">
	import { Phone, Mail, MapPin, Copy, Check, ArrowRight } from 'lucide-svelte';
	import { contact } from '$lib/data/content';
	import { t } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';

	let copied        = $state(false);
	let formName      = $state('');
	let formEmail     = $state('');
	let formMessage   = $state('');

	async function copyEmail() {
		await navigator.clipboard.writeText(contact.email);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	function handleSubmit() {
		// TODO: replace with Cloudflare Worker + Resend for real email sending
		const sub  = encodeURIComponent('Projektanfrage');
		const body = encodeURIComponent(`Name: ${formName}\nE-Mail: ${formEmail}\n\n${formMessage}`);
		window.location.href = `mailto:${contact.email}?subject=${sub}&body=${body}`;
	}
</script>

<!-- FIX: position: relative so the absolute glow div is contained; overflow: hidden clips it -->
<section
	id="contact"
	class="section"
	style="background: var(--surface); border-top: 1px solid var(--border); position: relative; overflow: hidden"
>
	<!-- Background glow -->
	<div
		class="absolute pointer-events-none"
		style="bottom: -20%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, var(--accent-bg) 0%, transparent 70%); filter: blur(80px); z-index: 0"
		aria-hidden="true"
	></div>

	<div class="container relative" style="z-index: 1">
		<div use:reveal class="section-head">
			<span class="label">04 — {t('contact').heading}</span>
			<h2 class="text-section-heading mt-3" style="color: var(--text)">{t('contact').heading}</h2>
			<p class="mt-3" style="color: var(--text-muted); max-width: 400px">{t('contact').sub}</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-start">

			<!-- Left: contact info -->
			<div use:reveal class="flex flex-col gap-6">
				<div
					class="inline-flex items-center gap-2 px-3 py-2 rounded-lg self-start"
					style="background: var(--accent-bg); border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent)"
				>
					<span class="w-2 h-2 rounded-full animate-pulse shrink-0" style="background: #4ade80"></span>
					<span class="text-sm" style="color: var(--text)">{t('contact').availability}</span>
				</div>

				<div class="flex flex-col gap-4 mt-1">
					<!-- Phone — FIX: uses t('contact').phone_label -->
					<a href="tel:{contact.phone.replace(/\s/g,'')}" class="flex items-center gap-4 group" style="text-decoration: none">
						<div class="flex items-center justify-center rounded-lg w-10 h-10 shrink-0 transition-colors" style="background: var(--surface-2); border: 1px solid var(--border)">
							<Phone size={15} style="color: var(--text-muted)" />
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--text-muted)">{t('contact').phone_label}</p>
							<p style="color: var(--text); font-family: var(--font-mono); font-size: 0.875rem">{contact.phone}</p>
						</div>
					</a>

					<!-- Email -->
					<div class="flex items-center gap-4">
						<div class="flex items-center justify-center rounded-lg w-10 h-10 shrink-0" style="background: var(--surface-2); border: 1px solid var(--border)">
							<Mail size={15} style="color: var(--text-muted)" />
						</div>
						<div class="flex-1 min-w-0">
							<p class="text-xs mb-0.5" style="color: var(--text-muted)">{t('contact').email_label}</p>
							<div class="flex items-center gap-2">
								<a href="mailto:{contact.email}" class="font-mono text-sm truncate hover:opacity-80 transition-opacity" style="color: var(--text); font-family: var(--font-mono); text-decoration: none">{contact.email}</a>
								<button onclick={copyEmail} class="shrink-0 p-1 rounded cursor-pointer border-none bg-transparent transition-colors" style="color: {copied ? '#4ade80' : 'var(--text-muted)'}" aria-label="E-Mail kopieren">
									{#if copied}<Check size={13} />{:else}<Copy size={13} />{/if}
								</button>
							</div>
						</div>
					</div>

					<!-- Location — FIX: uses t('contact').location_label -->
					<div class="flex items-center gap-4">
						<div class="flex items-center justify-center rounded-lg w-10 h-10 shrink-0" style="background: var(--surface-2); border: 1px solid var(--border)">
							<MapPin size={15} style="color: var(--text-muted)" />
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--text-muted)">{t('contact').location_label}</p>
							<p class="text-sm" style="color: var(--text)">{contact.location}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right: form -->
			<div use:reveal={{ delay: 120 }} class="flex flex-col gap-4">
				<div>
					<label for="f-name" class="label block mb-2">{t('contact').name_label}</label>
					<input id="f-name" type="text" bind:value={formName} placeholder={t('contact').name_placeholder}
						class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
						style="background: var(--surface-2); border-color: var(--border); color: var(--text); font-family: var(--font-sans)"
						onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
						onblur={(e)  => (e.currentTarget.style.borderColor = 'var(--border)')}
					/>
				</div>
				<div>
					<label for="f-email" class="label block mb-2">{t('contact').email_label}</label>
					<input id="f-email" type="email" bind:value={formEmail} placeholder={t('contact').email_placeholder}
						class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
						style="background: var(--surface-2); border-color: var(--border); color: var(--text); font-family: var(--font-sans)"
						onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
						onblur={(e)  => (e.currentTarget.style.borderColor = 'var(--border)')}
					/>
				</div>
				<div>
					<label for="f-msg" class="label block mb-2">{t('contact').message_label}</label>
					<textarea id="f-msg" bind:value={formMessage} placeholder={t('contact').message_placeholder} rows={5}
						class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none"
						style="background: var(--surface-2); border-color: var(--border); color: var(--text); font-family: var(--font-sans)"
						onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
						onblur={(e)  => (e.currentTarget.style.borderColor = 'var(--border)')}
					></textarea>
				</div>
				<button onclick={handleSubmit} class="btn btn-primary justify-center">
					{t('contact').send} <ArrowRight size={14} />
				</button>
			</div>
		</div>
	</div>
</section>
