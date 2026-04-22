<script lang="ts">
	import { reveal } from '$lib/functions/reveal';

	const groups: { label: string; items: { img: string; name: string }[] }[] = [
		{
			label: 'Frontend',
			items: [
				{ img: 'svelte.png', name: 'Svelte' },
				{ img: 'vue.png', name: 'Vue' },
				{ img: 'react.png', name: 'React' },
				{ img: 'ts.png', name: 'TypeScript' },
				{ img: 'js.png', name: 'JavaScript' },
				{ img: 'tailwindcss.png', name: 'Tailwind' },
				{ img: 'vite.png', name: 'Vite' },
				{ img: 'threejs.png', name: 'Three.js' }
			]
		},
		{
			label: 'Backend & CMS',
			items: [
				{ img: 'wp.png', name: 'WordPress' },
				{ img: 'php.png', name: 'PHP' },
				{ img: 'mysql.png', name: 'MySQL' }
			]
		},
		{
			label: 'Design & Motion',
			items: [
				{ img: 'figma.png', name: 'Figma' },
				{ img: 'photoshop.png', name: 'Photoshop' },
				{ img: 'ae.png', name: 'After Effects' }
			]
		}
	];
</script>

<section class="relative w-full py-16 md:py-32">
	<div
		use:reveal
		class="frame flex items-center justify-between pb-6 font-mono text-[10px] text-white/50 uppercase md:pb-8 md:text-[11px]"
	>
		<span>[ 03 ] — Toolkit</span>
		<span class="hidden md:inline">Chapter two</span>
	</div>

	<div class="divider-line"></div>

	<div class="frame grid grid-cols-12 gap-10 pt-10 md:gap-14 md:pt-20">
		<!-- Left: statement -->
		<div class="col-span-12 md:col-span-4">
			<h2
				use:reveal={{ delay: 80 }}
				class="font-rekind text-[clamp(1.8rem,5vw,3.2rem)] leading-[1] font-normal tracking-[-0.01em] select-none"
			>
				<span class="block">tools</span>
				<span class="block text-outline italic">of the</span>
				<span class="block">trade</span>
			</h2>
			<p
				use:reveal={{ delay: 160 }}
				class="mt-5 max-w-sm text-sm leading-relaxed text-white/70 md:mt-6 md:text-base"
			>
				A curated set of languages, frameworks, and creative tools I reach for to make things that
				feel considered and fast.
			</p>
		</div>

		<!-- Right: groups -->
		<div class="col-span-12 flex flex-col gap-10 md:col-span-8 md:gap-14">
			{#each groups as group, gi}
				<div use:reveal={{ delay: 120 + gi * 80 }}>
					<div class="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
						<span class="font-mono text-[10px] text-white/55 uppercase md:text-[11px]">
							{String(gi + 1).padStart(2, '0')} / {group.label}
						</span>
						<span class="h-px flex-1 bg-white/10"></span>
						<span class="font-mono text-[10px] text-white/35">{group.items.length}</span>
					</div>

					<ul class="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 md:grid-cols-4">
						{#each group.items as item}
							<li
								class="group/item relative flex flex-col items-center justify-center gap-2 bg-[var(--color-ink)] px-3 py-5 text-center transition-colors duration-300 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:text-left"
							>
								<img
									src="/tech/{item.img}"
									alt={item.name}
									class="size-7 shrink-0 object-contain saturate-0 transition duration-300 group-hover/item:saturate-100"
								/>
								<span class="min-w-0 truncate text-xs font-medium text-white/85 transition group-hover/item:text-white sm:text-sm">
									{item.name}
								</span>
								<span class="ml-auto hidden font-mono text-[10px] text-white/25 transition group-hover/item:text-white/60 sm:inline">
									◆
								</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
