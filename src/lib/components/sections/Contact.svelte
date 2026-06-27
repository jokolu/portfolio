<script lang="ts">
	import { Phone, Mail, MapPin, Copy, Check, ArrowRight } from 'lucide-svelte';
	import { contact } from '$lib/data/content';
	import { t } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/index';

	let copied = $state(false);
	let formName = $state('');
	let formEmail = $state('');
	let formMessage = $state('');

	async function copyEmail() {
		await navigator.clipboard.writeText(contact.email);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	function handleSubmit() {
		// TODO: implement via Cloudflare Worker + Resend
		const subject = encodeURIComponent('Projektanfrage');
		const body = encodeURIComponent(`Name: ${formName}\nE-Mail: ${formEmail}\n\n${formMessage}`);
		window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
	}
</script>

<section
	id="contact"
	class="section"
	style="background: var(--surface); border-top: 1px solid var(--border)"
>
	<!-- Background accent -->
	<div
		class="absolute pointer-events-none"
		style="bottom: 0; right: 0; width: 500px; height: 500px;
		       background: radial-gradient(circle, var(--accent-bg) 0%, transparent 70%);
		       filter: blur(80px)"
	></div>

	<div class="container relative">
		<!-- Heading -->
		<div use:reveal class="mb-16">
			<span class="label block mb-3">04 — {t('contact').heading}</span>
			<h2 class="text-section-heading" style="color: var(--text)">{t('contact').heading}</h2>
			<p class="mt-3" style="color: var(--text-muted); max-width: 420px">{t('contact').sub}</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-start">
			<!-- Left: contact info -->
			<div use:reveal class="flex flex-col gap-6">
				<!-- Availability -->
				<div
					class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border self-start"
					style="background: var(--accent-bg); border-color: var(--accent); border-opacity: 0.3"
				>
					<span class="w-2 h-2 rounded-full animate-pulse" style="background: #4ade80; flex-shrink: 0"></span>
					<span class="text-sm" style="color: var(--text)">{t('contact').availability}</span>
				</div>

				<!-- Contact rows -->
				<div class="flex flex-col gap-4 mt-2">
					<!-- Phone -->
					<a
						href="tel:{contact.phone.replace(/\s/g, '')}"
						class="flex items-center gap-4 group"
						style="text-decoration: none"
					>
						<div
							class="flex items-center justify-center rounded-lg w-10 h-10 flex-shrink-0 transition-colors"
							style="background: var(--surface-2); border: 1px solid var(--border)"
						>
							<Phone size={15} style="color: var(--text-muted)" />
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--text-muted)">{t('contact').name_label.includes('Name') ? 'Telefon' : 'Phone'}</p>
							<p
								class="font-mono text-sm transition-colors"
								style="color: var(--text); font-family: var(--font-mono)"
							>{contact.phone}</p>
						</div>
					</a>

					<!-- Email -->
					<div class="flex items-center gap-4">
						<div
							class="flex items-center justify-center rounded-lg w-10 h-10 flex-shrink-0"
							style="background: var(--surface-2); border: 1px solid var(--border)"
						>
							<Mail size={15} style="color: var(--text-muted)" />
						</div>
						<div class="flex-1 min-w-0">
							<p class="text-xs mb-0.5" style="color: var(--text-muted)">E-Mail</p>
							<div class="flex items-center gap-2">
								<a
									href="mailto:{contact.email}"
									class="font-mono text-sm truncate transition-colors hover:opacity-80"
									style="color: var(--text); font-family: var(--font-mono); text-decoration: none"
								>{contact.email}</a>
								<button
									onclick={copyEmail}
									class="flex-shrink-0 p-1 rounded cursor-pointer border-none bg-transparent transition-colors"
									style="color: {copied ? '#4ade80' : 'var(--text-muted)'}"
									aria-label="E-Mail kopieren"
								>
									{#if copied}<Check size={13} />{:else}<Copy size={13} />{/if}
								</button>
							</div>
						</div>
					</div>

					<!-- Location -->
					<div class="flex items-center gap-4">
						<div
							class="flex items-center justify-center rounded-lg w-10 h-10 flex-shrink-0"
							style="background: var(--surface-2); border: 1px solid var(--border)"
						>
							<MapPin size={15} style="color: var(--text-muted)" />
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--text-muted)">Standort</p>
							<p class="text-sm" style="color: var(--text)">{contact.location}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right: form -->
			<div use:reveal={{ delay: 150 }}>
				<div class="flex flex-col gap-4">
					<!-- Name -->
					<div>
						<label
							for="form-name"
							class="label block mb-2"
						>{t('contact').name_label}</label>
						<input
							id="form-name"
							type="text"
							bind:value={formName}
							placeholder={t('contact').name_placeholder}
							class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
							style="
								background: var(--surface-2);
								border-color: var(--border);
								color: var(--text);
								font-family: var(--font-sans)
							"
							onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
							onblur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
						/>
					</div>

					<!-- Email -->
					<div>
						<label for="form-email" class="label block mb-2">{t('contact').email_label}</label>
						<input
							id="form-email"
							type="email"
							bind:value={formEmail}
							placeholder={t('contact').email_placeholder}
							class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
							style="
								background: var(--surface-2);
								border-color: var(--border);
								color: var(--text);
								font-family: var(--font-sans)
							"
							onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
							onblur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
						/>
					</div>

					<!-- Message -->
					<div>
						<label for="form-message" class="label block mb-2">{t('contact').message_label}</label>
						<textarea
							id="form-message"
							bind:value={formMessage}
							placeholder={t('contact').message_placeholder}
							rows={5}
							class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none"
							style="
								background: var(--surface-2);
								border-color: var(--border);
								color: var(--text);
								font-family: var(--font-sans)
							"
							onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
							onblur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
						></textarea>
					</div>

					<button onclick={handleSubmit} class="btn btn-primary justify-center">
						{t('contact').send}
						<ArrowRight size={14} />
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
