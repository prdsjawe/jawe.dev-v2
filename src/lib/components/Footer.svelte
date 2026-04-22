<script lang="ts">
	import { reveal } from '$lib/functions/reveal';
	import Logo from '$lib/icons/Logo.svelte';
	import Button from './Button.svelte';
	import Link from './Link.svelte';

	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer class="relative w-full pt-20 md:pt-28">
	<div
		use:reveal
		class="frame flex items-center justify-between pb-8 font-mono text-[10px] tracking-[0.35em] text-white/45 uppercase md:text-[11px]"
	>
		<span>[ 05 ] — Contact</span>
		<span class="hidden md:inline">End of index</span>
	</div>

	<div class="divider-line"></div>

	<div class="frame pt-16 pb-10 md:pt-24">
		<!-- giant statement -->
		<div class="relative">
			<p
				use:reveal={{ delay: 80 }}
				class="font-mono text-xs tracking-[0.3em] text-white/45 uppercase"
			>
				Let’s make something
			</p>
			<h2
				use:reveal={{ delay: 160 }}
				class="font-rekind mt-4 text-[clamp(3rem,11vw,9rem)] leading-[0.9] font-normal tracking-[-0.02em] select-none"
			>
				<span class="block">say</span>
				<span class="text-outline block italic">hello</span>
			</h2>
			<a
				use:reveal={{ delay: 240 }}
				href="mailto:jawe.ordillano@gmail.com"
				class="group mt-8 inline-flex max-w-full items-baseline gap-3 border-b border-white/20 pb-2 transition-colors hover:border-white"
			>
				<span
					class="font-mono text-xs tracking-[0.3em] text-white/45 uppercase group-hover:text-white/70"
				>
					→ email
				</span>
				<span class="text-base break-all md:text-2xl">jawe.ordillano@gmail.com</span>
			</a>
		</div>

		<!-- link columns -->
		<div
			class="mt-16 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 md:mt-24 md:grid-cols-4"
		>
			<div use:reveal={{ delay: 80 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase">Navigate</p>
				<ul class="mt-4 space-y-2 text-sm text-white/80">
					<li><Link href="/" label="Index" class="!p-0" /></li>
					<li><Link href="/about" label="About" class="!p-0" /></li>
					<li><Link href="/projects" label="Work" class="!p-0" /></li>
					<li><Link href="/services" label="Services" class="!p-0" /></li>
				</ul>
			</div>
			<div use:reveal={{ delay: 160 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase">Elsewhere</p>
				<ul class="mt-4 space-y-2 text-sm text-white/80">
					<li><Link href="/" label="GitHub" class="!p-0" /></li>
					<li><Link href="/" label="LinkedIn" class="!p-0" /></li>
					<li><Link href="/" label="Dribbble" class="!p-0" /></li>
					<li><Link href="/" label="Read.cv" class="!p-0" /></li>
				</ul>
			</div>
			<div use:reveal={{ delay: 240 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase">Location</p>
				<ul class="mt-4 space-y-2 text-sm text-white/80">
					<li>Manila, Philippines</li>
					<li>GMT+8</li>
					<li>Available for work</li>
				</ul>
			</div>
			<div use:reveal={{ delay: 320 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase">Colophon</p>
				<ul class="mt-4 space-y-2 text-sm text-white/80">
					<li>SvelteKit · Tailwind</li>
					<li>Rekind · Usual</li>
					<li>Handcrafted 2026</li>
				</ul>
			</div>
		</div>

		<!-- bottom bar -->
		<div
			use:reveal={{ delay: 120 }}
			class="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end"
		>
			<div class="flex items-center gap-4">
				<Logo class="!size-12" />
				<div class="font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase">
					<p>© {currentYear} Jerwin Ordillano</p>
					<p class="mt-1">All rights reserved · v2.0</p>
				</div>
			</div>
			<Button label="Back to top" onclick={scrollToTop} showArrow />
		</div>
	</div>

	<!-- oversized wordmark bleed -->
	<div class="relative overflow-hidden">
		<div class="divider-line"></div>
		<p
			use:reveal={{ delay: 80, y: 0, duration: 1400 }}
			class="font-rekind pointer-events-none w-full text-center text-[clamp(4rem,22vw,20rem)] leading-[0.8] font-normal tracking-[-0.02em] text-white/[0.06] select-none"
		>
			jawe
		</p>
	</div>
</footer>
