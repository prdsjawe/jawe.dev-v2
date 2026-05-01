<script lang="ts">
	import '$lib/styles/sprix.css';

	let { children } = $props();

	$effect(() => {
		document.body.classList.add('sprix-light');
		return () => document.body.classList.remove('sprix-light');
	});
</script>

<div class="sprix-shell">
	{@render children()}
</div>
