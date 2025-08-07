<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import ArrowUp from '$lib/icons/ArrowUp.svelte';

	const {
		label = '',
		btn = false,
		showArrow = false,
		class: class_name = '',
		arrowClass = '',
		onclick = null
	} = $props();
</script>

<button
	type="button"
	class:btn
	class="group {showArrow ? 'pr-3 pl-4' : 'px-4'} {class_name}"
	{onclick}
>
	<span class="link-label relative inline-block">
		{label}
		<span class="link-underline group-hover:w-full"></span>
	</span>

	<div class="flex items-center justify-center">
		{#if showArrow}
			<span><ArrowUp class="size-4 stroke-white {arrowClass}" /></span>
		{/if}
	</div>
</button>

<style lang="postcss">
	@reference "tailwindcss";

	button {
		@apply flex items-center justify-center gap-2 border border-transparent py-2 transition-colors;
	}

	.btn {
		@apply border-white/30 px-6 py-4 hover:border-white/75;
	}

	.link-label {
		@apply relative;
	}

	.link-underline {
		@apply absolute -bottom-[0.2em] left-0 h-[1px] w-0 bg-gray-400 transition-all duration-300;
	}

	button:not(.btn):hover .link-underline {
		@apply w-full;
	}
</style>
