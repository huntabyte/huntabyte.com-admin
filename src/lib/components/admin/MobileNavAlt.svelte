<script lang="ts">
	import { Transition } from 'svelte-transition'
	import { mobileAltMenuDialog as dialog, navigation } from '$lib/ui/admin'
	import Icon from '../Icon.svelte'
	import Logo from '../Logo.svelte'
</script>

<Transition show={$dialog.expanded}>
	<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
		<Transition
			enter="transition-opacity ease-linear duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity ease-linear duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />

			<div class="fixed inset-0 z-40 flex">
				<Transition
					enter="transition ease-in-out duration-300 transform"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
				>
					<div class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
						<Transition
							enter="ease-in-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in-out duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div class="absolute top-0 right-0 -mr-12 pt-4">
								<button
									type="button"
									class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
									on:click={dialog.close}
								>
									<span class="sr-only">Close sidebar</span>
									<svg
										class="h-6 w-6 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>

							<div class="pt-5 pb-4">
								<div class="flex flex-shrink-0 items-center px-4">
									<div class="w-8 text-primary-600">
										<Logo />
									</div>
								</div>
								<nav aria-label="Sidebar" class="mt-5">
									<div class="space-y-1 px-2">
										{#each navigation as navItem}
											<a
												href={navItem.href}
												class="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
											>
												<Icon icon={navItem.icon} />
												{navItem.name}
											</a>
										{/each}
									</div>
								</nav>
							</div>
							<div class="flex flex-shrink-0 border-t border-gray-200 p-4">
								<a href="#" class="group block flex-shrink-0">
									<div class="flex items-center">
										<div>
											<img
												class="inline-block h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div class="ml-3">
											<p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
												Admin
											</p>
											<p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
												Account Settings
											</p>
										</div>
									</div>
								</a>
							</div>
						</Transition>
					</div>

					<div class="w-14 flex-shrink-0" aria-hidden="true">
						<!-- Force sidebar to shrink to fit close icon -->
					</div>
				</Transition>
			</div>
		</Transition>
	</div>
</Transition>
