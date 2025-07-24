<script lang="ts">
	import Designs from '$lib/components/Designs.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Link from '$lib/components/Link.svelte';
	import Pointer from '$lib/components/Pointer.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Websites from '$lib/components/Websites.svelte';
	import Me from '$lib/icons/Me.svelte';

	import { onMount, onDestroy } from 'svelte';

	// import * as THREE from 'three';

	let vantaRef: HTMLElement;
	let vantaEffect: any;

	onMount(() => {
		let cleanup: (() => void) | undefined;

		(async () => {
			const p5 = (await import('p5')).default;
			const TRUNK = (await import('vanta/dist/vanta.trunk.min')).default;

			vantaEffect = TRUNK({
				el: vantaRef,
				p5,
				mouseControls: false,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 3,
				scaleMobile: 1.0,
				color: 0x2c2c37,
				backgroundColor: 0x000000,
				spacing: 3.5,
				chaos: 2.5
			});

			cleanup = () => {
				if (vantaEffect) vantaEffect.destroy();
			};
		})();

		return () => {
			if (cleanup) cleanup();
		};
	});
</script>

<svelte:head>
	<title>JAWE.dev | Portfolio by Jerwin Ordillano</title>
</svelte:head>

<div class="background gray" bind:this={vantaRef}></div>

<Pointer />
<Header />

<main>
	<section class="relative -mt-28 flex h-screen w-full justify-center">
		<div class="px-16 py-16 pt-28">
			<div class="flex w-full flex-col items-center gap-12">
				<div class="flex flex-col items-center gap-4">
					<p class="text-xl">Hi, I’m Jawe!</p>
					<h1 class="text-center text-7xl select-none">
						Combining <span class="font-rekind">design</span> and
						<span class="font-rekind">code</span> to create effective web experiences
					</h1>
				</div>
				<p class="text-center text-2xl">
					I am a web developer and designer committed to creating web solutions for my clients.
				</p>
				<div class="w-[300px]">
					<Link href="/about" label="Learn More About Me" btn showArrow class="w-full" />
				</div>
			</div>
		</div>
	</section>

	<section class="relative flex w-full justify-center">
		<div class="!items-start !justify-start border-t border-gray-300 px-16 py-16 text-left">
			<h3 class="font-rekind text-4xl">About Me</h3>
		</div>
	</section>
	<section class="relative flex w-full justify-center">
		<div class="items-start border-t border-gray-300 px-16 py-16">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div class="flex flex-col gap-12">
					<p class="text-xl leading-relaxed">
						Hi, I’m Jerwin Ordillano. I’m a Computer Engineer with over 6 years of experience
						building websites using Svelte, TypeScript, and WordPress. I love bringing ideas to life
						with clean code and thoughtful design making things that are fast, modern, and easy to
						use.
						<br />
						<br />
						Outside of work, I’m probably on a motorcycle road trip or relaxing with some crochet. I
						enjoy mixing creativity with a bit of adventure, and I bring that same energy into every
						project I work on.
					</p>
					<div class="w-[300px]">
						<Link href="/about" label="Learn More About Me" btn showArrow class="w-full" />
					</div>
				</div>
				<div class="relative">
					<Me class="absolute bottom-0 left-0 fill-gray-800"></Me>
				</div>
			</div>
		</div>
	</section>
</main>
