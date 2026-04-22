<script lang="ts">
	import Aurora from '$lib/components/Aurora.svelte';
	import Header from '$lib/components/Header.svelte';
	import Pointer from '$lib/components/Pointer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Aurora />
<Pointer />
<Header />

{@render children()}
