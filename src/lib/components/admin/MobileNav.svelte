<script lang="ts">
	import { mobileMenuDialog as dialog } from '$lib/ui/admin'
	import Transition from 'svelte-transition'

	const activeNavClass =
		'bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
	const defaultNavClass =
		'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'

	const activeNavIconClass = 'text-gray-400 group-hover:text-gray-300'
	const defaultNavIconClass = 'text-gray-400 group-hover:text-gray-300'
</script>

<Transition show={$dialog.expanded}>
	<div class="relative z-40 md:hidden" role="dialog" aria-modal="true" use:dialog.modal>
		<Transition
			enter="transition-opacity ease-linear duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity ease-linear duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
		</Transition>

		<div class="fixed inset-0 z-40 flex">
			<Transition
				enter="transition ease-in-out duration-300 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
			>
				<div class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
					<Transition
						enter="ease-in-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div class="absolute top-0 right-0 -mr-12 pt-2">
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

						<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
							<div class="flex flex-shrink-0 items-center px-4">
								<img
									class="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
							</div>
							<nav class="mt-5 space-y-1 px-2">
								<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
								<a
									href="#"
									class="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<!--
              Heroicon name: outline/home

              Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300"
            -->
									<svg
										class="text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
									Dashboard
								</a>

								<a
									href="#"
									class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<!-- Heroicon name: outline/users -->
									<svg
										class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
											d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
										/>
									</svg>
									Team
								</a>

								<a
									href="#"
									class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<!-- Heroicon name: outline/folder -->
									<svg
										class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
											d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
										/>
									</svg>
									Projects
								</a>

								<a
									href="#"
									class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<!-- Heroicon name: outline/calendar -->
									<svg
										class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
											d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
										/>
									</svg>
									Calendar
								</a>

								<a
									href="#"
									class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<!-- Heroicon name: outline/inbox -->
									<svg
										class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
									Documents
								</a>

								<a
									href="#"
									class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<!-- Heroicon name: outline/chart-bar -->
									<svg
										class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
											d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
										/>
									</svg>
									Reports
								</a>
							</nav>
						</div>
						<div class="flex flex-shrink-0 bg-gray-700 p-4">
							<a href="#" class="group block flex-shrink-0">
								<div class="flex items-center">
									<div>
										<img
											class="inline-block h-10 w-10 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</div>
									<div class="ml-3">
										<p class="text-base font-medium text-white">Tom Cook</p>
										<p class="text-sm font-medium text-gray-400 group-hover:text-gray-300">
											View profile
										</p>
									</div>
								</div>
							</a>
						</div>
					</Transition>
				</div>

				<div class="w-14 flex-shrink-0">
					<!-- Force sidebar to shrink to fit close icon -->
				</div>
			</Transition>
		</div>
	</div>
</Transition>
