<script>
	import Logo from '$lib/icons/Logo.svelte';
	import Link from './Link.svelte';
	import { onMount } from 'svelte';
	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="sticky top-0 left-0 z-20 flex w-full items-center justify-center transition-all duration-300"
>
	<nav
		class="flex h-28 w-full max-w-7xl items-center justify-between border-x border-b border-gray-300 px-8 py-6 transition-all duration-300"
		class:scrolled={isScrolled}
	>
		<div class="flex items-center">
			<Logo class="!size-12" />
		</div>
		<div class="flex items-center">
			<ul class="flex list-none items-center gap-6 text-white">
				<li><Link href="/" label="Home" /></li>
				<li><Link href="/about" label="About" /></li>
				<li><Link href="/projects" label="Projects" /></li>
				<li><Link href="/services" label="Services" /></li>
			</ul>
		</div>
	</nav>
</header>

<style>
	.scrolled {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		position: relative;
	}

	.scrolled::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.4); /* Same as the nav bg */
		z-index: -1;
	}
</style>
