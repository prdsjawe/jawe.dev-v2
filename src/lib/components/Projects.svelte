<script lang="ts">
	import { FeaturedProjects } from '$lib/constants/featured';
	import { reveal } from '$lib/functions/reveal';
	import { strokeCycle } from '$lib/functions/strokeCycle';
	import Link from './Link.svelte';
	import ProjectImage from './ProjectImage.svelte';

	let { showAllLink = true }: { showAllLink?: boolean } = $props();
</script>

<section class="relative w-full py-20 md:py-32">
	<div
		use:reveal
		class="frame flex items-center justify-between pb-8 font-mono text-[10px] tracking-[0.35em] text-white/45 uppercase md:text-[11px]"
	>
		<span>[ 04 ] — Selected work</span>
		<span class="hidden md:inline">Chapter three</span>
	</div>

	<div class="divider-line"></div>

	<!-- Intro -->
	<div class="frame grid grid-cols-12 gap-y-10 pt-12 md:gap-14 md:pt-20">
		<div class="col-span-12 min-w-0 md:col-span-7">
			<h2
				use:reveal={{ delay: 80 }}
				class="font-rekind text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.98] font-normal tracking-[-0.01em] select-none"
			>
				<span class="block">passion</span>
				<span use:strokeCycle={{ delay: 750 }} class="block text-outline-anim italic">projects</span>
			</h2>
			<p
				use:reveal={{ delay: 160 }}
				class="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
			>
				A curated selection of personal work spanning marketing sites, SaaS dashboards, and mobile
				interfaces. Each one a playground for craft.
			</p>
		</div>
		{#if showAllLink}
			<div class="col-span-12 flex min-w-0 items-end md:col-span-5 md:justify-end">
				<div use:reveal={{ delay: 240 }} class="w-full max-w-[300px]">
					<Link href="/projects" label="All projects" btn showArrow class="w-full" />
				</div>
			</div>
		{/if}
	</div>

	<!-- Grid -->
	<div class="frame mt-16 md:mt-24">
		<ul class="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
			{#each FeaturedProjects.filter((p) => !p.hidden) as project, i}
				{@const idx = (i + 1).toString().padStart(2, '0')}
				<li
					use:reveal={{ delay: 80 + i * 70 }}
					class="group relative flex flex-col bg-neutral-950/40"
				>
					<!-- Meta row -->
					<div class="flex items-center gap-3 border-b border-white/10 px-5 py-4 font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
						<span class="text-yellow-400">№ {idx}</span>
						<span class="h-px flex-1 bg-white/10"></span>
						<span class="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
					</div>

					<!-- Image panel with hover effects -->
					<a href={project.link} class="relative overflow-hidden">
						<!-- ambient hover glow -->
						<div
							class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--color-yellow-400)_60%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
						<div class="relative h-[250px] w-full p-6 md:h-[415px] md:p-10">
							{#if !!project.image}
								<ProjectImage image={project.image} title={project.title} />
							{/if}
						</div>
					</a>

					<!-- Title + tags + links -->
					<div class="flex flex-1 flex-col gap-3 border-t border-white/10 px-5 py-5">
						<h3 class="font-rekind text-xl leading-none tracking-wide select-none md:text-2xl">
							{project.title}
						</h3>
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag}
								<span
									class="border border-white/15 px-2 py-0.5 font-mono text-[10px] tracking-widest text-white/70 uppercase transition-colors group-hover:border-white/35"
								>
									{tag}
								</span>
							{/each}
						</div>
						{#if project.website}
							<div class="mt-auto pt-3">
								<a
									href="https://{project.website}"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 border border-cyan-400/40 bg-cyan-400/5 px-4 py-2 font-mono text-xs tracking-[0.2em] text-cyan-300 uppercase transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/15 hover:text-cyan-200 hover:shadow-[0_0_16px_-2px_theme(colors.cyan.400/40%)]"
								>
									{project.website}
									<span class="text-base leading-none">↗</span>
								</a>
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
