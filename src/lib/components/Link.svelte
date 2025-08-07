<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	let {
		href = '/',
		label = '',
		btn = false,
		showArrow = false,
		class: className = '',
		arrowClass = ''
	} = $props();
</script>

<a {href} class:btn class="group {showArrow ? 'pr-3 pl-4' : 'px-4'} {className}">
	<span class="link-label relative inline-block">
		{label}
		<span class="link-underline group-hover:w-full"></span>
	</span>
	{#if showArrow}
		<span><ArrowRight class="size-4 fill-white {arrowClass}" /></span>
	{/if}
</a>

<style lang="postcss">
	@reference "tailwindcss";

	a {
		@apply flex items-center justify-center gap-2 border border-transparent py-2;
		@apply transition-colors;

		&.btn {
			@apply border-white/30 px-6 py-4 hover:border-white/75;
		}
	}

	.link-label {
		@apply relative;
	}

	.link-underline {
		@apply absolute -bottom-[0.2em] left-0 h-[1px] w-0 bg-gray-400 transition-all duration-300;
	}

	a:not(.btn):hover .link-underline {
		@apply w-full;
	}
</style>
