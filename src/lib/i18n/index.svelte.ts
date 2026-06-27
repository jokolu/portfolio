import { de } from './de';
import { en } from './en';

export type Locale = 'de' | 'en';

const translations = { de, en };

let _locale = $state<Locale>('de');

export const locale = {
	get current(): Locale {
		return _locale;
	},
	init() {
		if (typeof localStorage === 'undefined') return;
		const saved = localStorage.getItem('jw-locale') as Locale | null;
		if (saved === 'de' || saved === 'en') _locale = saved;
	},
	set(l: Locale) {
		_locale = l;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('jw-locale', l);
		}
		if (typeof document !== 'undefined') {
			document.documentElement.lang = l;
		}
	},
	toggle() {
		locale.set(_locale === 'de' ? 'en' : 'de');
	}
};

/** Reactive translation getter — re-evaluates in templates when locale changes */
export function t<K extends keyof typeof de>(key: K): (typeof de)[K] {
	return translations[_locale][key] as (typeof de)[K];
}
