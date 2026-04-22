<script lang="ts">
	import { FeaturedProjects } from '$lib/constants/featured';
	import { reveal } from '$lib/functions/reveal';
	import Link from './Link.svelte';
	import ProjectImage from './ProjectImage.svelte';
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
	<div class="frame grid grid-cols-12 gap-10 pt-12 md:gap-14 md:pt-20">
		<div class="col-span-12 md:col-span-7">
			<h2
				use:reveal={{ delay: 80 }}
				class="font-rekind text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.98] font-normal tracking-[-0.01em] select-none"
			>
				<span class="block">passion</span>
				<span class="block text-outline italic">projects</span>
			</h2>
			<p
				use:reveal={{ delay: 160 }}
				class="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
			>
				A curated selection of personal work spanning marketing sites, SaaS dashboards, and mobile
				interfaces. Each one a playground for craft.
			</p>
		</div>
		<div class="col-span-12 flex items-end md:col-span-5 md:justify-end">
			<div use:reveal={{ delay: 240 }} class="w-full max-w-[300px]">
				<Link href="/projects" label="All projects" btn showArrow class="w-full" />
			</div>
		</div>
	</div>

	<!-- Grid -->
	<div class="frame mt-16 md:mt-24">
		<ul class="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
			{#each FeaturedProjects as project, i}
				{@const idx = (i + 1).toString().padStart(2, '0')}
				<li
					use:reveal={{ delay: 80 + i * 70 }}
					class="group relative flex flex-col bg-[var(--color-ink)]"
				>
					<a href={project.link} class="flex flex-1 flex-col">
						<!-- Meta row -->
						<div class="flex items-center gap-3 border-b border-white/10 px-5 py-4 font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
							<span>№ {idx}</span>
							<span class="h-px flex-1 bg-white/10"></span>
							<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
						</div>

						<!-- Image panel with hover effects -->
						<div class="relative overflow-hidden">
							<!-- ambient hover glow -->
							<div
								class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style="background: radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 70%);"
							></div>
							<div class="relative h-[220px] w-full p-6 md:h-[340px] md:p-10">
								{#if !!project.image}
									<ProjectImage image={project.image} title={project.title} href={project.link} />
								{/if}
							</div>
						</div>

						<!-- Title + tags -->
						<div class="flex flex-col gap-3 border-t border-white/10 px-5 py-5">
							<div class="flex items-baseline justify-between gap-3">
								<h3 class="font-rekind text-xl leading-none tracking-wide select-none md:text-2xl">
									{project.title}
								</h3>
								<span class="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
									view
								</span>
							</div>
							<div class="flex flex-wrap gap-1.5">
								{#each project.tags as tag}
									<span
										class="border border-white/15 px-2 py-0.5 font-mono text-[10px] tracking-widest text-white/70 uppercase transition-colors group-hover:border-white/35"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
