<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Modal } from '$lib/components/admin'
	import { Button } from '$lib/components'
	import toast from 'svelte-french-toast'
	import type { createDialog } from 'svelte-headlessui'
	import Input from '$lib/components/form/Input.svelte'
	import PageHeading from '../PageHeading.svelte'
	import type { Course } from '@prisma/client'

	export let course: Course

	export let dialog: ReturnType<typeof createDialog>

	const submitUpdateCourse: SubmitFunction = () => {
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
	<form action="?/updateCourse" method="POST" use:enhance={submitUpdateCourse}>
		<PageHeading>
			<h2 slot="heading" class="text-3xl font-bold">Update Course</h2>
			<div slot="actions" class="space-x-2">
				<Button type="button" color="error" outline on:click={dialog.close}>Cancel</Button>
				<Button type="submit">Save</Button>
			</div>
		</PageHeading>
		<div class="pt-8 space-y-4">
			<Input label="Title *" name="title" classes="max-w-lg" value={course.title} />
			<Input label="Slug *" name="slug" classes="max-w-lg" value={course.slug} />
			<Input
				label="Stripe ID"
				name="stripeProductId"
				classes="max-w-lg"
				value={course.stripeProductId}
			/>
		</div>
	</form>
</Modal>
