<script>
	import HeroImage from '$lib/components/HeroImage.svelte';
</script>

<main>
	<div class="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="lg:grid lg:grid-cols-2 lg:gap-8">
				<div
					class="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
				>
					<div class="lg:py-24">
						<div class="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
							<a
								href="#"
								class="flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
							>
								<span
									class="rounded-full bg-primary-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white"
									>Coming Soon</span
								>
								<span class="ml-4 text-sm">Learn more</span>
								<!-- Heroicon name: mini/chevron-right -->
								<svg
									class="ml-2 h-5 w-5 text-gray-100"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</div>
						<h1
							class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl"
						>
							<span class="block">Unleash the full potential of</span>
							<span class="block text-primary-400">Svelte & SvelteKit.</span>
						</h1>
						<p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
							Build practical, real-world projects with SvelteKit and LearnSvelte.com. Our immersive
							courses will guide you through every step of the process, providing you with the
							skills and knowledge you need to succeed as a SvelteKit developer.
						</p>
						<div class="mt-10 sm:mt-12">
							<form action="#" class="sm:mx-auto sm:max-w-xl lg:mx-0">
								<div class="sm:flex">
									<div class="min-w-0 flex-1">
										<label for="email" class="sr-only">Email address</label>
										<input
											id="email"
											type="email"
											placeholder="Enter your email"
											class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-gray-900"
										/>
									</div>
									<div class="mt-3 sm:mt-0 sm:ml-3">
										<button
											type="submit"
											class="block w-full rounded-md bg-primary-500 py-3 px-4 font-medium text-white shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-gray-900"
											>Start free trial</button
										>
									</div>
								</div>
								<p class="mt-3 text-sm text-gray-300 sm:mt-4">
									Start your free 14-day trial, no credit card necessary. By providing your email,
									you agree to our <a href="#" class="font-medium text-white">terms of service</a>.
								</p>
							</form>
						</div>
					</div>
				</div>
				<div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
					<div class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
						<!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
						<HeroImage />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- More main page content here... -->
</main>
