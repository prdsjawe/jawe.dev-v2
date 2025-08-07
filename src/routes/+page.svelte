<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Link from '$lib/components/Link.svelte';
	import Pointer from '$lib/components/Pointer.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import TechStacks from '$lib/components/TechStacks.svelte';

	// import * as THREE from 'three';
</script>

<svelte:head>
	<title>JAWE.dev | Portfolio by Jerwin Ordillano</title>
</svelte:head>

<Pointer />
<Header />

<main>
	<Hero />
	<AboutMe />
	<TechStacks />
	<Projects />
	<Footer />
</main>
