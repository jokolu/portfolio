/** Scroll reveal: fade+slide in on viewport entry */
export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.classList.add('will-reveal');
	const observer = new IntersectionObserver(
		([entry]) => { if (entry.isIntersecting) { node.classList.add('revealed'); observer.disconnect(); } },
		{ threshold: 0.1 }
	);
	observer.observe(node);
	return { destroy() { observer.disconnect(); } };
}

/** Cursor glow: tracks mouse for the radial gradient — RAF-throttled for perf */
export function cursorGlow(_node: HTMLElement) {
	let rafId = 0;
	function onMove(e: MouseEvent) {
		cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => {
			document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
			document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
		});
	}
	window.addEventListener('mousemove', onMove, { passive: true });
	return { destroy() { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); } };
}
