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

		const COUNT = 70;
		const LINK = 160;
		const particles = Array.from({ length: COUNT }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			vx: (Math.random() - 0.5) * 0.25,
			vy: (Math.random() - 0.5) * 0.25,
			r: Math.random() * 1.2 + 0.4
		}));

		let raf = 0;
		const draw = () => {
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.fillStyle = '#05060a';
			ctx.fillRect(0, 0, w, h);

			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > w) p.vx *= -1;
				if (p.y < 0 || p.y > h) p.vy *= -1;
			}

			ctx.lineWidth = 0.5;
			for (let i = 0; i < COUNT; i++) {
				const a = particles[i];
				for (let j = i + 1; j < COUNT; j++) {
					const b = particles[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < LINK * LINK) {
						const alpha = (1 - Math.sqrt(d2) / LINK) * 0.18;
						ctx.strokeStyle = `rgba(180,200,255,${alpha})`;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}

			for (const p of particles) {
				ctx.beginPath();
				ctx.fillStyle = 'rgba(200,215,255,0.55)';
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fill();
			}

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

<div class="pointer-events-none fixed inset-0 -z-10 opacity-[0.05]" aria-hidden="true"></div>

<div
	class="pointer-events-none fixed inset-0 -z-10 opacity-[0.15] mix-blend-overlay"
	aria-hidden="true"
	style="background-image: url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>&quot;);"
></div>
