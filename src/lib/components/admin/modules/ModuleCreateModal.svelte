<script lang="ts">
	import { page } from '$app/stores'
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Modal } from '$lib/components/admin'
	import { Button, Icon } from '$lib/components'
	import toast from 'svelte-french-toast'
	import type { createDialog } from 'svelte-headlessui'
	import Input from '$lib/components/form/Input.svelte'

	export let dialog: ReturnType<typeof createDialog>

	const submitCreateModule: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Module created successfully')
					dialog.close()
					await update()
					break
				case 'failure':
					toast.error('Failed to create module')
					break
				default:
					break
			}
		}
	}
</script>

<Modal {dialog}>
	<form method="POST" action="?/createModule" class="space-y-2" use:enhance={submitCreateModule}>
		<div class="flex w-full justify-between items-center">
			<h3 class="font-medium text-2xl">
				<span class="text-secondary-500">{$page.data.course.title}</span>
				> New module
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
		<Input label="Title" name="title" />
		<Input type="number" label="Sort Order" name="sortOrder" />
		<div class="flex w-full justify-end pt-2">
			<Button type="submit" classes="w-full" color="primary">Create module</Button>
		</div>
	</form>
</Modal>
