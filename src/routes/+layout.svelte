<script lang="ts">
	import { Background } from '$lib/backgrounds';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Pointer from '$lib/components/Pointer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Background />
<Pointer />
<Header />
<PageTransition />

{@render children()}
