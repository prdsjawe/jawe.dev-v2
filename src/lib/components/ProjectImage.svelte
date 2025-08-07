<script lang="ts">
	import createTippy from '$lib/functions/tippy';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { followCursor } from 'tippy.js';

	let imageRef: HTMLImageElement;
	let contentRef: HTMLElement;
	let { image = '', title = '', href = '' } = $props();

	let tippyInstance: ReturnType<typeof createTippy> | null = null;

	$effect(() => {
		if (tippyInstance) {
			tippyInstance.destroy();
		}

		if (imageRef && contentRef) {
			tippyInstance = createTippy(imageRef, contentRef, {
				placement: 'bottom-start',
				trigger: 'mouseenter',
				followCursor: true,
				plugins: [followCursor],
				onShow(instance) {
					const slidingEl = contentRef.firstElementChild as HTMLElement;
					slidingEl.style.transition = 'transform 0.1s ease-in';
					slidingEl.style.transform = 'translateX(-101%)';
					setTimeout(() => {
						requestAnimationFrame(() => {
							slidingEl.style.transform = 'translateX(0)';
						});
					}, 500);
				},
				onHide(instance) {
					const slidingEl = contentRef.firstElementChild as HTMLElement;
					slidingEl.style.transition = 'transform 0.2s ease-in';
					slidingEl.style.transform = 'translateX(-100%)';
				}
			});
		}

		return () => {
			tippyInstance?.destroy();
			tippyInstance = null;
		};
	});
</script>

<a {href}>
	<img
		src={image}
		alt={title}
		bind:this={imageRef}
		class="w-full transform cursor-pointer shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
	/>

	<div bind:this={contentRef} class="relative w-max overflow-hidden">
		<div
			class="flex items-center gap-1 bg-gray-950 px-4 py-1.5 whitespace-nowrap"
			style="transform: translateX(-100%)"
		>
			<span class="text-xs font-semibold uppercase">View this Project</span>
			<ArrowRight class="size-3 fill-white" />
		</div>
	</div>
</a>
