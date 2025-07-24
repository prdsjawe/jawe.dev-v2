<script lang="ts">
	import { onMount } from 'svelte';

	let x = 0;
	let y = 0;

	let followerX = 0;
	let followerY = 0;

	const size = 40; // diameter of the circle
	const delay = 0.1; // lower = faster, 0.1 = nice delay

	let animationFrame: number;
	let visible = true;
	let hideTimeout: ReturnType<typeof setTimeout>;

	const animate = () => {
		followerX += (x - followerX) * delay;
		followerY += (y - followerY) * delay;
		animationFrame = requestAnimationFrame(animate);
	};

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
			visible = true;
			clearTimeout(hideTimeout);
			hideTimeout = setTimeout(() => {
				visible = false;
			}, 1000);
		};

		window.addEventListener('mousemove', handleMouseMove);
		animate();

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<div
	class="pointer-events-none fixed z-[9999] rounded-full border border-white/50 transition-colors transition-opacity duration-300"
	class:opacity-0={!visible}
	style="
		width: {size}px;
		height: {size}px;
		left: {followerX}px;
		top: {followerY}px;
		transform: translate(-50%, -50%);
	"
></div>
