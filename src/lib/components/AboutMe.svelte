<script lang="ts">
	import Me from '$lib/icons/Me.svelte';
	import Link from './Link.svelte';
	import { reveal } from '$lib/functions/reveal';

	let portraitRef: HTMLElement;
	let hover = $state(false);
	let tilt = $state({ x: 0, y: 0 });

	function onMove(e: PointerEvent) {
		if (!portraitRef) return;
		const r = portraitRef.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - 0.5;
		const py = (e.clientY - r.top) / r.height - 0.5;
		tilt = { x: px * 8, y: py * -8 };
	}
</script>

<section class="relative w-full py-16 md:py-32">
	<!-- top label row -->
	<div
		use:reveal
		class="frame flex items-center justify-between pb-6 font-mono text-[10px] text-white/50 uppercase md:pb-8 md:text-[11px]"
	>
		<span>[ 02 ] — About</span>
		<span class="hidden md:inline">Chapter one</span>
	</div>

	<div class="divider-line"></div>

	<div class="frame grid grid-cols-12 gap-10 pt-10 md:gap-14 md:pt-20">
		<!-- Left: text content -->
		<div class="order-2 col-span-12 md:order-1 md:col-span-7">
			<h2
				use:reveal={{ delay: 80 }}
				class="font-rekind text-[clamp(2rem,6vw,4.5rem)] leading-[0.98] font-normal tracking-[-0.01em] select-none"
			>
				<span class="block">six years</span>
				<span class="text-outline block italic">of design</span>
				<span class="block">and code</span>
			</h2>

			<div
				use:reveal={{ delay: 160 }}
				class="mt-8 grid grid-cols-1 gap-5 text-base leading-relaxed text-white/75 md:mt-10 md:gap-6 md:text-lg"
			>
				<p>
					I’m <span class="text-white">Jerwin Ordillano</span> — a Computer Engineer who turned a
					love for design and clean code into a career building websites with
					<span class="text-white">Svelte</span>, <span class="text-white">TypeScript</span>, and
					<span class="text-white">WordPress</span>.
				</p>
				<p>
					I love bringing ideas to life with thoughtful design and code, making things that are
					fast, modern, and easy to use. Outside of work, I’m probably on a motorcycle road trip or
					relaxing with some crochet.
				</p>
			</div>

			<!-- Fact rows -->
			<dl
				use:reveal={{ delay: 240 }}
				class="mt-10 divide-y divide-white/10 border-y border-white/10 md:mt-12"
			>
				{#each [{ k: 'Based in', v: 'Philippines' }, { k: 'Discipline', v: 'Web design & frontend engineering' }, { k: 'Tools of choice', v: 'Svelte, TypeScript, Figma, Tailwind' }, { k: 'Off the clock', v: 'Motorcycle rides · Crochet · Coffee' }] as f}
					<div class="grid grid-cols-12 gap-x-4 gap-y-1 py-4">
						<dt
							class="col-span-12 font-mono text-[10px] text-white/50 uppercase md:col-span-4 md:text-[11px]"
						>
							{f.k}
						</dt>
						<dd class="col-span-12 text-sm text-white/85 md:col-span-8 md:text-base">
							{f.v}
						</dd>
					</div>
				{/each}
			</dl>

			<div use:reveal={{ delay: 320 }} class="mt-8 w-full max-w-[300px] md:mt-10">
				<Link href="/about" label="Read more" btn showArrow class="w-full" />
			</div>
		</div>

		<!-- Right: framed portrait -->
		<div class="order-1 col-span-12 md:order-2 md:col-span-5">
			<div
				use:reveal={{ delay: 120 }}
				bind:this={portraitRef}
				onpointermove={onMove}
				onpointerenter={() => (hover = true)}
				onpointerleave={() => {
					hover = false;
					tilt = { x: 0, y: 0 };
				}}
				role="img"
				aria-label="Portrait illustration of Jerwin"
				class="relative mx-auto aspect-[4/5] w-full max-w-[420px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent md:max-w-none"
				style="perspective: 1200px;"
			>
				<!-- backdrop glow -->
				<div
					class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25),transparent_55%)] transition-opacity duration-700"
					class:opacity-30={!hover}
					class:opacity-100={hover}
				></div>

				<!-- slow-spinning dashed ring -->
				<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div
						class="animate-spin-slow size-[140%] rounded-full border border-dashed border-white/10"
					></div>
				</div>

				<!-- corner marks -->
				<div
					class="pointer-events-none absolute top-3 left-3 size-3 border-t border-l border-white/60"
				></div>
				<div
					class="pointer-events-none absolute top-3 right-3 size-3 border-t border-r border-white/60"
				></div>
				<div
					class="pointer-events-none absolute bottom-3 left-3 size-3 border-b border-l border-white/60"
				></div>
				<div
					class="pointer-events-none absolute right-3 bottom-3 size-3 border-r border-b border-white/60"
				></div>

				<!-- meta labels -->
				<div
					class="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-4 pt-5 font-mono text-[10px] text-white/60 uppercase"
				>
					<span>subject / 001</span>
					<span>4 : 5</span>
				</div>
				<div
					class="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-4 pb-4 font-mono text-[10px] text-white/60 uppercase"
				>
					<span>the maker</span>
					<span>EST 2019</span>
				</div>

				<!-- the Me svg -->
				<div
					class="absolute inset-0 flex items-end justify-center transition-transform duration-300 ease-out"
					style="transform: rotateY({tilt.x}deg) rotateX({tilt.y}deg);"
				>
					<Me
						class=" w-auto transition-all duration-500 {hover
							? 'fill-fuchsia-400 drop-shadow-[0_30px_60px_rgba(139,92,246,0.35)]'
							: 'fill-fuchsia-200'}"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
