<script>
	import Logo from '$lib/icons/Logo.svelte';
	import Link from './Link.svelte';
	import { onMount } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isScrolled = !entry.isIntersecting;
			},
			{
				root: null,
				threshold: 0
			}
		);

		const target = document.getElementById('scroll-sentinel');
		if (target) observer.observe(target);

		return () => {
			if (target) observer.unobserve(target);
		};
	});
</script>

<div id="scroll-sentinel" class="h-px"></div>

<header class="fixed top-0 left-0 z-50 flex w-full items-center justify-center">
	<nav
		class="flex w-full max-w-7xl items-center justify-between border-x border-b border-gray-300 px-8 py-6 transition-all duration-300"
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

<style lang="postcss">
	@reference "tailwindcss";

	nav {
		@apply transition-all duration-300;
		height: 7rem;
	}

	.scrolled {
		height: 4rem;
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
	}

	.scrolled::before {
		content: '';
		@apply absolute inset-0 -z-[1] bg-gray-950/40;
	}
</style>
