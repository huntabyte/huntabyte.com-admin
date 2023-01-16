<script lang="ts">
	import { Transition } from 'svelte-transition'
	import type { createDialog } from 'svelte-headlessui'

	export let dialog: ReturnType<typeof createDialog>
</script>

<Transition show={$dialog.expanded}>
	<div
		class="relative z-10"
		aria-labelledby="slide-over-title"
		role="dialog"
		aria-modal="true"
		use:dialog.modal
	>
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0" />

		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
					<Transition
						enter="transform transition ease-in-out duration-500"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-500"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div class="pointer-events-auto w-screen max-w-md">
							<form class="flex h-full flex-col divide-y divide-gray-200 bg-gray-800 shadow-xl">
								<div class="h-0 flex-1 overflow-y-auto">
									<div class="bg-primary-700 py-6 px-4 sm:px-6">
										<div class="flex items-center justify-between">
											<span class="text-lg font-medium text-white">
												<slot name="heading" />
											</span>
											<div class="ml-3 flex h-7 items-center">
												<button
													type="button"
													class="rounded-md bg-primary-700 text-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
													on:click={dialog.close}
												>
													<span class="sr-only">Close panel</span>
													<svg
														class="h-6 w-6"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M6 18L18 6M6 6l12 12"
														/>
													</svg>
												</button>
											</div>
										</div>
										<div class="mt-1">
											<span class="text-sm text-primary-200">
												<slot name="subheading" />
											</span>
										</div>
									</div>
									<div class="flex flex-1 flex-col justify-between">
										<div class="divide-y divide-gray-200 px-4 sm:px-6">
											<div class="space-y-6 pt-6 pb-5">
												<slot name="content" />
											</div>
										</div>
									</div>
								</div>
								<div class="flex flex-shrink-0 justify-end px-4 py-4 gap-4">
									<slot name="actions" />
								</div>
							</form>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	</div>
</Transition>
