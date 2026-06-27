export type Theme = 'dark' | 'light' | 'auto';

let _theme = $state<Theme>('auto');

function resolve(t: Theme): 'dark' | 'light' {
	if (t !== 'auto') return t;
	if (typeof window === 'undefined') return 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function apply(t: Theme) {
	if (typeof document === 'undefined') return;
	document.documentElement.setAttribute('data-theme', resolve(t));
}

export const theme = {
	get current(): Theme {
		return _theme;
	},
	get resolved(): 'dark' | 'light' {
		return resolve(_theme);
	},
	init() {
		if (typeof localStorage === 'undefined') return;
		const saved = localStorage.getItem('jw-theme') as Theme | null;
		if (saved === 'dark' || saved === 'light' || saved === 'auto') {
			_theme = saved;
		}
		// Listen for system preference changes when in auto mode
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (_theme === 'auto') apply('auto');
		});
	},
	set(t: Theme) {
		_theme = t;
		apply(t);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('jw-theme', t);
		}
	}
};
