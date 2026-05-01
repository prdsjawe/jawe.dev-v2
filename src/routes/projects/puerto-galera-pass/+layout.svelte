<script lang="ts">
	import '$lib/styles/pgpass.css';

	let { children } = $props();

	$effect(() => {
		document.body.classList.add('pgpass-light');
		return () => document.body.classList.remove('pgpass-light');
	});
</script>

<div class="pgpass-shell">
	{@render children()}
</div>
