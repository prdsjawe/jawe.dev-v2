<script lang="ts">
	let { children } = $props();
</script>

<section class="relative flex w-full justify-center">
	<div class="!items-start !justify-start border-t border-gray-300 px-16 py-16 text-left">
		<h3 class="font-rekind text-4xl select-none">{@render children()}</h3>
	</div>
</section>
