<script lang="ts">
	import { page } from '$app/stores'
	import Badge from '$lib/components/Badge.svelte'
	import type { Module } from '@prisma/client'
	import Modal from './Modal.svelte'
	import { updateModuleModal as dialog } from '$lib/ui/admin'
	import { enhance, type SubmitFunction } from '$app/forms'
	import Button from '../Button.svelte'
	import Icon from '../Icon.svelte'
	import Input from '../form/Input.svelte'
	import toast from 'svelte-french-toast'
	export let modules: Module[]

	export let currentModule: Module | null = null

	const submitUpdateModule: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Module deleted successfully')
					dialog.close()
					await update()
					break
				case 'failure':
					toast.error('Failed to update module')
					break
				default:
					break
			}
		}
	}
</script>

<Modal {dialog}>
	<form method="POST" action="?/createModule" class="space-y-2" use:enhance={submitUpdateModule}>
		<div class="flex w-full justify-between items-center">
			<h3 class="font-medium text-lg">
				<span class="text-secondary-500">{$page.data.course.title}</span>
				> Update Module > {currentModule?.title}
			</h3>
			<Button
				type="button"
				outline
				classes="bg-transparent outline-none border-none text-gray-50"
				on:click={dialog.close}
			>
				<Icon icon="ph:x" />
			</Button>
		</div>
		<Input label="Title" name="title" value={currentModule?.title ?? ''} />
		<Input
			type="number"
			label="Sort Order"
			name="sortOrder"
			value={currentModule?.sortOrder ?? 0}
		/>
		<div class="flex w-full justify-end pt-2 gap-2">
			<Button
				type="submit"
				formaction="?/deleteModule&id={currentModule?.id}"
				classes="w-full"
				color="error">Delete module</Button
			>
			<Button type="submit" classes="w-full" color="primary">Update module</Button>
		</div>
	</form>
</Modal>

<div class="shadow border-t-2 border-gray-600">
	<ul class="divide-y-2 divide-gray-500 mt-2">
		{#each modules as module}
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
		{/each}
	</ul>
</div>
