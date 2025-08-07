<script>
	import Link from './Link.svelte';

	const images = [
		'vue.png',
		'react.png',
		'svelte.png',
		'wp.png',
		'php.png',
		'figma.png',
		'ts.png',
		'tailwindcss.png',
		'mysql.png',
		'ae.png',
		'photoshop.png',
		'vite.png',
		'threejs.png'
	];
</script>

<section class="relative flex w-full justify-center">
	<div class="items-start border-t border-gray-300">
		<div
			class="group z-20 flex w-full flex-row gap-12 overflow-hidden"
			style="mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 5%, rgba(0, 0, 0, 1.0) 95%, transparent 100%);
	-webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 5%, rgba(0, 0, 0, 1.0) 95%, transparent 100%);"
		>
			{#each Array(6).fill(0) as _, i (i)}
				<div class="animate-marquee-left flex shrink-0 flex-row justify-around gap-12 [--gap:3rem]">
					{#each images as img}
						<div class="flex aspect-square items-center justify-center overflow-hidden p-6">
							<img
								src="/tech/{img}"
								alt=""
								class="size-[40px] object-contain saturate-0 transition hover:saturate-100"
							/>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
