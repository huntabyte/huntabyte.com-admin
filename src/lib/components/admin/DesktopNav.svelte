<script lang="ts">
	import { page } from '$app/stores'
	import Logo from '$lib/components/Logo.svelte'
	import { adminNavigation } from '$lib/ui/admin'
	import Icon from '../Icon.svelte'

	const navClasses = {
		active: {
			link: 'bg-gray-900 text-white group flex items-center px-3 py-3 text-sm font-medium rounded-md flex items-center',
			icon: 'text-gray-300 mr-3 flex-shrink-0 text-lg'
		},
		default: {
			link: 'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-3 py-3 text-sm font-medium rounded-md flex items-center',
			icon: 'text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 text-lg'
		}
	}
</script>

<div class="hidden md:fixed md:inset-y-0 md:flex md:w-52 md:flex-col">
	<div class="flex min-h-0 flex-1 flex-col bg-gray-800">
		<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
			<div class="flex flex-shrink-0 items-center px-4">
				<div class="w-10 text-gray-50">
					<Logo />
				</div>
			</div>
			<nav class="mt-5 flex-1 space-y-1 px-2">
				{#each adminNavigation as navItem}
					<a
						href={navItem.href}
						class={$page.url.pathname === navItem.href
							? navClasses.active.link
							: navClasses.default.link}
					>
						<Icon
							classes={$page.url.pathname === navItem.href
								? navClasses.active.icon
								: navClasses.default.icon}
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
			<a href="#" class="group block w-full flex-shrink-0">
				<div class="flex items-center">
					<div>
						<img
							class="inline-block h-9 w-9 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-white">Tom Cook</p>
						<p class="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
