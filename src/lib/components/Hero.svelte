<script lang="ts">
	import Link from './Link.svelte';
</script>

<section class="relative flex min-h-[100svh] w-full flex-col justify-between pt-24 pb-10 md:pt-40 md:pb-14">
	<!-- TOP INDEX STRIP -->
	<div
		class="frame flex w-full items-center justify-between font-mono text-[10px] text-white/50 uppercase md:text-[11px]"
	>
		<span>No. 02 / Index</span>
		<span class="hidden md:inline">Volume 2026</span>
		<span>Portfolio</span>
	</div>

	<!-- MAIN STATEMENT -->
	<div class="frame relative mt-14 grid grid-cols-12 gap-y-10 md:mt-24 md:gap-10">
		<!-- Left: kinetic statement -->
		<div class="col-span-12 min-w-0 md:col-span-8">
			<p class="animate-reveal-up font-mono text-[11px] text-white/60 uppercase md:text-xs">
				Jerwin Ordillano
			</p>

			<h1
				class="font-rekind mt-5 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] font-normal tracking-[-0.01em] select-none md:mt-6"
			>
				<span class="animate-reveal-up block">design</span>
				<span
					class="animate-reveal-up text-outline block text-[0.42em] leading-none italic"
					style="animation-delay: 0.08s;"
				>
					and
				</span>
				<span class="animate-reveal-up block" style="animation-delay: 0.16s;"> code </span>
			</h1>

			<p
				class="animate-reveal-up mt-8 max-w-xl text-base leading-relaxed text-white/75 md:mt-10 md:text-lg"
				style="animation-delay: 0.28s;"
			>
				A designer and developer from the Philippines, combining design and code to create effective
				web experiences.
			</p>

			<div
				class="animate-reveal-up mt-8 flex flex-wrap items-center gap-3 md:mt-10"
				style="animation-delay: 0.36s;"
			>
				<Link href="/projects" label="View selected work" btn showArrow />
				<Link href="mailto:jawe.ordillano@gmail.com" label="Start a project" />
			</div>
		</div>

		<!-- Right: identity card -->
		<aside class="animate-reveal-up col-span-12 min-w-0 md:col-span-4" style="animation-delay: 0.5s;">
			<div class="relative border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
				<div
					class="flex items-center justify-between gap-2 font-mono text-[10px] text-white/60 uppercase"
				>
					<span>ID / 001</span>
					<span class="flex items-center gap-2">
						<span class="relative flex size-1.5">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
							></span>
							<span class="relative inline-flex size-1.5 rounded-full bg-emerald-400"></span>
						</span>
						Online
					</span>
				</div>

				<div class="mt-6 space-y-4">
					{#each [{ k: 'Name', v: 'Jerwin Ordillano' }, { k: 'Role', v: 'Designer · Developer' }, { k: 'Base', v: 'Philippines' }, { k: 'Since', v: '2019' }] as row}
						<div
							class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed border-white/10 pb-2"
						>
							<span class="font-mono text-[10px] text-white/45 uppercase">
								{row.k}
							</span>
							<span class="text-right text-sm text-white/85">{row.v}</span>
						</div>
					{/each}
				</div>

				<!-- corner marks -->
				<div
					class="pointer-events-none absolute top-1.5 left-1.5 size-2.5 border-t border-l border-white/60"
				></div>
				<div
					class="pointer-events-none absolute top-1.5 right-1.5 size-2.5 border-t border-r border-white/60"
				></div>
				<div
					class="pointer-events-none absolute bottom-1.5 left-1.5 size-2.5 border-b border-l border-white/60"
				></div>
				<div
					class="pointer-events-none absolute right-1.5 bottom-1.5 size-2.5 border-r border-b border-white/60"
				></div>
			</div>
		</aside>
	</div>

	<!-- BOTTOM MARQUEE -->
	<div class="mt-14 w-full md:mt-28">
		<div class="divider-line"></div>
		<div
			class="relative flex overflow-hidden py-4"
			style="mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);"
		>
			<div class="flex gap-12 whitespace-nowrap">
				{#each Array(6).fill(0) as _, i (i)}
					<div
						class="animate-marquee-left flex shrink-0 items-center gap-12 font-mono text-xs text-white/50 uppercase [--gap:3rem]"
						style="--duration: 60s;"
					>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case">craft</span>
						<span>◆</span>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case">care</span>
						<span>◆</span>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case">code</span>
						<span>◆</span>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case"
							>clarity</span
						>
						<span>◆</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="divider-line"></div>
	</div>
</section>
