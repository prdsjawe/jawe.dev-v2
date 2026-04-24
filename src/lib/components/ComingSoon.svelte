<script lang="ts">
	import { strokeCycle } from '$lib/functions/strokeCycle';
	import Link from './Link.svelte';

	let {
		title,
		index = '01',
		tags = [] as string[],
		liveUrl = '' as string,
		year = '2026'
	} = $props();
</script>

<section
	class="relative flex min-h-[100svh] w-full flex-col justify-between pt-24 pb-10 md:pt-40 md:pb-14"
>
	<!-- TOP INDEX STRIP -->
	<div
		class="frame flex w-full items-center justify-between font-mono text-[10px] text-white/50 uppercase md:text-[11px]"
	>
		<span>No. {index} / {title}</span>
		<span class="hidden md:inline">Case study</span>
		<span class="flex items-center gap-2">
			<span class="relative flex size-1.5">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"
				></span>
				<span class="relative inline-flex size-1.5 rounded-full bg-yellow-400"></span>
			</span>
			In progress
		</span>
	</div>

	<!-- MAIN STATEMENT -->
	<div class="frame relative mt-14 grid grid-cols-12 gap-y-10 md:mt-24 md:gap-10">
		<!-- Left: kinetic statement -->
		<div class="col-span-12 min-w-0 md:col-span-8">
			<p class="animate-reveal-up font-mono text-[11px] text-white/60 uppercase md:text-xs">
				{title}
			</p>

			<h1
				class="font-rekind mt-5 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] font-normal tracking-[-0.01em] select-none md:mt-6"
			>
				<span class="animate-reveal-up block">coming</span>
				<span
					use:strokeCycle
					class="animate-reveal-up text-outline-anim block italic"
					style="animation-delay: 0.08s;"
				>
					soon
				</span>
			</h1>

			<p
				class="animate-reveal-up mt-8 max-w-xl text-base leading-relaxed text-white/75 md:mt-10 md:text-lg"
				style="animation-delay: 0.28s;"
			>
				The case study for this project is being written. {liveUrl
					? 'Visit the live site below, or'
					: 'In the meantime,'} explore the rest of the selected work.
			</p>

			<div
				class="animate-reveal-up mt-8 flex flex-wrap items-center gap-3 md:mt-10"
				style="animation-delay: 0.36s;"
			>
				{#if liveUrl}
					<Link href={liveUrl} label="Visit live site" btn showArrow external />
					<Link href="/projects" label="Other projects" />
				{:else}
					<Link href="/projects" label="Other projects" btn showArrow />
				{/if}
			</div>
		</div>

		<!-- Right: case study meta card -->
		<aside
			class="animate-reveal-up col-span-12 min-w-0 md:col-span-4"
			style="animation-delay: 0.5s;"
		>
			<div class="relative border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
				<div
					class="flex items-center justify-between gap-2 font-mono text-[10px] text-white/60 uppercase"
				>
					<span>Case / {index}</span>
					<span class="animate-blink-soft">Drafting</span>
				</div>

				<div class="mt-6 space-y-4">
					<div
						class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed border-white/10 pb-2"
					>
						<span class="font-mono text-[10px] text-white/45 uppercase">Project</span>
						<span class="text-right text-sm text-white/85">{title}</span>
					</div>
					<div
						class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed border-white/10 pb-2"
					>
						<span class="font-mono text-[10px] text-white/45 uppercase">Status</span>
						<span class="text-right text-sm text-white/85">
							{liveUrl ? 'Live · case study pending' : 'In development'}
						</span>
					</div>
					<div
						class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed border-white/10 pb-2"
					>
						<span class="font-mono text-[10px] text-white/45 uppercase">Year</span>
						<span class="text-right text-sm text-white/85">{year}</span>
					</div>

					{#if tags.length}
						<div class="flex flex-col gap-2 pt-1">
							<span class="font-mono text-[10px] text-white/45 uppercase">Tags</span>
							<div class="flex flex-wrap gap-1.5">
								{#each tags as tag}
									<span
										class="border border-white/15 px-2 py-0.5 font-mono text-[10px] tracking-widest text-white/70 uppercase"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- corner marks -->
				<div
					class="pointer-events-none absolute top-1.5 left-1.5 size-2.5 border-t border-l border-pink-500"
				></div>
				<div
					class="pointer-events-none absolute top-1.5 right-1.5 size-2.5 border-t border-r border-cyan-400"
				></div>
				<div
					class="pointer-events-none absolute bottom-1.5 left-1.5 size-2.5 border-b border-l border-yellow-400"
				></div>
				<div
					class="pointer-events-none absolute right-1.5 bottom-1.5 size-2.5 border-r border-b border-pink-500"
				></div>
			</div>
		</aside>
	</div>

	<!-- BOTTOM MARQUEE -->
	<div class="mt-14 w-full md:mt-28">
		<div class="divider-line"></div>
		<div
			class="relative flex overflow-hidden py-4"
			style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
		>
			<div class="flex gap-12 whitespace-nowrap">
				{#each Array(6).fill(0) as _, i (i)}
					<div
						class="animate-marquee-left flex shrink-0 items-center gap-12 font-mono text-xs text-white/50 uppercase [--gap:3rem]"
						style="--duration: 60s;"
					>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case"
							>case study</span
						>
						<span class="text-pink-500">◆</span>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case">in</span>
						<span class="text-cyan-400">◆</span>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case"
							>development</span
						>
						<span class="text-yellow-400">◆</span>
						<span class="font-rekind text-lg tracking-normal text-white/70 normal-case"
							>stay tuned</span
						>
						<span class="text-fuchsia-500">◆</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="divider-line"></div>
	</div>
</section>
