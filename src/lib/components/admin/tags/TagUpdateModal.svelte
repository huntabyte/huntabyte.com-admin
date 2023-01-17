<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Button, Icon } from '$lib/components'
	import { Input } from '$lib/components/form'
	import { Modal } from '$lib/components/admin'

	import type { createDialog } from 'svelte-headlessui'
	import toast from 'svelte-french-toast'
	import type { Tag } from '@prisma/client'

	export let dialog: ReturnType<typeof createDialog>
	export let currentTag: Tag | null = null

	const submitUpdateTag: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Tag deleted successfully')
					dialog.close()
					await update()
					break
				case 'failure':
					toast.error('Failed to update tag')
					break
				default:
					break
			}
		}
	}
</script>

<Modal {dialog}>
	<form method="POST" action="?/updateTag" class="space-y-2" use:enhance={submitUpdateTag}>
		<div class="flex w-full justify-between items-center">
			<h3 class="font-medium text-lg">
				<span class="text-secondary-500">Tags</span>
				> Update Tag > {currentTag?.name}
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
		<Input label="Title" name="title" value={currentTag?.name ?? ''} />

		<div class="flex w-full justify-end pt-2 gap-2">
			<Button
				type="submit"
				formaction="?/deleteTag&id={currentTag?.id}"
				classes="w-full"
				color="error">Delete tag</Button
			>
			<Button type="submit" classes="w-full" color="primary">Update tag</Button>
		</div>
	</form>
</Modal>
