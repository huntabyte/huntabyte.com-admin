<script lang="ts">
	import { Badge } from '$lib/components'
	import type { Module } from '@prisma/client'
	import type { createDialog } from 'svelte-headlessui'

	export let currentModule: Module | null = null
	export let dialog: ReturnType<typeof createDialog>
	export let module: Module
</script>

<li>
	<button
		class="w-full hover:bg-gray-800"
		on:click={() => {
			currentModule = module
			dialog.open()
		}}
	>
		<div class="flex items-center py-4 px-4">
			<div class="flex min-w-0 flex-1 items-center">
				<div class="min-w-0 flex-1 grid grid-cols-2 gap-4 items-center">
					<div>
						<p class="truncate font-medium text-primary-600 text-left">{module.title}</p>
						<p class="mt-2 flex items-center text-sm text-gray-100">
							<span class="truncate">Hunter Johnston</span>
						</p>
					</div>
					<div class="flex gap-4 items-center justify-self-end">
						{#if module.status === 'PUBLISHED'}
							<Badge color="primary">
								{module.status}
							</Badge>
						{:else if module.status === 'DRAFT'}
							<Badge color="secondary">
								{module.status}
							</Badge>
						{:else if module.status === 'ARCHIVED'}
							<Badge color="default">
								{module.status}
							</Badge>
						{/if}
						<div>
							<svg
								class="h-5 w-5 text-gray-300"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</button>
</li>
