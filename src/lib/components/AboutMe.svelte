<script>
	import Me from '$lib/icons/Me.svelte';
	import Link from './Link.svelte';
	import SectionTitle from './SectionTitle.svelte';
</script>

<SectionTitle>About Me</SectionTitle>

<section class="relative flex w-full justify-center">
	<div class="items-start border-t border-gray-300 px-16 py-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="flex flex-col gap-12">
				<p class="text-xl leading-relaxed">
					Hi, I’m Jerwin Ordillano. I’m a Computer Engineer with over 6 years of experience building
					websites using Svelte, TypeScript, and WordPress. I love bringing ideas to life with clean
					code and thoughtful design making things that are fast, modern, and easy to use.
					<br />
					<br />
					Outside of work, I’m probably on a motorcycle road trip or relaxing with some crochet. I enjoy
					mixing creativity with a bit of adventure, and I bring that same energy into every project
					I work on.
				</p>
				<div class="w-[300px]">
					<Link href="/about" label="More About Me" btn showArrow class="w-full" />
				</div>
			</div>
			<div class="relative">
				<Me class="absolute bottom-0 left-0 fill-gray-700"></Me>
			</div>
		</div>
	</div>
</section>
