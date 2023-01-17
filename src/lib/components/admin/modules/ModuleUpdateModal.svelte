<script lang="ts">
	import { page } from '$app/stores'
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Button, Icon } from '$lib/components'
	import { Input } from '$lib/components/form'
	import { Modal } from '$lib/components/admin'

	import type { createDialog } from 'svelte-headlessui'
	import toast from 'svelte-french-toast'
	import type { Module } from '@prisma/client'

	export let dialog: ReturnType<typeof createDialog>
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
