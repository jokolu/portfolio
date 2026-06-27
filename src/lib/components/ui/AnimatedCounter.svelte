<script lang="ts">
	interface Props {
		to: number;
		suffix?: string;
		duration?: number;
	}

	let { to, suffix = '', duration = 1400 }: Props = $props();

	let display = $state(0);
	let started = $state(false);
	let el: HTMLSpanElement;

	function easeOutCubic(t: number) {
		return 1 - Math.pow(1 - t, 3);
	}

	function startCount() {
		if (started) return;
		started = true;
		const start = performance.now();
		function step(now: number) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			display = Math.round(easeOutCubic(progress) * to);
			if (progress < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	$effect(() => {
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					startCount();
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<span bind:this={el} class="tabular-nums">{display}{suffix}</span>
