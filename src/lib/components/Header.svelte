<script lang="ts">
	import Logo from '$lib/icons/Logo.svelte';
	import Link from './Link.svelte';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let time = $state('');

	function updateTime() {
		const d = new Date();
		time = new Intl.DateTimeFormat('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			timeZone: 'Asia/Manila'
		}).format(d);
	}

	onMount(() => {
		updateTime();
		const id = setInterval(updateTime, 15000);

		const onScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => {
			clearInterval(id);
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<header
	class="fixed top-0 left-0 z-50 w-full transition-all duration-300 {scrolled
		? 'scrolled bg-neutral-950/65 backdrop-blur-xl'
		: 'bg-gradient-to-b from-neutral-950/60 to-transparent'}"
>
	<div class="frame flex items-center justify-between gap-6 py-4">
		<a href="/" class="flex items-center gap-3">
			<Logo class="!size-9" />
			<span class="hidden font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase md:inline">
				Jerwin Ordillano — Portfolio
			</span>
		</a>

		<!-- <nav class="hidden md:block">
			<ul class="flex list-none items-center gap-2 text-sm text-white/80">
				<li><Link href="/" label="Home" /></li>
				<li><Link href="/about" label="About" /></li>
				<li><Link href="/projects" label="Work" /></li>
				<li><Link href="/services" label="Services" /></li>
			</ul>
		</nav> -->

		<div
			class="flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase"
		>
			<span class="hidden items-center gap-2 md:flex">
				<span class="relative flex size-1.5">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"
					></span>
					<span class="relative inline-flex size-1.5 rounded-full bg-cyan-400"></span>
				</span>
				Available
			</span>
			<span class="hidden tabular-nums md:inline">{time} PH</span>
			<Link href="mailto:jawe.ordillano@gmail.com" label="Contact" class="!text-[11px]" />
		</div>
	</div>

	<div class="divider-line"></div>
</header>

