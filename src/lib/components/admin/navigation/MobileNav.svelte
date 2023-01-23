<script lang="ts">
	import { page } from '$app/stores'
	import { mobileMenuDialog as dialog, navigation } from '$lib/ui/admin'
	import Transition from 'svelte-transition'
	import { Icon } from '$lib/components'
	import Logo from '../../Logo.svelte'

	export const mobileNavClasses = {
		active: {
			link: 'bg-gray-900 text-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md',
			icon: 'text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 text-lg'
		},
		default: {
			link: 'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md',
			icon: 'text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 text-lg'
		}
	}
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
				<div class="relative flex w-full max-w-[16rem] flex-1 flex-col bg-gray-800">
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
								<div class="w-8 h-auto">
									<Logo />
								</div>
							</div>
							<nav class="mt-5 space-y-1 px-2">
								{#each navigation as navItem}
									<a
										href={navItem.href}
										class={$page.url.pathname === navItem.href
											? mobileNavClasses.active.link
											: mobileNavClasses.default.link}
									>
										<Icon
											classes={$page.url.pathname === navItem.href
												? mobileNavClasses.active.icon
												: mobileNavClasses.default.icon}
											icon={navItem.icon}
										/>
										<div>
											{navItem.name}
										</div>
									</a>
								{/each}
							</nav>
						</div>
						<div class="flex flex-shrink-0 bg-gray-700 p-4">
							<a href="/admin/account" class="group block flex-shrink-0">
								<div class="flex items-center">
									<div>
										<img
											class="inline-block h-10 w-10 rounded-full"
											src="https://ui-avatars.com/api/?name=Admin"
											alt=""
										/>
									</div>
									<div class="ml-3">
										<p class="text-base font-medium text-white">Admin</p>
										<p class="text-sm font-medium text-gray-400 group-hover:text-gray-300">
											Account Settings
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
