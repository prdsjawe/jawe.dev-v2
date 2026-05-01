<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { reveal } from '$lib/functions/reveal';
	import { strokeCycle } from '$lib/functions/strokeCycle';
</script>

<svelte:head>
	<title>Projects — JAWE.dev</title>
</svelte:head>

<main>
	<!-- HERO -->
	<section class="relative flex min-h-[60svh] w-full flex-col justify-between pt-24 pb-0 md:pt-40">
		<!-- TOP INDEX STRIP -->
		<div
			class="frame flex w-full items-center justify-between font-mono text-[10px] text-white/50 uppercase md:text-[11px]"
		>
			<span>No. 03 / Work</span>
			<span class="hidden md:inline">Volume 2026</span>
			<span>Selected Projects</span>
		</div>

		<!-- HEADLINE -->
		<div class="frame mt-14 md:mt-24">
			<div class="grid grid-cols-12 gap-y-8 md:gap-10">
				<div class="col-span-12 min-w-0 md:col-span-9">
					<p
						use:reveal
						class="font-mono text-[11px] text-white/60 uppercase md:text-xs"
					>
						All projects
					</p>
					<h1
						class="font-rekind mt-5 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] font-normal tracking-[-0.01em] select-none md:mt-6"
					>
						<span use:reveal={{ delay: 40 }} class="block">things</span>
						<span
							use:strokeCycle={{ delay: 600 }}
							use:reveal={{ delay: 100 }}
							class="text-outline-anim block text-[0.42em] leading-none italic"
						>
							i've
						</span>
						<span use:reveal={{ delay: 160 }} class="block">built</span>
					</h1>
				</div>

				<div class="col-span-12 flex min-w-0 flex-col justify-end gap-6 md:col-span-3 md:items-end md:pb-4">
					<p
						use:reveal={{ delay: 200 }}
						class="max-w-xs text-sm leading-relaxed text-white/60 md:text-right"
					>
						A full collection of personal work — marketing sites, SaaS dashboards, mobile
						interfaces, and everything in between.
					</p>

					<!-- stat pills -->
					<div use:reveal={{ delay: 280 }} class="flex flex-wrap gap-3 md:justify-end">
						<div class="border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
							<p class="font-mono text-[10px] text-white/45 uppercase">Projects</p>
							<p class="mt-1 font-mono text-lg text-white">06</p>
						</div>
						<div class="border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
							<p class="font-mono text-[10px] text-white/45 uppercase">Since</p>
							<p class="mt-1 font-mono text-lg text-white">2019</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- BOTTOM RULE -->
		<div class="mt-14 md:mt-20">
			<div class="divider-line"></div>
		</div>
	</section>

	<Projects showAllLink={false} />
	<Footer />
</main>
