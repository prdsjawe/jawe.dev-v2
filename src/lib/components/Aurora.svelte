<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d', { alpha: false })!;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let w = 0;
		let h = 0;

		const resize = () => {
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			canvas.style.width = w + 'px';
			canvas.style.height = h + 'px';
		};
		resize();

		// organic drifting color blobs composited in screen-blend (techno-funk palette)
		const blobs = [
			{ x: 0.18, y: 0.25, dx: 0.14, dy: 0.12, s: 0.00006, p: 0.0, c: '236, 72, 153' }, // pink-500
			{ x: 0.82, y: 0.35, dx: 0.1, dy: 0.18, s: 0.00009, p: 1.7, c: '34, 211, 238' }, // cyan-400
			{ x: 0.55, y: 0.82, dx: 0.2, dy: 0.1, s: 0.00008, p: 3.2, c: '250, 204, 21' }, // yellow-400
			{ x: 0.1, y: 0.78, dx: 0.12, dy: 0.14, s: 0.00011, p: 2.3, c: '217, 70, 239' } // fuchsia-500
		];

		let raf = 0;
		const start = performance.now();

		const draw = () => {
			const t = performance.now() - start;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			// deep ink base — matches body bg (neutral-950)
			ctx.fillStyle = '#0a0a0a';
			ctx.fillRect(0, 0, w, h);

			ctx.globalCompositeOperation = 'screen';
			const R = Math.max(w, h) * 0.55;
			for (const b of blobs) {
				const cx = (b.x + b.dx * Math.sin(t * b.s + b.p)) * w;
				const cy = (b.y + b.dy * Math.cos(t * b.s * 0.82 + b.p)) * h;
				const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
				g.addColorStop(0, `rgba(${b.c}, 0.28)`);
				g.addColorStop(0.5, `rgba(${b.c}, 0.06)`);
				g.addColorStop(1, `rgba(${b.c}, 0)`);
				ctx.fillStyle = g;
				ctx.fillRect(0, 0, w, h);
			}
			ctx.globalCompositeOperation = 'source-over';

			// soft vignette
			const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.8);
			vg.addColorStop(0, 'rgba(0,0,0,0)');
			vg.addColorStop(1, 'rgba(0,0,0,0.55)');
			ctx.fillStyle = vg;
			ctx.fillRect(0, 0, w, h);

			raf = requestAnimationFrame(draw);
		};

		raf = requestAnimationFrame(draw);
		const onResize = () => resize();
		window.addEventListener('resize', onResize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none fixed inset-0 -z-10 h-screen w-full"
	aria-hidden="true"
></canvas>

<!-- grid overlay -->
<div
	class="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.06]"
	aria-hidden="true"
></div>

<!-- grain overlay -->
<div
	class="pointer-events-none fixed inset-0 -z-10 opacity-[0.15] mix-blend-overlay"
	aria-hidden="true"
	style="background-image: url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>&quot;);"
></div>
