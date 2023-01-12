<script lang="ts">
	import { dialog } from '$lib/stores/nav'
	import Transition from 'svelte-transition'
	import Logo from '$lib/components/Logo.svelte'
</script>

<Transition show={$dialog.expanded}>
	<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true" use:dialog.modal>
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
									<span class="w-8">
										<Logo />
									</span>
								</div>
								<nav aria-label="Sidebar" class="mt-5">
									<div class="space-y-1 px-2">
										<a
											href="#"
											class="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
										>
											<svg
												class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
													d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
												/>
											</svg>
											Home
										</a>

										<a
											href="#"
											class="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
										>
											<svg
												class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
													d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
												/>
											</svg>
											Trending
										</a>

										<a
											href="#"
											class="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
										>
											<svg
												class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
													d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
												/>
											</svg>
											Bookmarks
										</a>

										<a
											href="#"
											class="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
										>
											<svg
												class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
													d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
												/>
											</svg>
											Messages
										</a>

										<a
											href="#"
											class="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
										>
											<svg
												class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
													d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
												/>
											</svg>
											Profile
										</a>
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
												Emily Selman
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

					<div class="w-14 flex-shrink-0" aria-hidden="true" />
				</Transition>
			</div>
		</Transition>
	</div>
</Transition>
