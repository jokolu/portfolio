export const en = {
	nav: { projects: 'Projects', about: 'About', reviews: 'Reviews', contact: 'Contact' },
	hero: {
		label: 'Web Developer · Berlin · DACH',
		line1: 'Websites that',
		line2: 'inspire.',
		sub: 'I build modern, lightning-fast websites for local businesses — with a measurable edge over your competition.',
		cta_primary: 'View projects',
		cta_secondary: 'Get in touch'
	},
	stats: [
		{ value: 12, suffix: '+', label: 'Projects' },
		{ value: 90, suffix: '+', label: 'Avg PageSpeed' },
		{ value: 5,  suffix: '★', label: 'Reviews' },
		{ value: 2,  suffix: '+', label: 'Years exp.' }
	],
	projects: { heading: 'Projects', sub: 'Selected work — from concept to finished product.', visit: 'Visit site', wip: 'Coming soon' },
	about: {
		heading: 'About me',
		p1: "I'm Jonah Willner, a web developer and creative technologist based in Berlin. My specialty: modern, performant websites that don't just look good — they actually work.",
		p2: "From the first pixel to the last commit, I handle everything. My clients don't get templates — they get websites built around their business.",
		skills_label: 'Technologies',
		availability: 'Available for new projects'
	},
	reviews: { heading: 'Reviews', sub: 'What my clients say.' },
	contact: {
		heading: 'Contact',
		sub: 'Ready for a better website? Write to me.',
		name_label: 'Name', name_placeholder: 'Your name',
		email_label: 'Email', email_placeholder: 'your@email.com',
		phone_label: 'Phone',
		location_label: 'Location',
		message_label: 'Message', message_placeholder: 'Tell me about your project...',
		send: 'Send message',
		availability: 'Available for new projects',
		copied: 'Copied!'
	},
	footer: { tagline: 'Websites that inspire.', rights: 'All rights reserved.', imprint: 'Legal Notice', privacy: 'Privacy Policy' }
} as const;
