export type Theme = 'dark' | 'light' | 'auto';

const THEME_COLORS = { dark: '#0c0c0c', light: '#f5f4ef' };

let _theme = $state<Theme>('auto');

function resolve(t: Theme): 'dark' | 'light' {
	if (t !== 'auto') return t;
	if (typeof window === 'undefined') return 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(t: Theme) {
	if (typeof document === 'undefined') return;
	const resolved = resolve(t);
	document.documentElement.setAttribute('data-theme', resolved);
	// FIX: update mobile browser chrome color
	const meta = document.getElementById('theme-color-meta');
	if (meta) meta.setAttribute('content', THEME_COLORS[resolved]);
}

export const theme = {
	get current(): Theme   { return _theme; },
	get resolved(): 'dark' | 'light' { return resolve(_theme); },
	init() {
		if (typeof localStorage === 'undefined') return;
		const saved = localStorage.getItem('jw-theme') as Theme | null;
		if (saved === 'dark' || saved === 'light' || saved === 'auto') _theme = saved;
		// Re-apply in case hydration differs from SSR
		applyTheme(_theme);
		// React to OS-level changes when in auto mode
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (_theme === 'auto') applyTheme('auto');
		});
	},
	set(t: Theme) {
		_theme = t;
		applyTheme(t);
		if (typeof localStorage !== 'undefined') localStorage.setItem('jw-theme', t);
	}
};
