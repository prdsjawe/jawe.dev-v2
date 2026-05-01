<script lang="ts">
	import { reveal } from '$lib/functions/reveal';
	import { strokeCycle } from '$lib/functions/strokeCycle';
	import Logo from '$lib/icons/Logo.svelte';
	import Link from './Link.svelte';

	interface FooterTheme {
		bg?: string;
		text?: string;
		textMuted?: string;
		textSubtle?: string;
		border?: string;
		accent?: string;
		wordmark?: string;
	}

	let { theme = {} }: { theme?: FooterTheme } = $props();

	const t = {
		bg:          theme.bg          ?? 'transparent',
		text:        theme.text        ?? '#ffffff',
		textMuted:   theme.textMuted   ?? 'rgba(255,255,255,0.75)',
		textSubtle:  theme.textSubtle  ?? 'rgba(255,255,255,0.45)',
		border:      theme.border      ?? 'rgba(255,255,255,0.1)',
		accent:      theme.accent      ?? '#ec4899',
		wordmark:    theme.wordmark    ?? 'rgba(255,255,255,0.06)',
	};

	const cssVars = `
		--ft-bg: ${t.bg};
		--ft-text: ${t.text};
		--ft-text-muted: ${t.textMuted};
		--ft-text-subtle: ${t.textSubtle};
		--ft-border: ${t.border};
		--ft-accent: ${t.accent};
		--ft-wordmark: ${t.wordmark};
	`;

	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer class="relative w-full pt-20 md:pt-28" style="{cssVars} background: var(--ft-bg);">
	<div
		use:reveal
		class="frame flex items-center justify-between pb-8 font-mono text-[10px] tracking-[0.35em] uppercase md:text-[11px]"
		style="color: var(--ft-text-subtle);"
	>
		<span>[ 05 ] — Contact</span>
		<span class="hidden md:inline">End of index</span>
	</div>

	<div class="h-px w-full" style="background: var(--ft-border);"></div>

	<div class="frame pt-16 pb-10 md:pt-24">
		<!-- giant statement -->
		<div class="relative">
			<p
				use:reveal={{ delay: 80 }}
				class="font-mono text-xs tracking-[0.3em] uppercase"
				style="color: var(--ft-text-subtle);"
			>
				Let's make something
			</p>
			<h2
				use:reveal={{ delay: 160 }}
				class="font-rekind mt-4 text-[clamp(3rem,11vw,9rem)] leading-[0.9] font-normal tracking-[-0.02em] select-none"
				style="color: var(--ft-text);"
			>
				<span class="block">say</span>
				<span
					use:strokeCycle
					class="text-outline-anim block italic"
					style="--stroke: var(--ft-accent);"
				>hello</span>
			</h2>
			<a
				use:reveal={{ delay: 240 }}
				href="mailto:jawe.ordillano@gmail.com"
				class="group mt-8 inline-flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-1 border-b pb-2 transition-colors"
				style="border-color: var(--ft-border);"
				onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--ft-accent)')}
				onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--ft-border)')}
			>
				<span
					class="font-mono text-[10px] tracking-[0.3em] uppercase md:text-xs"
					style="color: var(--ft-accent);"
				>
					→ email
				</span>
				<span class="break-words text-sm md:text-2xl" style="color: var(--ft-text);">
					jawe.ordillano@gmail.com
				</span>
			</a>
		</div>

		<!-- link columns -->
		<div
			class="mt-16 grid grid-cols-2 gap-10 border-t pt-10 md:mt-24 md:grid-cols-4"
			style="border-color: var(--ft-border);"
		>
			<div use:reveal={{ delay: 80 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] uppercase" style="color: var(--ft-text-subtle);">Navigate</p>
				<ul class="mt-4 space-y-2 text-sm" style="color: var(--ft-text-muted);">
					<li><Link href="/" label="Index" class="!p-0" /></li>
					<li><Link href="/about" label="About" class="!p-0" /></li>
					<li><Link href="/projects" label="Work" class="!p-0" /></li>
					<li><Link href="/services" label="Services" class="!p-0" /></li>
				</ul>
			</div>
			<div use:reveal={{ delay: 160 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] uppercase" style="color: var(--ft-text-subtle);">Elsewhere</p>
				<ul class="mt-4 space-y-2 text-sm" style="color: var(--ft-text-muted);">
					<li><Link href="/" label="GitHub" class="!p-0" /></li>
					<li><Link href="/" label="LinkedIn" class="!p-0" /></li>
					<li><Link href="/" label="Dribbble" class="!p-0" /></li>
					<li><Link href="/" label="Read.cv" class="!p-0" /></li>
				</ul>
			</div>
			<div use:reveal={{ delay: 240 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] uppercase" style="color: var(--ft-text-subtle);">Location</p>
				<ul class="mt-4 space-y-2 text-sm" style="color: var(--ft-text-muted);">
					<li>Philippines</li>
					<li>GMT+8</li>
					<li>Available for work</li>
				</ul>
			</div>
			<div use:reveal={{ delay: 320 }}>
				<p class="font-mono text-[10px] tracking-[0.3em] uppercase" style="color: var(--ft-text-subtle);">Colophon</p>
				<ul class="mt-4 space-y-2 text-sm" style="color: var(--ft-text-muted);">
					<li>SvelteKit · Tailwind</li>
					<li>Rekind · Usual</li>
					<li>Handcrafted 2026</li>
				</ul>
			</div>
		</div>

		<!-- bottom bar -->
		<div
			use:reveal={{ delay: 120 }}
			class="mt-16 flex flex-col items-start justify-between gap-6 border-t pt-8 md:flex-row md:items-end"
			style="border-color: var(--ft-border);"
		>
			<div class="flex items-center gap-4">
				<Logo class="!size-12" />
				<div class="font-mono text-[10px] tracking-[0.25em] uppercase" style="color: var(--ft-text-subtle);">
					<p>© {currentYear} Jerwin Ordillano</p>
					<p class="mt-1">All rights reserved · v2.0</p>
				</div>
			</div>
			<button
				type="button"
				onclick={scrollToTop}
				class="group flex cursor-pointer items-center gap-2 border px-4 py-2 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors"
				style="border-color: var(--ft-border); color: var(--ft-text-subtle);"
				onmouseenter={(e) => {
					const el = e.currentTarget as HTMLElement;
					el.style.borderColor = 'var(--ft-accent)';
					el.style.color = 'var(--ft-accent)';
				}}
				onmouseleave={(e) => {
					const el = e.currentTarget as HTMLElement;
					el.style.borderColor = 'var(--ft-border)';
					el.style.color = 'var(--ft-text-subtle)';
				}}
			>
				Back to top ↑
			</button>
		</div>
	</div>

	<!-- oversized wordmark bleed -->
	<div class="relative overflow-hidden">
		<div class="h-px w-full" style="background: var(--ft-border);"></div>
		<p
			use:reveal={{ delay: 80, y: 0, duration: 1400 }}
			class="font-rekind pointer-events-none w-full text-center text-[clamp(4rem,22vw,20rem)] leading-[0.8] font-normal tracking-[-0.02em] select-none"
			style="color: var(--ft-wordmark);"
		>
			jawe
		</p>
	</div>
</footer>
