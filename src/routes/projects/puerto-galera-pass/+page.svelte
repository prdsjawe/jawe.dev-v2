<script lang="ts">
	import { reveal } from '$lib/functions/reveal';
	import Link from '$lib/components/Link.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const pgpassTheme = {
		bg: '#ffffff',
		text: '#0f172a',
		textMuted: '#475569',
		textSubtle: '#64748b',
		border: '#e2e8f0',
		accent: '#7c3aed',
		wordmark: 'color-mix(in oklab, #e2e8f0 80%, transparent)'
	};
</script>

<!-- ── 1. HERO — photo background ────────────────────────────────────────── -->
<section
	class="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden pt-24 pb-10 md:pb-14"
	style="
		--pgpass-text: #ffffff;
		--pgpass-text-muted: rgba(255,255,255,0.7);
		--pgpass-text-subtle: rgba(255,255,255,0.45);
		--pgpass-surface: rgba(15,23,42,0.65);
		--pgpass-border: rgba(255,255,255,0.1);
		--pgpass-border-strong: rgba(255,255,255,0.22);
		--pgpass-accent: #a78bfa;
	"
>
	<!-- Background photo -->
	<img
		src="/pg-12.jpg"
		alt=""
		aria-hidden="true"
		class="absolute inset-0 h-full w-full object-cover object-center"
	/>
	<!-- Gradient overlay — indigo/violet/slate -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,27,75,0.88) 45%, rgba(46,16,101,0.78) 100%);"
	></div>

	<!-- ── INDEX STRIP ────────────────────────────────────────────────────── -->
	<div
		class="frame relative z-10 flex w-full items-center justify-between font-mono text-[10px] uppercase md:text-[11px]"
		style="color: var(--pgpass-text-subtle);"
	>
		<span>No. 01 / PG Pass</span>
		<span class="hidden md:inline">Case study</span>
		<span class="flex items-center gap-2">
			<span class="relative flex size-1.5">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
					style="background-color: var(--pgpass-accent);"
				></span>
				<span
					class="relative inline-flex size-1.5 rounded-full"
					style="background-color: var(--pgpass-accent);"
				></span>
			</span>
			Shipped
		</span>
	</div>

	<!-- ── HERO GRID ──────────────────────────────────────────────────────── -->
	<div class="frame relative z-10 mt-12 grid grid-cols-12 gap-y-10 md:gap-10">
		<!-- Left: headline -->
		<div class="col-span-12 min-w-0 md:col-span-8">
			<!-- Experience Puerto Galera branding -->
			<p
				class="animate-reveal-up flex items-center gap-3 font-mono text-[11px] uppercase md:text-xs"
				style="color: var(--pgpass-text-subtle);"
			>
				<span
					class="inline-flex shrink-0 items-center rounded-sm bg-white/90 px-2 py-1 backdrop-blur-sm"
				>
					<img
						src="/experience-puerto-galera.png"
						alt="Experience Puerto Galera"
						class="h-6 w-auto"
					/>
				</span>
				PG Pass
			</p>

			<h1
				class="font-rekind mt-5 text-[clamp(1.875rem,5vw,3.75rem)] leading-[0.92] font-normal tracking-[-0.01em] select-none md:mt-6"
				style="color: #ffffff;"
			>
				<span
					class="animate-reveal-up pgpass-gradient-text block italic"
					style="animation-delay: 0.08s;"
				>
					Puerto Galera Pass
				</span>
			</h1>

			<p
				class="animate-reveal-up font-rekind mt-3 text-[clamp(1rem,2.5vw,1.4rem)] leading-tight italic"
				style="animation-delay: 0.15s; color: var(--pgpass-text-muted);"
			>
				a digital visitor registration and travel pass system
			</p>

			<p
				class="animate-reveal-up mt-8 max-w-xl text-base leading-relaxed md:mt-10 md:text-lg"
				style="animation-delay: 0.28s; color: var(--pgpass-text-muted);"
			>
				PG Pass turns tourist intake, QR-based entry verification, payment handling, and government
				reporting into one operational workflow for Puerto Galera.
			</p>

			<div
				class="animate-reveal-up mt-8 flex flex-wrap items-center gap-3 md:mt-10"
				style="animation-delay: 0.36s; color: var(--pgpass-text);"
			>
				<Link
					href="https://pgpass.experiencepuertogalera.com/"
					label="Visit live site"
					btn
					showArrow
					external
				/>
				<Link href="/projects" label="Other projects" />
			</div>
		</div>

		<!-- Right: meta card (dark translucent) -->
		<aside
			class="animate-reveal-up col-span-12 min-w-0 md:col-span-4"
			style="animation-delay: 0.5s;"
		>
			<div
				class="relative p-5"
				style="border: 1px solid var(--pgpass-border); background: var(--pgpass-surface); backdrop-filter: blur(14px);"
			>
				<div
					class="flex items-center justify-between gap-2 font-mono text-[10px] uppercase"
					style="color: var(--pgpass-text-subtle);"
				>
					<span>Case / 01</span>
					<span>Shipped</span>
				</div>

				<div class="mt-6 space-y-4">
					{#each [['Project', 'PG Pass'], ['Role', 'Designer & Developer'], ['Year', '2024–2025'], ['Stack', 'SvelteKit · Directus · Docker'], ['Status', 'Live · v1'], ['Client', 'Puerto Galera Tourism']] as [label, value]}
						<div
							class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed pb-2"
							style="border-color: var(--pgpass-border);"
						>
							<span
								class="font-mono text-[10px] uppercase"
								style="color: var(--pgpass-text-subtle);">{label}</span
							>
							<span class="text-right text-sm" style="color: var(--pgpass-text);">{value}</span>
						</div>
					{/each}

					<div class="flex flex-col gap-2 pt-1">
						<span class="font-mono text-[10px] uppercase" style="color: var(--pgpass-text-subtle);"
							>Tags</span
						>
						<div class="flex flex-wrap gap-1.5">
							{#each ['Civic tech', 'QR verification', 'Payments', 'Reporting'] as tag}
								<span
									class="px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase"
									style="border: 1px solid var(--pgpass-border); color: var(--pgpass-text-muted);"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<!-- corner marks — fuchsia on dark hero -->
				<div
					class="pointer-events-none absolute top-1.5 left-1.5 size-2.5 border-t border-l"
					style="border-color: #e879f9;"
				></div>
				<div
					class="pointer-events-none absolute top-1.5 right-1.5 size-2.5 border-t border-r"
					style="border-color: #e879f9;"
				></div>
				<div
					class="pointer-events-none absolute bottom-1.5 left-1.5 size-2.5 border-b border-l"
					style="border-color: #e879f9;"
				></div>
				<div
					class="pointer-events-none absolute right-1.5 bottom-1.5 size-2.5 border-r border-b"
					style="border-color: #e879f9;"
				></div>
			</div>
		</aside>
	</div>

	<!-- Bottom marquee -->
	<div class="relative z-10 mt-14 w-full md:mt-28">
		<div class="pgpass-divider-gradient"></div>
		<div
			class="relative flex overflow-hidden py-4"
			style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
		>
			<div class="flex gap-12 whitespace-nowrap">
				{#each Array(6).fill(0) as _, i (i)}
					<div
						class="animate-marquee-left flex shrink-0 items-center gap-12 font-mono text-xs uppercase [--gap:3rem]"
						style="--duration: 60s; color: var(--pgpass-text-subtle);"
					>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--pgpass-text-muted);">PG Pass</span
						>
						<span style="color: #e879f9;">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--pgpass-text-muted);">Puerto Galera</span
						>
						<span style="color: #a78bfa;">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--pgpass-text-muted);">civic technology</span
						>
						<span style="color: #818cf8;">◆</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="pgpass-divider-gradient"></div>
	</div>
</section>

<!-- ── 3. PROBLEM ─────────────────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--pgpass-surface);">
	<div class="frame grid grid-cols-12 gap-y-10 md:gap-16">
		<div class="col-span-12 md:col-span-4 md:pt-1" use:reveal={{ delay: 0 }}>
			<p class="font-mono text-[10px] uppercase" style="color: var(--pgpass-violet);">
				01 / Problem
			</p>
			<h2
				class="font-rekind mt-4 text-2xl leading-tight font-normal md:text-3xl"
				style="color: var(--pgpass-text);"
			>
				Operational coordination
			</h2>
		</div>

		<div
			class="col-span-12 space-y-6 text-base leading-relaxed md:col-span-8 md:text-lg"
			style="color: var(--pgpass-text-muted);"
			use:reveal={{ delay: 80 }}
		>
			<p>
				Puerto Galera depends on tourism, which makes visitor intake more than a form submission
				problem. The municipality needs to know who is arriving, where travelers are staying,
				whether they have been verified, whether fees have been handled, and when visitors enter
				through official points of entry.
			</p>
			<p>
				PG Pass exists to make that workflow digital and traceable. It gives tourists a
				straightforward way to register their travel details, gives staff a shared system for
				reviewing registrations, and gives verifiers a QR-based way to record arrivals at ports or
				checkpoints.
			</p>
			<p>
				The core problem it addresses is operational coordination: registration, accommodation
				review, tourism verification, QR issuance, payment recording, entry scanning, and reporting
				should not live in disconnected manual processes.
			</p>
		</div>
	</div>
</section>

<!-- ── 4. SOLUTION ────────────────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--pgpass-bg);">
	<div class="frame">
		<div class="mb-16 md:mb-24" use:reveal>
			<p class="font-mono text-[10px] uppercase" style="color: var(--pgpass-fuchsia);">
				02 / Solution
			</p>
			<h2
				class="font-rekind mt-4 text-2xl leading-tight font-normal md:text-3xl"
				style="color: var(--pgpass-text);"
			>
				One system end to end
			</h2>
		</div>

		<div class="grid grid-cols-12 gap-8 md:gap-10">
			{#each [['Registration', 'Tourist registers travel and traveler details. Directus field metadata drives form order, document upload categories, and role-based visibility.', '#4f46e5'], ['QR pass issuance', 'After verification, travelers receive a QR pass tied to their travel and traveler records. The pass is downloadable as a styled card rendered by a Puppeteer worker.', '#6d28d9'], ['Payment handling', 'LinkBiz handles online fee payment with request, callback, inquiry, and checksum flows. Staff can also record cash payments for assisted transactions.', '#7c3aed'], ['Entry verification', 'Verifiers scan QR codes at ports or checkpoints. The scan checks travel association, verified status, confirmed IDs, and valid travel dates — then records the point of entry.', '#9333ea'], ['Reporting', 'Async Excel reports cover tourism, gender and development, nationality, and Philippine province breakdowns. The report worker queues jobs, builds artifacts, and updates Directus.', '#c026d3']] as [title, text, color], i}
				<div
					class="col-span-12 border-l-2 pl-6 md:col-span-6"
					style="border-color: {color};"
					use:reveal={{ delay: i * 60 }}
				>
					<p class="font-mono text-[10px] uppercase" style="color: {color};">
						{String(i + 1).padStart(2, '0')}
					</p>
					<h3
						class="font-rekind mt-2 text-lg font-normal md:text-xl"
						style="color: var(--pgpass-text);"
					>
						{title}
					</h3>
					<p class="mt-3 text-base leading-relaxed" style="color: var(--pgpass-text-muted);">
						{text}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ── 5. BUILD ───────────────────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--pgpass-surface);">
	<div class="frame">
		<div class="mb-16 md:mb-24" use:reveal>
			<p class="font-mono text-[10px] uppercase" style="color: var(--pgpass-accent);">03 / Build</p>
			<h2
				class="font-rekind mt-4 text-2xl leading-tight font-normal md:text-3xl"
				style="color: var(--pgpass-text);"
			>
				How it was built
			</h2>
		</div>

		<div class="space-y-0">
			<!-- Step 1: Stack -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--pgpass-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--pgpass-accent);"
						>01</span
					>
				</div>
				<div class="col-span-12 min-w-0 md:col-span-4">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						Production monorepo
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--pgpass-text-muted);"
				>
					<p>
						PG Pass is a production-oriented monorepo with separate services for the public app,
						admin workflows, QR rendering, reporting, and deployment. Each service has its own
						Dockerfile and health checks, orchestrated by Docker Compose with Traefik.
					</p>

					<div
						class="mt-6 grid grid-cols-2 gap-3 border p-5"
						style="border-color: var(--pgpass-border); background: var(--pgpass-bg);"
					>
						{#each [['Frontend', ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS v4']], ['Backend', ['Directus', 'MySQL', 'SvelteKit server routes']], ['QR', ['qr-code-styling', 'html5-qrcode', 'Puppeteer renderer']], ['Infra', ['Docker Compose', 'Traefik', 'Health checks']]] as [category, items]}
							<div>
								<p class="font-mono text-[10px] uppercase" style="color: var(--pgpass-accent);">
									{category}
								</p>
								<ul class="mt-2 space-y-1">
									{#each items as item}
										<li class="text-sm" style="color: var(--pgpass-text-muted);">{item}</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Step 2: Tourist flow -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--pgpass-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--pgpass-violet);"
						>02</span
					>
				</div>
				<div class="col-span-12 min-w-0 md:col-span-4">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						Tourist flow
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--pgpass-text-muted);"
				>
					<p>
						Directus field metadata drives the form: field order, options, and document upload
						categories (kid, PWD, student, senior citizen, Oriental Mindoro resident) are all
						configured in the CMS, not hardcoded.
					</p>
					<ol class="mt-4 space-y-3 pl-0">
						{#each ['Tourist registers travel and traveler details', 'Staff reviews and verifies the registration', 'QR passes are issued for verified travelers', 'Payment via LinkBiz or cash recorded by staff'] as step, i}
							<li class="flex gap-4">
								<span
									class="mt-0.5 shrink-0 font-mono text-[10px]"
									style="color: var(--pgpass-violet);">{String(i + 1).padStart(2, '0')}</span
								>
								<span>{step}</span>
							</li>
						{/each}
					</ol>
				</div>
			</div>

			<!-- Step 3: Staff workflows -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--pgpass-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--pgpass-fuchsia);"
						>03</span
					>
				</div>
				<div class="col-span-12 min-w-0 md:col-span-4">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						Staff workflows
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--pgpass-text-muted);"
				>
					<p>
						Access and actions are scoped by role. Each dashboard shows only what that role needs —
						no permission sprawl, no shared super-admin accounts.
					</p>
					<div
						class="mt-4 grid grid-cols-2 gap-3 border p-5"
						style="border-color: var(--pgpass-border); background: var(--pgpass-bg);"
					>
						{#each [['Roles', ['Administrator', 'Tourism officer', 'Verifier', 'EUF verifier', 'Hotel officer']], ['Actions', ['Review registrations', 'Verify documents', 'Assign ports', 'Scan QR codes', 'Record payments']]] as [category, items]}
							<div>
								<p class="font-mono text-[10px] uppercase" style="color: var(--pgpass-fuchsia);">
									{category}
								</p>
								<ul class="mt-2 space-y-1">
									{#each items as item}
										<li class="text-sm" style="color: var(--pgpass-text-muted);">{item}</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Step 4: Reporting -->
			<div
				class="grid grid-cols-12 gap-y-6 border-t py-12 md:gap-10 md:py-16"
				style="border-color: var(--pgpass-border);"
				use:reveal={{ delay: 0 }}
			>
				<div class="col-span-12 md:col-span-2">
					<span class="font-mono text-[11px] uppercase" style="color: var(--pgpass-accent);"
						>04</span
					>
				</div>
				<div class="col-span-12 min-w-0 md:col-span-4">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						Async reporting
					</h3>
				</div>
				<div
					class="col-span-12 space-y-4 text-base leading-relaxed md:col-span-6"
					style="color: var(--pgpass-text-muted);"
				>
					<p>
						The TypeScript report worker queues jobs, builds Excel artifacts, uploads them, and
						updates the Directus job record. All report types support async export.
					</p>
					<div class="mt-4 space-y-2">
						{#each ['Tourism reports — entered travelers by date and port', 'Gender and Development reports — statistics by date and port', 'Nationality reports — travelers grouped by nationality, date, and port', 'Philippine province reports — domestic travelers by normalized province'] as report, i}
							<div class="flex gap-3 border-b pb-2" style="border-color: var(--pgpass-border);">
								<span
									style="color: {i % 2 === 0 ? 'var(--pgpass-accent)' : 'var(--pgpass-fuchsia)'};"
									>→</span
								>
								<span class="text-sm">{report}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ── 6. DESIGN GALLERY ──────────────────────────────────────────────────── -->
<section
	class="w-full py-24 md:py-36"
	style="background: linear-gradient(160deg, #0f172a 0%, #1e1b4b 55%, #2e1065 100%);"
>
	<div class="frame">
		<div class="mb-12 md:mb-16" use:reveal>
			<p class="font-mono text-[10px] uppercase" style="color: #a78bfa;">04 / Design</p>
			<h2
				class="font-rekind mt-4 text-2xl leading-tight font-normal md:text-3xl"
				style="color: #ffffff;"
			>
				Screens
			</h2>
			<p class="mt-4 max-w-xl text-base leading-relaxed" style="color: rgba(255,255,255,0.6);">
				The full PG Pass interface spans public registration, staff dashboards, QR verification,
				payment flows, and government reporting.
			</p>
		</div>

		<div class="grid grid-cols-12 gap-3 md:gap-4">
			<!-- Row 1: Registration (7) + QR pass (5) -->
			<div class="col-span-12 md:col-span-7" use:reveal={{ delay: 0 }}>
				<div
					class="flex aspect-[16/10] w-full items-center justify-center border p-6 text-center"
					style="border-color: rgba(167,139,250,0.25); background: rgba(255,255,255,0.04);"
					data-gallery-slot="pg-pass-public-registration"
				>
					<div>
						<span class="mb-2 block font-mono text-[10px] uppercase" style="color: #818cf8;"
							>01</span
						>
						<span class="text-sm font-medium" style="color: rgba(255,255,255,0.5);"
							>PG Pass public registration</span
						>
					</div>
				</div>
			</div>
			<div class="col-span-12 md:col-span-5" use:reveal={{ delay: 60 }}>
				<div
					class="flex aspect-[16/10] w-full items-center justify-center border p-6 text-center"
					style="border-color: rgba(167,139,250,0.25); background: rgba(255,255,255,0.04);"
					data-gallery-slot="pg-pass-travel-details-qr"
				>
					<div>
						<span class="mb-2 block font-mono text-[10px] uppercase" style="color: #a78bfa;"
							>02</span
						>
						<span class="text-sm font-medium" style="color: rgba(255,255,255,0.5);"
							>PG Pass travel details and QR pass</span
						>
					</div>
				</div>
			</div>

			<!-- Row 2: Staff dashboard full width — highlighted -->
			<div class="col-span-12" use:reveal={{ delay: 0 }}>
				<div
					class="relative flex aspect-[16/7] w-full items-center justify-center overflow-hidden border p-6 text-center"
					style="border-color: rgba(232,121,249,0.3); background: rgba(255,255,255,0.06);"
					data-gallery-slot="pg-pass-staff-dashboard"
				>
					<div
						class="absolute inset-0 opacity-[0.04]"
						style="background-image: linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px); background-size: 40px 40px;"
					></div>
					<!-- gradient corner accent -->
					<div
						class="absolute top-0 left-0 h-px w-2/3"
						style="background: linear-gradient(to right, #e879f9, transparent);"
					></div>
					<div
						class="absolute right-0 bottom-0 h-px w-2/3"
						style="background: linear-gradient(to left, #818cf8, transparent);"
					></div>
					<div class="relative">
						<span class="mb-2 block font-mono text-[10px] uppercase" style="color: #e879f9;"
							>03</span
						>
						<span class="text-sm font-medium" style="color: rgba(255,255,255,0.5);"
							>PG Pass staff dashboard</span
						>
					</div>
				</div>
			</div>

			<!-- Row 3: Three equal panels -->
			{#each [{ slot: 'pg-pass-registration-review', label: 'PG Pass registration review', n: '04', c: '#818cf8' }, { slot: 'pg-pass-tourist-registry', label: 'PG Pass tourist registry', n: '05', c: '#a78bfa' }, { slot: 'pg-pass-qr-verification', label: 'PG Pass QR verification', n: '06', c: '#e879f9' }] as item, i}
				<div class="col-span-12 md:col-span-4" use:reveal={{ delay: i * 60 }}>
					<div
						class="flex aspect-[4/3] w-full items-center justify-center border p-6 text-center"
						style="border-color: rgba(167,139,250,0.2); background: rgba(255,255,255,0.03);"
						data-gallery-slot={item.slot}
					>
						<div>
							<span class="mb-2 block font-mono text-[10px] uppercase" style="color: {item.c};"
								>{item.n}</span
							>
							<span class="text-sm font-medium" style="color: rgba(255,255,255,0.45);"
								>{item.label}</span
							>
						</div>
					</div>
				</div>
			{/each}

			<!-- Row 4: Payment (5) + Reports (7) -->
			<div class="col-span-12 md:col-span-5" use:reveal={{ delay: 0 }}>
				<div
					class="flex aspect-[16/10] w-full items-center justify-center border p-6 text-center"
					style="border-color: rgba(167,139,250,0.25); background: rgba(255,255,255,0.04);"
					data-gallery-slot="pg-pass-euf-payment"
				>
					<div>
						<span class="mb-2 block font-mono text-[10px] uppercase" style="color: #c084fc;"
							>07</span
						>
						<span class="text-sm font-medium" style="color: rgba(255,255,255,0.5);"
							>PG Pass EUF payment</span
						>
					</div>
				</div>
			</div>
			<div class="col-span-12 md:col-span-7" use:reveal={{ delay: 60 }}>
				<div
					class="flex aspect-[16/10] w-full items-center justify-center border p-6 text-center"
					style="border-color: rgba(167,139,250,0.25); background: rgba(255,255,255,0.04);"
					data-gallery-slot="pg-pass-tourism-reports"
				>
					<div>
						<span class="mb-2 block font-mono text-[10px] uppercase" style="color: #a78bfa;"
							>08</span
						>
						<span class="text-sm font-medium" style="color: rgba(255,255,255,0.5);"
							>PG Pass tourism reports</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ── 7. GOVERNMENT VALUE ────────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--pgpass-surface);">
	<div class="frame grid grid-cols-12 gap-y-10 md:gap-16">
		<div class="col-span-12 md:col-span-4" use:reveal={{ delay: 0 }}>
			<p class="font-mono text-[10px] uppercase" style="color: var(--pgpass-fuchsia);">
				05 / Value
			</p>
			<h2
				class="font-rekind mt-4 text-2xl leading-tight font-normal md:text-3xl"
				style="color: var(--pgpass-text);"
			>
				Government value
			</h2>
		</div>

		<div class="col-span-12 md:col-span-8" use:reveal={{ delay: 80 }}>
			<div class="space-y-10">
				<div class="border-l-2 pl-6" style="border-color: var(--pgpass-accent);">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						A durable operational layer
					</h3>
					<p
						class="mt-3 text-base leading-relaxed md:text-lg"
						style="color: var(--pgpass-text-muted);"
					>
						For the Municipality of Puerto Galera, PG Pass can become a durable operational layer
						for tourism management. It centralizes visitor registration, creates a cleaner
						verification trail, and gives staff a shared source of truth for arrivals,
						accommodations, payment status, and traveler categories.
					</p>
				</div>

				<div class="border-l-2 pl-6" style="border-color: var(--pgpass-violet);">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						Decision support
					</h3>
					<p
						class="mt-3 text-base leading-relaxed md:text-lg"
						style="color: var(--pgpass-text-muted);"
					>
						Structured entry scans and registrations let the municipality understand arrival volume
						by port and date, traveler demographics, domestic province distribution, nationality
						mix, and fee collection workflows. That supports staffing, planning, tourism policy,
						sustainability programs, and inter-office coordination.
					</p>
				</div>

				<div class="border-l-2 pl-6" style="border-color: var(--pgpass-fuchsia);">
					<h3 class="font-rekind text-lg font-normal md:text-xl" style="color: var(--pgpass-text);">
						A reusable civic pattern
					</h3>
					<p
						class="mt-3 text-base leading-relaxed md:text-lg"
						style="color: var(--pgpass-text-muted);"
					>
						PG Pass is reusable as a civic-service pattern — digital intake, document review, QR
						credentials, payment support, and reporting without requiring each office to maintain
						separate workflows.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ── 8. CTA ─────────────────────────────────────────────────────────────── -->
<section class="w-full py-24 md:py-36" style="background: var(--pgpass-bg);">
	<div class="frame" use:reveal>
		<div class="pgpass-divider-gradient mb-16 md:mb-24"></div>

		<div class="grid grid-cols-12 gap-y-10 md:gap-10">
			<div class="col-span-12 md:col-span-7">
				<h2
					class="font-rekind text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-normal"
					style="color: var(--pgpass-text);"
				>
					Build a public-service<br />
					<span class="pgpass-gradient-text italic">workflow that works</span>
				</h2>

				<p
					class="mt-8 max-w-lg text-base leading-relaxed md:text-lg"
					style="color: var(--pgpass-text-muted);"
				>
					PG Pass shows how visitor registration, verification, payment handling, and reporting can
					work together as one practical municipal system. Let's build something similar.
				</p>

				<div class="mt-10 flex flex-wrap items-center gap-3">
					<Link
						href="mailto:jawe.ordillano@gmail.com"
						label="Discuss a civic tourism system"
						btn
						showArrow
					/>
					<Link href="/projects" label="View more project work" />
				</div>
			</div>

			<!-- Info tile -->
			<div class="col-span-12 flex items-start md:col-span-5 md:justify-end">
				<div
					class="relative w-full overflow-hidden border p-8 md:max-w-xs"
					style="border-color: var(--pgpass-border); background: var(--pgpass-surface);"
				>
					<!-- gradient top edge -->
					<div
						class="absolute top-0 left-0 h-px w-full"
						style="background: linear-gradient(to right, #4f46e5, #7c3aed, #c026d3);"
					></div>
					<p class="text-sm leading-relaxed" style="color: var(--pgpass-text-muted);">
						Digital intake, QR credentials, payment support, and reporting — one civic workflow.
					</p>
					<div class="pgpass-divider mt-6"></div>
					<p class="mt-4 font-mono text-[10px] uppercase" style="color: var(--pgpass-violet);">
						PG Pass — Puerto Galera
					</p>
				</div>
			</div>
		</div>

		<div class="pgpass-divider-gradient mt-16 md:mt-24"></div>
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
						style="--duration: 50s; color: var(--pgpass-text-subtle);"
					>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--pgpass-text-muted);">civic tourism system</span
						>
						<span style="color: var(--pgpass-fuchsia);">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--pgpass-text-muted);">built for government</span
						>
						<span style="color: var(--pgpass-violet);">◆</span>
						<span
							class="font-rekind text-lg tracking-normal normal-case"
							style="color: var(--pgpass-text-muted);">let's talk</span
						>
						<span style="color: var(--pgpass-accent);">◆</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="pgpass-divider"></div>
	</div>
</section>

<Footer theme={pgpassTheme} />
