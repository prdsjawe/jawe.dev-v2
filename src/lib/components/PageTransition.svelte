<script lang="ts">
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { FeaturedProjects, DEFAULT_TRANSITION_COLORS } from '$lib/constants/featured';

	const COUNT = 5;
	const DURATION_MS = 700;
	const STAGGER_MS = 120;
	const TOTAL_MS = DURATION_MS + (COUNT - 1) * STAGGER_MS;

	function getColorsForPath(pathname: string): string[] {
		const match = FeaturedProjects.find((p) => pathname.startsWith(p.link));
		return match ? match.colors : DEFAULT_TRANSITION_COLORS;
	}

	type Phase = 'idle' | 'entering' | 'exiting';
	let phase: Phase = $state('idle');
	let colors: string[] = $state(DEFAULT_TRANSITION_COLORS);
	let enterStart = 0;
	let active = false;
	let exitTimer: ReturnType<typeof setTimeout> | null = null;

	beforeNavigate((nav) => {
		if (!nav.to || nav.to.url.pathname === nav.from?.url.pathname) return;

		if (exitTimer) clearTimeout(exitTimer);
		colors = getColorsForPath(nav.from?.url.pathname || '/');
		active = true;
		phase = 'entering';
		enterStart = performance.now();
	});

	onNavigate((nav) => {
		if (!active) return;
		if (!nav.to || nav.to.url.pathname === nav.from?.url.pathname) return;

		const elapsed = performance.now() - enterStart;
		const remaining = Math.max(0, TOTAL_MS - elapsed);

		return new Promise<void>((resolve) => {
			setTimeout(resolve, remaining);
		});
	});

	afterNavigate((nav) => {
		if (!active) return;
		if (nav.type === 'enter') return;

		active = false;

		requestAnimationFrame(() => {
			phase = 'exiting';
			exitTimer = setTimeout(() => {
				phase = 'idle';
				exitTimer = null;
			}, TOTAL_MS);
		});
	});
</script>

<div class="overlay" data-phase={phase} aria-hidden="true">
	{#each Array(COUNT) as _, i (i)}
		<div class="block" style="background: {colors[i]}; --delay: {i * STAGGER_MS}ms;"></div>
	{/each}
</div>

<style lang="postcss">
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 100;
		pointer-events: none;
		display: flex;
		flex-direction: column;
	}

	.block {
		flex: 1 1 0;
		width: 100%;
		transform: translateX(100%);
		transition: transform 700ms cubic-bezier(0.76, 0, 0.24, 1);
		will-change: transform;
	}

	.overlay[data-phase='entering'] .block {
		transform: translateX(0);
		transition-delay: var(--delay);
	}

	.overlay[data-phase='exiting'] .block {
		transform: translateX(-100%);
		transition-delay: var(--delay);
	}

	.overlay[data-phase='idle'] .block {
		transform: translateX(100%);
		transition: none;
	}
</style>
