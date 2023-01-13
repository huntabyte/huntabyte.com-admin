<script lang="ts">
	import { page } from '$app/stores'
	import Logo from '$lib/components/Logo.svelte'
	import { navigation, navClasses } from '$lib/ui/admin'
	import Icon from '../Icon.svelte'
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
				{#each navigation as navItem}
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
			<a href="/admin/account" class="group block w-full flex-shrink-0">
				<div class="flex items-center">
					<div>
						<img
							class="inline-block h-9 w-9 rounded-full"
							src="https://ui-avatars.com/api/?name=Admin"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-white">Admin</p>
						<p class="text-xs font-medium text-gray-300 group-hover:text-gray-200">
							Account Settings
						</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
