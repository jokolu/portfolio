export interface Project {
	id: string;
	title: string;
	description: { de: string; en: string };
	url: string;
	tags: string[];
	gradient: string;
	live: boolean;
}

export interface Testimonial {
	quote: { de: string; en: string };
	author: string;
	role: string;
	rating: number;
}

export interface ContactInfo {
	name: string;
	phone: string;
	email: string;
	location: string;
}

export const projects: Project[] = [
	{
		id: 'velora',
		title: 'Velora Typeface',
		description: {
			de: 'Kalligraphische Serifenlose mit hohem Kontrast und charakteristischen Aufstrichen — parametrisch erzeugt mit Python und fonttools.',
			en: 'Calligraphic sans-serif with high contrast and upswept terminals — parametrically generated with Python & fonttools.'
		},
		url: 'https://v.jokolu.com',
		tags: ['Type Design', 'Python', 'fonttools'],
		gradient: 'linear-gradient(135deg, #0f0f1a 0%, #1a1040 60%, #2d1b8e 100%)',
		live: true
	},
	{
		id: 'kulturkompass',
		title: 'KulturKompass',
		description: {
			de: 'KI-Chatbot für die Stiftung Preußischer Kulturbesitz — mit Live-Retrieval, DE/EN i18n und Cloudflare Pages.',
			en: 'AI chatbot for the Stiftung Preußischer Kulturbesitz — live retrieval, DE/EN i18n, Cloudflare Pages.'
		},
		url: '#',
		tags: ['SvelteKit', 'Gemini', 'Cloudflare', 'AI'],
		gradient: 'linear-gradient(135deg, #0a1628 0%, #0d3b2e 55%, #0e6655 100%)',
		live: false
	},
	{
		id: 'teupitz',
		title: 'Teupitz iOS App',
		description: {
			de: 'Live iOS App mit 4.8★ und 100+ aktiven Nutzern — SwiftUI, Firestore, Gruppen-Kollaboration.',
			en: 'Live iOS app, 4.8★, 100+ active users — SwiftUI, Firestore, group collaboration.'
		},
		url: '#',
		tags: ['SwiftUI', 'Firestore', 'iOS'],
		gradient: 'linear-gradient(135deg, #0c0c1e 0%, #0a2a5c 55%, #1a5fb4 100%)',
		live: false
	},
	{
		id: 'email-assistant',
		title: 'AI Email Assistant',
		description: {
			de: 'KI-gestützter E-Mail-Assistent — Tonalitäts-Controls, 6 Sprachen inkl. Arabisch (RTL), Dark/Light Mode.',
			en: 'AI-powered email assistant — tone controls, 6 languages incl. Arabic (RTL), dark/light mode.'
		},
		url: '#',
		tags: ['React', 'Claude API', 'TypeScript'],
		gradient: 'linear-gradient(135deg, #0c1a0c 0%, #133313 55%, #1e6b1e 100%)',
		live: false
	}
];

export const testimonials: Testimonial[] = [
	{
		quote: {
			de: 'Unsere Website war nach dem Relaunch sofort auf Seite 1. Sie sieht endlich so aus, wie wir uns das immer vorgestellt hatten.',
			en: 'Our website was on page 1 right after the relaunch. It finally looks the way we always imagined.'
		},
		author: 'Max Mustermann',
		role: 'Geschäftsführer, Muster GmbH',
		rating: 5
	},
	{
		quote: {
			de: 'Schnelle Umsetzung, klare Kommunikation, tolles Ergebnis. Der PageSpeed-Score ist von 34 auf 96 gestiegen.',
			en: 'Fast execution, clear communication, great result. PageSpeed went from 34 to 96.'
		},
		author: 'Anna Beispiel',
		role: 'Marketing Managerin, Beispiel AG',
		rating: 5
	},
	{
		quote: {
			de: 'Jonah versteht nicht nur Code, sondern auch Business. Er hat genau gewusst, was wir brauchen — bevor wir es selbst wussten.',
			en: 'Jonah understands not just code, but business. He knew what we needed before we did.'
		},
		author: 'Thomas Test',
		role: 'Inhaber, Test & Co.',
		rating: 5
	}
];

export const skills = [
	'SvelteKit', 'TypeScript', 'Tailwind CSS',
	'Cloudflare', 'Swift / iOS', 'AI Integration',
	'Figma', 'Python', 'Git', 'PostgreSQL',
	'React', 'Node.js'
];

export const contact: ContactInfo = {
	name: 'Jonah Willner',
	phone: '+49 155 63220496',
	email: 'jonah@willner.ws',
	location: 'Berlin, Deutschland'
};
