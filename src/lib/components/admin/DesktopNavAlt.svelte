<script lang="ts">
	import Logo from '../Logo.svelte'
	import { navigation } from '$lib/ui/admin'
	import Icon from '../Icon.svelte'
</script>

<div class="hidden lg:flex lg:flex-shrink-0">
	<div class="flex w-20 flex-col">
		<div class="flex min-h-0 flex-1 flex-col overflow-y-auto bg-primary-600">
			<div class="flex-1">
				<div class="flex items-center justify-center bg-primary-700 py-4">
					<div class="w-10">
						<Logo />
					</div>
				</div>
				<nav aria-label="Sidebar" class="flex flex-col items-center space-y-3 py-6">
					{#each navigation as navItem}
						<a
							href={navItem.href}
							class="flex items-center rounded-lg p-4 text-primary-200 hover:bg-primary-700"
						>
							<Icon icon={navItem.icon} classes="text-2xl text-gray-900" />
							<span class="sr-only">{navItem.name}</span>
						</a>
					{/each}
				</nav>
			</div>
			<div class="flex flex-shrink-0 pb-5">
				<a href="#" class="w-full flex-shrink-0">
					<img
						class="mx-auto block h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<div class="sr-only">
						<p>Emily Selman</p>
						<p>Account settings</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
