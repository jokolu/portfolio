export const de = {
	nav: {
		projects: 'Projekte',
		about: 'Über mich',
		reviews: 'Bewertungen',
		contact: 'Kontakt'
	},
	hero: {
		label: 'Webentwickler · DACH-Raum',
		line1: 'Websites,',
		line2: 'die begeistern.',
		sub: 'Ich entwickle moderne, blitzschnelle Websites für lokale Unternehmen — mit messbarem Vorteil gegenüber Ihrer Konkurrenz.',
		cta_primary: 'Projekte ansehen',
		cta_secondary: 'Kontakt aufnehmen',
		scroll: 'Scrollen'
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Projekte' },
		{ value: 90, suffix: '+', label: 'Ø PageSpeed' },
		{ value: 5, suffix: '★', label: 'Bewertungen' },
		{ value: 2, suffix: '+', label: 'Jahre Erfahrung' }
	],
	projects: {
		heading: 'Meine Projekte',
		sub: 'Ausgewählte Arbeiten — von der Idee zur fertigen Website.',
		visit: 'Zur Website',
		wip: 'In Kürze'
	},
	about: {
		heading: 'Über mich',
		p1: 'Ich bin Jonah Willner, Webentwickler und Creative Technologist aus Berlin. Meine Spezialität: moderne, performante Websites, die nicht nur gut aussehen — sondern auch wirklich funktionieren.',
		p2: 'Vom ersten Pixel bis zum letzten Commit kümmere ich mich um alles. Meine Kunden bekommen keine Templates — sie bekommen Websites, die zu ihrem Unternehmen passen.',
		skills_label: 'Technologien'
	},
	reviews: {
		heading: 'Bewertungen',
		sub: 'Was meine Kunden sagen.'
	},
	contact: {
		heading: 'Kontakt',
		sub: 'Bereit für eine bessere Website? Schreiben Sie mir.',
		name_label: 'Name',
		name_placeholder: 'Ihr Name',
		email_label: 'E-Mail',
		email_placeholder: 'ihre@email.de',
		message_label: 'Nachricht',
		message_placeholder: 'Erzählen Sie mir von Ihrem Projekt...',
		send: 'Nachricht senden',
		availability: 'Verfügbar für neue Projekte',
		copied: 'Kopiert!'
	},
	footer: {
		tagline: 'Websites, die begeistern.',
		rights: 'Alle Rechte vorbehalten.',
		imprint: 'Impressum',
		privacy: 'Datenschutz'
	}
} as const;

export type Translations = typeof de;
