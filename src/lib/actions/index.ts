/** Svelte action: fade+slide element in when it enters the viewport */
export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.classList.add('will-reveal');

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('revealed');
				observer.disconnect();
			}
		},
		{ threshold: 0.12 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

/** Svelte action: tracks mouse position for the radial cursor glow */
export function cursorGlow(_node: HTMLElement) {
	function onMove(e: MouseEvent) {
		document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
		document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
	}
	window.addEventListener('mousemove', onMove, { passive: true });
	return {
		destroy() {
			window.removeEventListener('mousemove', onMove);
		}
	};
}
