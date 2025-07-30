<script>
	import { FeaturedProjects } from '$lib/constants/featured';
	import Link from './Link.svelte';
	import ProjectImage from './ProjectImage.svelte';
	import SectionTitle from './SectionTitle.svelte';
</script>

<SectionTitle>Projects</SectionTitle>

<section class="relative flex w-full justify-center">
	<div class="items-start gap-24 border-t border-gray-300 px-16 py-16">
		<div class="flex w-full flex-col gap-12">
			<p class="text-xl leading-relaxed">
				While I can’t always share my professional work, I’ve poured my skills into several passion
				projects that reflect what I love doing most. From beautifully crafted marketing sites to
				data-driven SaaS platforms (my personal favorite) and mobile app interfaces, each project
				showcases my range as a web designer and developer.
			</p>

			<div class="w-[300px]">
				<Link href="/about" label="Check out all my projects" btn showArrow class="w-full" />
			</div>
		</div>
		<div class="grid w-full grid-cols-2 border border-gray-500">
			{#each FeaturedProjects as project, i}
				{@const index = i + 1}
				{@const is_last_row = index > FeaturedProjects.length - 2}
				<div
					class="flex flex-col border-gray-500"
					class:border-r={index % 2 !== 0}
					class:border-b={!is_last_row}
				>
					<div class="flex flex-col gap-2 border-b border-gray-500 p-5">
						<p class="font-rekind text-2xl select-none">{project.title}</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								{#each project.tags as tag}
									<div
										class="border border-gray-200 bg-gray-100 px-3 py-0.5 text-xs font-semibold tracking-wider text-black uppercase select-none"
									>
										{tag}
									</div>
								{/each}
							</div>
							{#if project.liveSite}
								<Link
									href={project.liveSite}
									label="View Live Site"
									class="!gap-1 text-xs"
									showArrow
									arrowClass="!size-3"
								/>
							{/if}
						</div>
					</div>
					<div>
						<div class="h-[350px] w-full overflow-hidden bg-black/40 p-8">
							{#if !!project.image}
								<ProjectImage image={project.image} title={project.title} />
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
