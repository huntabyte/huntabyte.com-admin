<script>
	import Button from '$lib/components/Button.svelte'
	import PricingCard from '$lib/components/PricingCard.svelte'
</script>

<div class="bg-gray-900 pb-20">
	<div class="relative overflow-hidden pt-20 pb-96 lg:pt-20">
		<div>
			<img
				class="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
				src=""
				alt=""
			/>
		</div>
		<div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-4xl">
				<h2 class="text-lg font-semibold leading-8 text-primary-400">Pricing</h2>
				<p class="mt-2 text-4xl font-bold tracking-tight text-white">
					Go <span class="text-primary-600">Pro</span> and get complete access
					<br class="hidden sm:inline lg:hidden" />to <em>all</em> courses
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-200">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit
					doloribus molestiae voluptatum.
				</p>
			</div>
		</div>
	</div>

	<div class="flow-root">
		<div class="relative -mt-80">
			<div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
					<PricingCard />
					<PricingCard />
				</div>
			</div>
		</div>
		<div class="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-md lg:max-w-4xl">
				<div
					class="flex flex-col gap-6 rounded-xl p-8 ring-1 ring-gray-200 sm:p-10 lg:flex-row lg:items-center lg:gap-8"
				>
					<div class="lg:min-w-0 lg:flex-1">
						<h3 class="text-lg font-semibold leading-8 tracking-tight text-primary-600">
							A La Carte
						</h3>
						<div class="mt-2 text-base leading-7 text-gray-200">
							You can also purchase single courses which you will own for life, for <span
								class="font-semibold text-gray-50">$20</span
							>.
						</div>
					</div>
					<div>
						<Button href="/courses" outline>Browse Courses</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
