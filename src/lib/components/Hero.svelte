<script>
	import Link from './Link.svelte';
</script>

<section class="relative flex h-screen w-full justify-center">
	<div class="p-4 pt-28 md:px-16 md:py-16">
		<div class="flex w-full flex-col items-center gap-12">
			<div class="flex flex-col items-center gap-4">
				<p class="text-lg md:text-xl">Hi, I’m Jawe!</p>
				<h1 class="text-center text-4xl select-none md:text-7xl">
					Combining <span class="font-rekind">design</span> and
					<span class="font-rekind">code</span> to create effective web experiences
				</h1>
			</div>
			<p class="text-center text-base md:text-xl">
				I am a web developer and designer committed to creating web solutions for my clients.
			</p>
			<div class="w-full max-w-[300px]">
				<Link href="/about" label="Learn More About Me" btn showArrow class="w-full" />
			</div>
		</div>
	</div>
</section>
