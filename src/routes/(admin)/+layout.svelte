<script lang="ts">
	import { dialog, adminNavigation } from '$lib/stores/nav'
	import MobileNav from '$lib/components/admin/MobileNav.svelte'
	import '../../admin.postcss'
	import Logo from '$lib/components/Logo.svelte'

	const activeNavClass =
		'bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
	const defaultNavClass =
		'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
</script>

<div class="flex h-full">
	<MobileNav />

	<div class="hidden lg:flex lg:flex-shrink-0">
		<div class="flex w-20 flex-col">
			<div class="flex min-h-0 flex-1 flex-col overflow-y-auto bg-secondary-600">
				<div class="flex-1">
					<div class="flex items-center justify-center bg-secondar-700 py-4">
						<span class="w-8">
							<Logo />
						</span>
					</div>
					<nav aria-label="Sidebar" class="flex flex-col items-center space-y-3 py-6">
						{#each adminNavigation as navItem}
							<a
								href={navItem.href}
								class="flex items-center rounded-lg p-4 text-gray-900 hover:bg-secondary-700"
							>
								<!-- Heroicon name: outline/home -->
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
										d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>
								<span class="sr-only">{navItem.name}</span>
							</a>
						{/each}
					</nav>
				</div>
				<div class="flex flex-shrink-0 pb-5">
					<a href="/admin/account" class="w-full flex-shrink-0 flex justify-center">
						<div class="w-10">
							<Logo />
						</div>
						<div class="sr-only">
							<p>Emily Selman</p>
							<p>Account settings</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="flex min-w-0 flex-1 flex-col overflow-hidden">
		<!-- Mobile top navigation -->
		<div class="lg:hidden">
			<div class="flex items-center justify-between bg-primary-600 py-2 px-4 sm:px-6 lg:px-8">
				<div class="w-8">
					<Logo />
				</div>
				<div>
					<button
						class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-600 text-gray-900 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						on:click={dialog.open}
					>
						<span class="sr-only">Open sidebar</span>
						<!-- Heroicon name: outline/bars-3 -->
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
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<main class="flex flex-1 overflow-hidden">
			<!-- Primary column -->
			<section
				aria-labelledby="primary-heading"
				class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
			>
				<h1 id="primary-heading" class="sr-only">Account</h1>
				<slot />
			</section>

			<!-- Secondary column (hidden on smaller screens) -->
			<aside class="hidden lg:order-first lg:block lg:flex-shrink-0">
				<div
					class="relative flex h-full w-56 flex-col overflow-y-auto border-r border-gray-200 bg-white"
				>
					<!-- Your content -->
				</div>
			</aside>
		</main>
	</div>
</div>
