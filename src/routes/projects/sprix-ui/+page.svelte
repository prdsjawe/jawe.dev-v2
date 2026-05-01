<script lang="ts">
	import { reveal } from '$lib/functions/reveal';
	import Link from '$lib/components/Link.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/sprix-ui/components/button/button.svelte';
	import Badge from '$lib/sprix-ui/components/badge/badge.svelte';
	import Kbd from '$lib/sprix-ui/components/kbd/kbd.svelte';
	import Card from '$lib/sprix-ui/components/card/card.svelte';
	import Avatar from '$lib/sprix-ui/components/avatar/avatar.svelte';
	import Spinner from '$lib/sprix-ui/components/spinner/spinner.svelte';

	const sprixTheme = {
		bg: '#ffffff',
		text: '#18181b',
		textMuted: '#52525b',
		textSubtle: '#71717a',
		border: '#e4e4e7',
		accent: '#2563eb',
		wordmark: 'color-mix(in oklab, #e4e4e7 80%, transparent)'
	};
</script>

<svelte:head>
	<title>Sprix UI — JAWE.dev</title>
</svelte:head>

<!-- ── 1. INDEX STRIP ─────────────────────────────────────────────────── -->
<section
	class="relative flex min-h-[100svh] w-full flex-col justify-between pt-24 pb-10 md:pt-40 md:pb-14"
	style="background: var(--sprix-bg);"
>
	<div
		class="frame flex w-full items-center justify-between font-mono text-[10px] uppercase md:text-[11px]"
		style="color: var(--sprix-text-subtle);"
	>
		<span>No. 02 / Sprix UI</span>
		<span class="hidden md:inline">Case study</span>
		<span class="flex items-center gap-2">
			<span class="relative flex size-1.5">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
					style="background-color: var(--sprix-accent);"
				></span>
				<span
					class="relative inline-flex size-1.5 rounded-full"
					style="background-color: var(--sprix-accent);"
				></span>
			</span>
			Shipped
		</span>
	</div>

	<!-- ── 2. HERO ────────────────────────────────────────────────────── -->
	<div class="frame relative mt-14 grid grid-cols-12 gap-y-10 md:mt-24 md:gap-10">
		<!-- Left: headline -->
		<div class="col-span-12 min-w-0 md:col-span-8">
			<p
				class="animate-reveal-up flex items-center gap-4 font-mono text-[11px] uppercase md:text-xs"
				style="color: var(--sprix-text-subtle);"
			>
				<img src="/logo-hd.png" alt="" class="size-10 shrink-0" />
				Sprix UI
			</p>

			<h1
				class="font-rekind mt-5 text-[clamp(2.25rem,7vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.01em] select-none md:mt-6"
				style="color: var(--sprix-text);"
			>
				<span class="animate-reveal-up block">UI with a</span>
				<span
					class="animate-reveal-up text-outline-sprix block italic"
					style="animation-delay: 0.08s;"
				>
					point of view
				</span>
			</h1>

			<p
				class="animate-reveal-up font-rekind mt-3 text-[clamp(1.1rem,3vw,1.75rem)] leading-tight italic"
				style="animation-delay: 0.15s; color: var(--sprix-text-muted);"
			>
				a personal design system made portable
			</p>

			<p
				class="animate-reveal-up mt-8 max-w-xl text-base leading-relaxed md:mt-10 md:text-lg"
				style="animation-delay: 0.28s; color: var(--sprix-text-muted);"
			>
				Sprix UI is a component library and design system I built from scratch using Svelte 5 and
				Tailwind CSS 4. It exists so I never have to wire up the same Button, Card, or Form twice —
				and so every product surface I ship starts from a shared, coherent visual foundation.
			</p>

			<div
				class="animate-reveal-up mt-8 flex flex-wrap items-center gap-3 md:mt-10"
				style="animation-delay: 0.36s;"
			>
				<Link href="https://sprixui.jawe.dev/" label="Visit live site" btn showArrow external />
				<Link href="/projects" label="Other projects" />
			</div>
		</div>

		<!-- Right: meta card -->
		<aside
			class="animate-reveal-up col-span-12 min-w-0 md:col-span-4"
			style="animation-delay: 0.5s;"
		>
			<div
				class="relative p-5"
				style="border: 1px solid var(--sprix-border); background: var(--sprix-surface);"
			>
				<div
					class="flex items-center justify-between gap-2 font-mono text-[10px] uppercase"
					style="color: var(--sprix-text-subtle);"
				>
					<span>Case / 02</span>
					<span>Shipped</span>
				</div>

				<div class="mt-6 space-y-4">
					{#each [['Project', 'Sprix UI'], ['Role', 'Designer & Developer'], ['Year', '2025–2026'], ['Stack', 'Svelte 5, Tailwind CSS 4'], ['Status', 'Live · v3']] as [label, value]}
						<div
							class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed pb-2"
							style="border-color: var(--sprix-border);"
						>
							<span class="font-mono text-[10px] uppercase" style="color: var(--sprix-text-subtle);"
								>{label}</span
							>
							<span class="text-right text-sm" style="color: var(--sprix-text);">{value}</span>
						</div>
					{/each}

					<div class="flex flex-col gap-2 pt-1">
						<span class="font-mono text-[10px] uppercase" style="color: var(--sprix-text-subtle);"
							>Tags</span
						>
						<div class="flex flex-wrap gap-1.5">
							{#each ['Figma', 'Web Design', 'Component Library'] as tag}
								<span
									class="px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase"
									style="border: 1px solid var(--sprix-border); color: var(--sprix-text-muted);"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<!-- corner marks — single Sprix accent color -->
				<div
					class="pointer-events-none absolute top-1.5 left-1.5 size-2.5 border-t border-l"
					style="border-color: var(--sprix-accent);"
				></div>
				<div
					class="pointer-events-none absolute top-1.5 right-1.5 size-2.5 border-t border-r"
					style="border-color: var(--sprix-accent);"
				></div>
				<div
					class="pointer-events-none absolute bottom-1.5 left-1.5 size-2.5 border-b border-l"
					style="border-color: var(--sprix-accent);"
				></div>
				<div
					class="pointer-events-none absolute right-1.5 bottom-1.5 size-2.5 border-r border-b"
					style="border-color: var(--sprix-accent);"
				></div>
			</div>
		</aside>
	</div>

	<!-- Bottom marquee -->
	<div class="mt-14 w-full md:mt-28">
		<div class="sprix-divider"></div>
		<div
			class="relative flex overflow-hidden py-4"
			style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
		>
			<div class="flex gap-12 whitespace-nowrap">
				{#each Array(6).fill(0) as _, i (i)}
					<div
						class="animate-marquee-left flex shrink-0 items-center gap-12 font-mono text-xs uppercase [--gap:3rem]"
						style="--duration: 60s; color: var(--sprix-text-subtle);"
					>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--sprix-text-muted);">sprix ui</span
						>
						<span style="color: var(--sprix-accent);">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--sprix-text-muted);">component library</span
						>
						<span style="color: var(--sprix-accent);">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--sprix-text-muted);">shipped</span
						>
						<span style="color: var(--sprix-accent);">◆</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="sprix-divider"></div>
	</div>
</section>

<!-- ── 3. WHY IT HAPPENED ─────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--sprix-surface);">
	<div class="frame grid grid-cols-12 gap-y-10 md:gap-16">
		<!-- Left: sticky heading -->
		<div class="col-span-12 md:col-span-4 md:pt-1" use:reveal={{ delay: 0 }}>
			<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">01 / Why</p>
			<h2
				class="font-rekind mt-4 text-4xl leading-tight font-normal md:text-5xl"
				style="color: var(--sprix-text);"
			>
				Why Sprix exists
			</h2>
		</div>

		<!-- Right: narrative -->
		<div
			class="col-span-12 space-y-6 text-base leading-relaxed md:col-span-8 md:text-lg"
			style="color: var(--sprix-text-muted);"
			use:reveal={{ delay: 80 }}
		>
			<p>
				Every freelance project starts the same way: open a blank file, stub out a Button, wire up a
				Form, build the same Card layout I've built four times before. The primitives are never
				quite reusable because they were designed for one project, not a system. That friction was
				the original problem.
			</p>
			<p>
				I tried headless libraries — Radix, Headless UI — and they solved the accessibility part
				well. But they came with no opinion about how things should look or feel. I kept layering
				the same design decisions on top anyway: zinc surfaces, restrained shadows, strong borders,
				a consistent type scale. Those decisions were mine. They belonged in a system.
			</p>
			<p>
				Sprix is what I actually wanted: a component library with a clear <em>point of view</em>.
				Calm by default, sharp where it matters, and ready to compose into real product screens
				without ceremony. Building it once meant shipping everything after it faster.
			</p>
		</div>
	</div>
</section>

<!-- ── 4. HOW IT WAS BUILT ────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--sprix-bg);">
	<div class="frame">
		<div class="mb-16 md:mb-24" use:reveal>
			<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">02 / How</p>
			<h2
				class="font-rekind mt-4 text-4xl leading-tight font-normal md:text-5xl"
				style="color: var(--sprix-text);"
			>
				How it was built
			</h2>
		</div>

		<div class="space-y-0">
			<!-- Step 1 -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--sprix-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--sprix-accent);">01</span
					>
				</div>
				<div class="col-span-12 md:col-span-4">
					<h3
						class="font-rekind text-2xl font-normal md:text-3xl"
						style="color: var(--sprix-text);"
					>
						Tokens before components
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--sprix-text-muted);"
				>
					<p>
						Before writing a single component, I settled the design tokens: a zinc-based palette
						with light and dark surface ramps, semantic naming (<code
							class="font-mono text-sm"
							style="color: var(--sprix-accent);">--app-bg</code
						>,
						<code class="font-mono text-sm" style="color: var(--sprix-accent);">--app-surface</code
						>,
						<code class="font-mono text-sm" style="color: var(--sprix-accent);">--app-text</code>),
						and a single blue-600 accent that would carry all interactive states.
					</p>
					<p>
						Getting tokens right first meant every component I built after was anchored to the same
						foundation. Refactoring a color meant one change in one place — not hunting down
						thirty-two hardcoded hex values.
					</p>
				</div>
			</div>

			<!-- Step 2 -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--sprix-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--sprix-accent);">02</span
					>
				</div>
				<div class="col-span-12 md:col-span-4">
					<h3
						class="font-rekind text-2xl font-normal md:text-3xl"
						style="color: var(--sprix-text);"
					>
						Sveltekit and TailwindCSS
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--sprix-text-muted);"
				>
					<p>
						Svelte 5's runes model made component state feel direct — no boilerplate, no wrapping
						everything in signals. Tailwind 4's Vite plugin made the design system CSS-first: tokens
						live in CSS, not a config object, which meant the components stayed close to the styling
						decisions.
					</p>
					<p>
						The tradeoff: less ecosystem than a React/shadcn approach. No massive open-source
						community publishing Sprix-compatible blocks. But the APIs stay direct, the bundle stays
						lean, and the components feel exactly how I want them to feel — not shaped by another
						library's opinions.
					</p>
				</div>
			</div>

			<!-- Step 3 -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--sprix-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--sprix-accent);">03</span
					>
				</div>
				<div class="col-span-12 md:col-span-4">
					<h3
						class="font-rekind text-2xl font-normal md:text-3xl"
						style="color: var(--sprix-text);"
					>
						Borders not shadows
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--sprix-text-muted);"
				>
					<p>
						The single biggest design decision: use strong edges instead of elevation shadows to
						separate surfaces. A card on Sprix has a 1px zinc-200 border and a white background. No
						<code class="font-mono text-sm" style="color: var(--sprix-accent);">shadow-xl</code>.
					</p>
					<p>
						This keeps the UI calm in both light and dark modes — shadows shift in color across
						themes, borders don't. It forces hierarchy to come from whitespace, typography weight,
						and surface contrast instead of depth illusions. The result reads as flat but not blank.
					</p>
				</div>
			</div>

			<!-- Step 4 -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--sprix-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--sprix-accent);">04</span
					>
				</div>
				<div class="col-span-12 md:col-span-4">
					<h3
						class="font-rekind text-2xl font-normal md:text-3xl"
						style="color: var(--sprix-text);"
					>
						Components ready for production
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--sprix-text-muted);"
				>
					<p>
						The guiding rule was: each component does one thing well and accepts props that make the
						common cases easy. No giant polymorphic base classes, no deep inheritance chains. A
						<code class="font-mono text-sm" style="color: var(--sprix-accent);">Button</code> is a
						Button. A
						<code class="font-mono text-sm" style="color: var(--sprix-accent);">Card</code> is a Card.
						Compose them at the page level.
					</p>

					<!-- Component category grid -->
					<div
						class="mt-6 grid grid-cols-2 gap-3 border p-5 sm:grid-cols-3"
						style="border-color: var(--sprix-border); background: var(--sprix-surface);"
					>
						{#each [['Navigation', ['NavMenu', 'Breadcrumb', 'Tabs', 'Sidebar']], ['Inputs', ['Input', 'Select', 'Checkbox', 'Toggle', 'DatePicker']], ['Display', ['Button', 'Badge', 'Card', 'Table', 'Avatar']], ['Feedback', ['Dialog', 'Toast', 'Popover', 'Tooltip']], ['Data', ['Progress', 'Spinner', 'Empty', 'Kbd']], ['Forms', ['Form', 'Field', 'OTP', 'Slider', 'Combobox']]] as [category, items]}
							<div>
								<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">
									{category}
								</p>
								<ul class="mt-2 space-y-1">
									{#each items as item}
										<li class="text-sm" style="color: var(--sprix-text-muted);">{item}</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Step 5 -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--sprix-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--sprix-accent);">05</span
					>
				</div>
				<div class="col-span-12 md:col-span-4">
					<h3
						class="font-rekind text-2xl font-normal md:text-3xl"
						style="color: var(--sprix-text);"
					>
						Product screens as proof
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--sprix-text-muted);"
				>
					<p>
						A component library that only shows isolated components isn't a design system — it's a
						parts list. To prove Sprix worked, I assembled four real product screen flows using only
						Sprix primitives: a checkout flow, an auth screen, an operations dashboard, and a CMS
						editor.
					</p>
					<p>
						These screens appear on the Sprix site as the showcase section. They're the real test:
						do the components compose cleanly under pressure? The answer had to be yes before I
						called the library done.
					</p>

					<!-- Screenshot grid — placeholder boxes until images are added -->
					<div class="mt-6 grid grid-cols-2 gap-3">
						{#each ['Checkout', 'Authentication', 'Dashboard', 'CMS Editor'] as label}
							<div
								class="flex aspect-video w-full items-center justify-center border"
								style="border-color: var(--sprix-border); background: var(--sprix-surface);"
							>
								<span class="font-mono text-xs" style="color: var(--sprix-text-subtle);"
									>{label}</span
								>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ── 5. COMPONENT SHOWCASE ──────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--sprix-bg);">
	<div class="frame">
		<div class="mb-16 md:mb-24" use:reveal>
			<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">
				03 / Components
			</p>
			<h2
				class="font-rekind mt-4 text-4xl leading-tight font-normal md:text-5xl"
				style="color: var(--sprix-text);"
			>
				Some of the primitives
			</h2>
			<p class="mt-4 max-w-xl text-base leading-relaxed" style="color: var(--sprix-text-muted);">
				A sample of what ships with Sprix UI. Every component follows the same token system and
				composes cleanly into real product screens.
				<a
					href="https://sprixui.jawe.dev/components"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-1 underline underline-offset-2"
					style="color: var(--sprix-accent);">Browse all components</a
				>
			</p>
		</div>

		<div class="space-y-px" style="border: 1px solid var(--sprix-border);">
			<!-- Buttons row -->
			<div
				class="grid grid-cols-12 gap-y-6 p-8 md:gap-10"
				style="border-bottom: 1px solid var(--sprix-border); background: var(--sprix-surface);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-3">
					<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">Button</p>
					<p class="mt-1 text-xs leading-relaxed" style="color: var(--sprix-text-subtle);">
						6 roles · 6 variants · 5 sizes
					</p>
				</div>
				<div class="col-span-12 flex flex-wrap items-center gap-3 md:col-span-9">
					<Button role="primary">Primary</Button>
					<Button role="primary" variant="soft">Soft</Button>
					<Button role="primary" variant="outline">Outline</Button>
					<Button role="secondary">Secondary</Button>
					<Button role="danger" variant="soft">Danger</Button>
					<Button role="primary" loading>Loading</Button>
				</div>
			</div>

			<!-- Badges row -->
			<div
				class="grid grid-cols-12 gap-y-6 p-8 md:gap-10"
				style="border-bottom: 1px solid var(--sprix-border); background: var(--sprix-surface);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-3">
					<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">Badge</p>
					<p class="mt-1 text-xs leading-relaxed" style="color: var(--sprix-text-subtle);">
						6 roles · 5 variants · 3 sizes
					</p>
				</div>
				<div class="col-span-12 flex flex-wrap items-center gap-3 md:col-span-9">
					<Badge role="primary">Primary</Badge>
					<Badge role="success">Success</Badge>
					<Badge role="danger">Danger</Badge>
					<Badge role="warning">Warning</Badge>
					<Badge role="secondary" variant="pill">Pill</Badge>
					<Badge role="primary" variant="badge-color">Solid</Badge>
					<Badge role="secondary" variant="modern">Modern</Badge>
				</div>
			</div>

			<!-- Avatar row -->
			<div
				class="grid grid-cols-12 gap-y-6 p-8 md:gap-10"
				style="border-bottom: 1px solid var(--sprix-border); background: var(--sprix-surface);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-3">
					<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">Avatar</p>
					<p class="mt-1 text-xs leading-relaxed" style="color: var(--sprix-text-subtle);">
						Image · initials fallback · 7 sizes
					</p>
				</div>
				<div class="col-span-12 flex flex-wrap items-center gap-3 md:col-span-9">
					<Avatar name="Jawe Ordillano" size="xs" />
					<Avatar name="Jawe Ordillano" size="sm" />
					<Avatar name="Jawe Ordillano" size="md" />
					<Avatar name="Jawe Ordillano" size="lg" />
					<Avatar name="Jawe Ordillano" size="xl" />
					<Avatar name="Jawe Ordillano" size="2xl" />
					<Avatar src="https://github.com/shadcn.png" name="Shadcn" size="xl" />
				</div>
			</div>

			<!-- Spinner row -->
			<div
				class="grid grid-cols-12 gap-y-6 p-8 md:gap-10"
				style="border-bottom: 1px solid var(--sprix-border); background: var(--sprix-surface);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-3">
					<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">Spinner</p>
					<p class="mt-1 text-xs leading-relaxed" style="color: var(--sprix-text-subtle);">
						7 roles · 7 sizes · with label
					</p>
				</div>
				<div class="col-span-12 flex flex-wrap items-center gap-6 md:col-span-9">
					<Spinner role="primary" size="lg" />
					<Spinner role="danger" size="lg" />
					<Spinner role="success" size="lg" />
					<Spinner role="warning" size="lg" />
					<Spinner role="secondary" size="xl">Loading</Spinner>
				</div>
			</div>

			<!-- Kbd row -->
			<div
				class="grid grid-cols-12 gap-y-6 p-8 md:gap-10"
				style="border-bottom: 1px solid var(--sprix-border); background: var(--sprix-surface);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-3">
					<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">Kbd</p>
					<p class="mt-1 text-xs leading-relaxed" style="color: var(--sprix-text-subtle);">
						Keyboard key indicator
					</p>
				</div>
				<div class="col-span-12 flex flex-wrap items-center gap-2 md:col-span-9">
					<Kbd>⌘</Kbd>
					<span class="text-xs" style="color: var(--sprix-text-subtle);">+</span>
					<Kbd>K</Kbd>
					<span class="mx-2 text-xs" style="color: var(--sprix-text-subtle);">·</span>
					<Kbd>Ctrl</Kbd>
					<span class="text-xs" style="color: var(--sprix-text-subtle);">+</span>
					<Kbd>Shift</Kbd>
					<span class="text-xs" style="color: var(--sprix-text-subtle);">+</span>
					<Kbd>P</Kbd>
					<span class="mx-2 text-xs" style="color: var(--sprix-text-subtle);">·</span>
					<Kbd>Enter</Kbd>
					<Kbd>Esc</Kbd>
					<Kbd>Tab</Kbd>
				</div>
			</div>

			<!-- Card row -->
			<div
				class="grid grid-cols-12 gap-y-6 p-8 md:gap-10"
				style="background: var(--sprix-surface);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-3">
					<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">Card</p>
					<p class="mt-1 text-xs leading-relaxed" style="color: var(--sprix-text-subtle);">
						Header · content · footer slots
					</p>
				</div>
				<div class="col-span-12 md:col-span-9">
					<Card
						title="Revenue overview"
						description="Total revenue across all active projects this month."
					>
						{#snippet action()}
							<Badge role="success" size="xs">+12.4%</Badge>
						{/snippet}
						<div class="flex items-end gap-1">
							<span class="text-3xl font-semibold text-zinc-900">$24,830</span>
							<span class="mb-1 text-sm text-zinc-400">/ mo</span>
						</div>
						{#snippet footer()}
							<div class="flex items-center justify-between">
								<span class="text-xs text-zinc-400">Updated just now</span>
								<Button role="secondary" size="xs">View report</Button>
							</div>
						{/snippet}
					</Card>
				</div>
			</div>
		</div>

		<div class="mt-10 flex items-center gap-3" use:reveal>
			<a
				href="https://sprixui.jawe.dev/components"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase transition-colors"
				style="color: var(--sprix-accent);"
			>
				Browse all components
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="10"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M7 7h10v10" /><path d="M7 17 17 7" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- ── 6. HOW IT'S USEFUL ─────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--sprix-surface);">
	<div class="frame grid grid-cols-12 gap-y-10 md:gap-16">
		<div class="col-span-12 md:col-span-4" use:reveal={{ delay: 0 }}>
			<p class="font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">
				04 / What's next
			</p>
			<h2
				class="font-rekind mt-4 text-4xl leading-tight font-normal md:text-5xl"
				style="color: var(--sprix-text);"
			>
				How its useful going forward
			</h2>
		</div>

		<div class="col-span-12 md:col-span-8" use:reveal={{ delay: 80 }}>
			<div class="space-y-10">
				<!-- For freelance -->
				<div class="border-l-2 pl-6" style="border-color: var(--sprix-accent);">
					<h3 class="font-rekind text-xl font-normal md:text-2xl" style="color: var(--sprix-text);">
						For freelance work
					</h3>
					<p
						class="mt-3 text-base leading-relaxed md:text-lg"
						style="color: var(--sprix-text-muted);"
					>
						The next checkout flow, dashboard, or CMS interface scaffolds in hours rather than days.
						Tokens are set, components are tested, the visual language is consistent. I'm not
						reinventing the Button on every project — I'm composing screens from a trusted set of
						pieces and spending the freed time on what actually differentiates each product.
					</p>
				</div>

				<!-- For collaborators -->
				<div class="border-l-2 pl-6" style="border-color: var(--sprix-accent);">
					<h3 class="font-rekind text-xl font-normal md:text-2xl" style="color: var(--sprix-text);">
						For collaborators
					</h3>
					<p
						class="mt-3 text-base leading-relaxed md:text-lg"
						style="color: var(--sprix-text-muted);"
					>
						Token names are semantic, component APIs are minimal and direct, and the system is
						documented on the live site. Handing off a project to another developer or designer
						means pointing them at the docs — not walking them through a custom setup. The clarity
						of naming is a feature, not a side effect.
					</p>
				</div>

				<!-- For the portfolio -->
				<div class="border-l-2 pl-6" style="border-color: var(--sprix-accent);">
					<h3 class="font-rekind text-xl font-normal md:text-2xl" style="color: var(--sprix-text);">
						For the portfolio itself
					</h3>
					<p
						class="mt-3 text-base leading-relaxed md:text-lg"
						style="color: var(--sprix-text-muted);"
					>
						Sprix's principles — calm by default, hierarchy through contrast, borders over shadows —
						have fed back into how I design every other product surface. This case study page is a
						small example: the same zinc palette, the same blue accent, the same surface logic,
						living inside a portfolio that deliberately looks nothing like it.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ── 6. CTA ─────────────────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--sprix-bg);">
	<div class="frame" use:reveal>
		<div class="sprix-divider mb-16 md:mb-24"></div>

		<div class="grid grid-cols-12 gap-y-10 md:gap-10">
			<div class="col-span-12 md:col-span-7">
				<h2
					class="font-rekind text-[clamp(2rem,6vw,2rem)] leading-tight font-normal"
					style="color: var(--sprix-text);"
				>
					Want a sharp screen<br />
					<span class="text-outline-sprix italic">built on this system</span>
				</h2>

				<p
					class="mt-8 max-w-lg text-base leading-relaxed md:text-lg"
					style="color: var(--sprix-text-muted);"
				>
					The components are ready. The tokens are set. If you're building a product interface and
					want something calm, sharp, and unmistakably yours — let's talk.
				</p>

				<div class="mt-10 flex flex-wrap items-center gap-3">
					<Link href="mailto:jawe.ordillano@gmail.com" label="Get in touch" btn showArrow />
					<Link href="https://sprixui.jawe.dev/" label="Explore the library" external />
					<Link href="/projects" label="Back to projects" />
				</div>
			</div>

			<!-- Stats tile -->
			<div class="col-span-12 flex items-start md:col-span-5 md:justify-end">
				<div
					class="w-full border p-8 md:max-w-xs"
					style="border-color: var(--sprix-border); background: var(--sprix-surface);"
				>
					<p class="mt-3 text-sm leading-relaxed" style="color: var(--sprix-text-muted);">
						Ready-to-compose primitives for real product screens.
					</p>
					<div class="sprix-divider mt-6"></div>
					<p class="mt-4 font-mono text-[10px] uppercase" style="color: var(--sprix-accent);">
						sprix ui · v3 · 2026
					</p>
				</div>
			</div>
		</div>

		<div class="sprix-divider mt-16 md:mt-24"></div>
	</div>

	<!-- Bottom marquee -->
	<div class="mt-0 w-full">
		<div
			class="relative flex overflow-hidden py-4"
			style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
		>
			<div class="flex gap-12 whitespace-nowrap">
				{#each Array(6).fill(0) as _, i (i)}
					<div
						class="animate-marquee-left flex shrink-0 items-center gap-12 font-mono text-xs uppercase [--gap:3rem]"
						style="--duration: 50s; color: var(--sprix-text-subtle);"
					>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--sprix-text-muted);">want a sharp screen</span
						>
						<span style="color: var(--sprix-accent);">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--sprix-text-muted);">built on this system</span
						>
						<span style="color: var(--sprix-accent);">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--sprix-text-muted);">lets talk</span
						>
						<span style="color: var(--sprix-accent);">◆</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="sprix-divider"></div>
	</div>
</section>

<Footer theme={sprixTheme} />
