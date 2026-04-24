<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d', { alpha: false })!;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let w = 0;
		let h = 0;
		const CELL = 80;

		const resize = () => {
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			canvas.style.width = w + 'px';
			canvas.style.height = h + 'px';
		};
		resize();

		interface Pulse {
			cx: number;
			cy: number;
			age: number;
			life: number;
		}
		const pulses: Pulse[] = [];
		let lastSpawn = 0;

		const spawn = () => {
			const cols = Math.ceil(w / CELL);
			const rows = Math.ceil(h / CELL);
			pulses.push({
				cx: Math.floor(Math.random() * cols) * CELL,
				cy: Math.floor(Math.random() * rows) * CELL,
				age: 0,
				life: 1800 + Math.random() * 2800
			});
		};

		let raf = 0;
		let last = performance.now();
		const draw = (t: number) => {
			const dt = t - last;
			last = t;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.fillStyle = '#0a0a0a';
			ctx.fillRect(0, 0, w, h);

			if (t - lastSpawn > 350) {
				spawn();
				lastSpawn = t;
			}

			for (let i = pulses.length - 1; i >= 0; i--) {
				const p = pulses[i];
				p.age += dt;
				if (p.age > p.life) {
					pulses.splice(i, 1);
					continue;
				}
				const phase = p.age / p.life;
				const intensity = Math.sin(phase * Math.PI);
				ctx.fillStyle = `rgba(255,255,255,${intensity * 0.07})`;
				ctx.fillRect(p.cx, p.cy, CELL, CELL);
			}

			ctx.strokeStyle = 'rgba(255,255,255,0.05)';
			ctx.lineWidth = 1;
			ctx.beginPath();
			for (let x = 0; x <= w; x += CELL) {
				ctx.moveTo(x + 0.5, 0);
				ctx.lineTo(x + 0.5, h);
			}
			for (let y = 0; y <= h; y += CELL) {
				ctx.moveTo(0, y + 0.5);
				ctx.lineTo(w, y + 0.5);
			}
			ctx.stroke();

			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		window.addEventListener('resize', resize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none fixed inset-0 -z-10 h-screen w-full"
	aria-hidden="true"
></canvas>

<div
	class="pointer-events-none fixed inset-0 -z-10 opacity-[0.15] mix-blend-overlay"
	aria-hidden="true"
	style="background-image: url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>&quot;);"
></div>
