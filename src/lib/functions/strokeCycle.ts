import { animate } from 'animejs';

export interface StrokeCycleOptions {
	duration?: number;
	delay?: number;
}

const COLORS = ['#ec4899', '#22d3ee', '#facc15', '#ec4899']; // pink-500, cyan-400, yellow-400, pink-500

export function strokeCycle(node: HTMLElement, options: StrokeCycleOptions = {}) {
	const { duration = 4500, delay = 0 } = options;

	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced) {
		return { destroy() {} };
	}

	const anim = animate(node, {
		'--stroke': COLORS,
		duration,
		ease: 'linear',
		loop: true,
		delay
	});

	return {
		destroy() {
			anim.pause();
		}
	};
}
