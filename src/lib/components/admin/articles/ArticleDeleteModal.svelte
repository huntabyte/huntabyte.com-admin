<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Button } from '$lib/components'
	import { Modal } from '$lib/components/admin'

	import type { createDialog } from 'svelte-headlessui'
	import toast from 'svelte-french-toast'
	import type { Article } from '@prisma/client'

	export let dialog: ReturnType<typeof createDialog>
	export let article: Article

	const submitDeleteModal: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'failure':
					toast.error('Failed to update module')
					break
				case 'redirect':
					toast.success('Article Deleted Successfully')
					dialog.close()
					await update()
				default:
					break
			}
		}
	}
</script>

<Modal {dialog}>
	<h1 class="text-xl font-medium text-center">Are you sure you want to delete {article.title}?</h1>
	<form
		method="POST"
		action="?/deleteArticle"
		class="flex justify-center gap-2 w-full py-4"
		use:enhance={submitDeleteModal}
	>
		<Button type="button" on:click={() => dialog.close()}>Cancel</Button>
		<Button type="submit" color="error">Delete</Button>
	</form>
</Modal>
