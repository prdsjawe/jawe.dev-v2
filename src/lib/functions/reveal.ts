export interface RevealOptions {
	delay?: number;
	y?: number;
	duration?: number;
	threshold?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { delay = 0, y = 24, duration = 900, threshold = 0.12 } = options;

	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced) {
		return { destroy() {} };
	}

	node.style.willChange = 'opacity, transform';
	node.style.opacity = '0';
	node.style.transform = `translate3d(0, ${y}px, 0)`;
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.2, 0.7, 0.1, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.7, 0.1, 1) ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translate3d(0, 0, 0)';
					observer.disconnect();
					setTimeout(() => {
						node.style.willChange = 'auto';
					}, duration + delay + 50);
					break;
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
