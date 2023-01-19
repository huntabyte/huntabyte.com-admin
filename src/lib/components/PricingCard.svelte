<script lang="ts">
	import Button from './Button.svelte'
</script>

<div class="flex flex-col rounded-xl bg-gray-700 shadow-xl ring-1 ring-black/10">
	<div class="p-8 sm:p-10">
		<h3 class="text-lg font-semibold leading-8 tracking-tight text-primary-600" id="tier-hobby">
			Plan
		</h3>
		<div class="mt-4 flex items-baseline text-5xl font-bold tracking-tight ">
			$29
			<span class="text-lg font-semibold leading-8 tracking-normal ">/mo</span>
		</div>
		<p class="mt-6 text-base leading-7 ">
			Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.
		</p>
	</div>
	<div class="flex flex-1 flex-col p-2">
		<div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-700 p-6 sm:p-8">
			<ul class="space-y-6">
				<li class="flex items-start">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-primary-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<p class="ml-3 text-sm leading-6 ">Pariatur quod similique</p>
				</li>

				<li class="flex items-start">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-primary-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<p class="ml-3 text-sm leading-6 ">Sapiente libero doloribus modi nostrum</p>
				</li>

				<li class="flex items-start">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-primary-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<p class="ml-3 text-sm leading-6 ">Vel ipsa esse repudiandae excepturi</p>
				</li>

				<li class="flex items-start">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-primary-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<p class="ml-3 text-sm leading-6 ">Itaque cupiditate adipisci quibusdam</p>
				</li>
			</ul>
			<div class="mt-8">
				<form action="?/checkout&plan=monthly" method="POST">
					<Button type="submit" color="primary" classes="w-full">Go Pro</Button>
				</form>
			</div>
		</div>
	</div>
</div>
