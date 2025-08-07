<script>
	import Logo from '$lib/icons/Logo.svelte';
	import Button from './Button.svelte';
	import Link from './Link.svelte';
	import SectionTitle from './SectionTitle.svelte';

	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer class="relative flex w-full justify-center">
	<div
		class="flex h-full min-h-[250px] w-full flex-col items-center justify-between border-t border-gray-300 p-4 md:px-16 md:py-16"
	>
		<div
			class="flex w-full flex-1 flex-col items-center justify-between gap-8 md:flex-row md:items-start md:justify-between md:gap-0"
		>
			<div
				class="flex w-full flex-col items-center gap-8 md:h-full md:items-start md:justify-between"
			>
				<div class="flex flex-col items-center md:items-start md:gap-2">
					<h1 class="text-lg text-gray-500 md:text-4xl">Let's Work Together</h1>
					<Link
						class="self-start !p-0 text-3xl md:text-5xl"
						href="/"
						label="jawe.ordillano@gmail.com"
					/>
				</div>
				<div class="flex flex-wrap justify-center gap-1 md:justify-start">
					<p class="mt-auto">© {currentYear} Jerwin Ordillano</p>
					<span>-</span>
					<Link class="self-start !p-0" href="/" label="Privacy" />
				</div>
			</div>
			<div class="flex w-full flex-col items-center gap-8 md:items-end md:justify-between">
				<div class="flex items-center justify-center md:justify-end">
					<Logo class="!size-[100px]" />
				</div>

				<Button label="Back to Top" onclick={scrollToTop} showArrow />
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	@reference "tailwindcss";

	footer > div {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
	}
</style>
