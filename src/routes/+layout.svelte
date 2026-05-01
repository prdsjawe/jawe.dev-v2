<script lang="ts">
	import { page } from '$app/state';
	import { Background } from '$lib/backgrounds';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Pointer from '$lib/components/Pointer.svelte';
	import '../app.css';

	let { children } = $props();

	const isProjectRoute = $derived.by(() => {
		const segments = page.url.pathname.split('/').filter(Boolean);
		return segments[0] === 'projects' && segments.length > 1;
	});
</script>

{#if !isProjectRoute}
	<Background />
{/if}
<Pointer />
<Header />
<PageTransition />

{@render children()}
