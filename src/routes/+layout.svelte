<script lang="ts">
	import '../app.css';
	import { onMount, onDestroy } from 'svelte';
	let { data, children } = $props();

	let vantaRef: HTMLElement;
	let vantaEffect: any;

	onMount(() => {
		let cleanup: (() => void) | undefined;

		(async () => {
			const p5 = (await import('p5')).default;
			const TRUNK = (await import('vanta/dist/vanta.trunk.min')).default;

			vantaEffect = TRUNK({
				el: vantaRef,
				p5,
				mouseControls: false,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 3,
				scaleMobile: 1.0,
				color: 0x2c2c37,
				backgroundColor: 0x020617,
				spacing: 3.5,
				chaos: 2.5
			});

			cleanup = () => {
				if (vantaEffect) vantaEffect.destroy();
			};
		})();

		return () => {
			if (cleanup) cleanup();
		};
	});
</script>

<div class="background gray" bind:this={vantaRef}></div>

{@render children()}
