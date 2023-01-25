<script lang="ts">
	import Logo from './Logo.svelte'
	import { page } from '$app/stores'
	import Button from './Button.svelte'

	const navigation = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Writing',
			href: '/blog'
		},
		{
			label: 'Courses',
			href: '/courses'
		},
		{
			label: 'Account',
			href: '/account'
		}
	]

	const activeNavItem = 'text-primary-500 border-b-2 border-primary-500'
	const activeMobileNavItem = 'bg-gray-600 border-primary-500 text-primary-700 '
</script>

<nav class="bg-inherit">
	<div class="mx-auto max-w-7xl py-2">
		<div class="relative flex h-16 justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a href="/" class="w-9 flex items-center text-primary-600">
						<Logo />
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-6">
					{#each navigation as navItem}
						<a
							href={navItem.href}
							class="inline-flex items-center px-1 pt-1 font-medium text-gray-50 hover:text-primary-500 border-b-2 {$page
								.url.pathname === navItem.href
								? activeNavItem
								: 'border-transparent'}">{navItem.label}</a
						>
					{/each}
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<div class="relative ml-3">
					{#if $page.data.session}
						<form action="/logout">
							<Button type="submit" color="primary" size="sm">Logout</Button>
						</form>
					{:else}
						<Button href="/login" color="primary" size="sm">Login</Button>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class="sm:hidden" id="mobile-menu">
		<div class="space-y-1 pt-2 pb-4">
			{#each navigation as navItem}
				<a
					href={navItem.href}
					class="block border-l-4 text-gray-50 hover:bg-gray-700 py-2 pl-3 pr-4 text-base font-medium  hover:border-primary-500 hover:text-primary-500 {$page
						.url.pathname === navItem.href
						? activeMobileNavItem
						: ''}">{navItem.label}</a
				>
			{/each}
		</div>
	</div>
</nav>
