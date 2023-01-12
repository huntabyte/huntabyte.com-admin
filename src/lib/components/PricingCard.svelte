<script lang="ts">
</script>

<div class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
	<div class="p-8 sm:p-10">
		<h3 class="text-lg font-semibold leading-8 tracking-tight text-primary-600" id="tier-hobby">
			Plan
		</h3>
		<div class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
			$29
			<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500">/mo</span>
		</div>
		<p class="mt-6 text-base leading-7 text-gray-600">
			Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.
		</p>
	</div>
	<div class="flex flex-1 flex-col p-2">
		<div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
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
					<p class="ml-3 text-sm leading-6 text-gray-600">Pariatur quod similique</p>
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
					<p class="ml-3 text-sm leading-6 text-gray-600">Sapiente libero doloribus modi nostrum</p>
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
					<p class="ml-3 text-sm leading-6 text-gray-600">Vel ipsa esse repudiandae excepturi</p>
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
					<p class="ml-3 text-sm leading-6 text-gray-600">Itaque cupiditate adipisci quibusdam</p>
				</li>
			</ul>
			<div class="mt-8">
				<form action="?/checkout&plan=monthly" method="POST">
					<button
						type="submit"
						class="btn-primary w-full justify-center"
						aria-describedby="tier-hobby">Go Pro</button
					>
				</form>
			</div>
		</div>
	</div>
</div>
