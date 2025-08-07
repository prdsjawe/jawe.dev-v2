<script lang="ts">
	let { children } = $props();
</script>

<section class="relative flex w-full justify-center">
	<div
		class="flex items-center border-t border-gray-300 p-8 text-center md:!items-start md:px-16 md:py-16 md:text-left"
	>
		<h3 class="font-rekind text-2xl select-none md:text-4xl">{@render children()}</h3>
	</div>
</section>
