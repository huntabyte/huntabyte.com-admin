<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import { page } from '$app/stores'
	import { Button, Icon } from '$lib/components'
	import { DropdownMenuButton } from '$lib/components/admin'
	import Badge from '$lib/components/Badge.svelte'
	import Input from '$lib/components/form/Input.svelte'
	import { trpc } from '$lib/trpc/client'
	import type { Lesson } from '@prisma/client'
	import toast from 'svelte-french-toast'
	import type { EventHandler } from 'svelte/elements'

	export let startLessonDrag: EventHandler
	export let lessonDragDisabled: boolean
	export let lesson: Lesson

	let renameLesson: boolean = false

	type LessonDropdownGroup = {
		icon: string
		label: 'Edit Lesson' | 'Delete Lesson'
	}[]

	type LessonDropdownEvent = {
		selected: 'Edit Lesson' | 'Delete Lesson'
	}

	const lessonDropdownGroups: LessonDropdownGroup[] = [
		[
			{ icon: 'ph:pencil', label: 'Edit Lesson' },
			{ icon: 'ph:trash', label: 'Delete Lesson' }
		]
	]

	const lessonDropdownOnSelect: EventHandler<Event, HTMLButtonElement> = async (e: Event) => {
		switch ((e as CustomEvent<LessonDropdownEvent>).detail.selected) {
			case 'Edit Lesson':
				renameLesson = true

				break
			case 'Delete Lesson':
				const res = await trpc($page)
					.lessons.delete.mutate(lesson.id)
					.catch((err) => {
						toast.error('Could not delete lesson.')
						return
					})
				toast.success('Lesson deleted!')
				await invalidateAll()
				break
		}
	}

	const badgeMap: { [key: string]: 'primary' | 'secondary' | 'default' } = {
		PUBLISHED: 'primary',
		DRAFT: 'secondary',
		ARCHIVED: 'default'
	}

	const submitRenameLesson: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Successfully renamed lesson')
					await update()
					renameLesson = false
					break
				case 'failure':
					toast.error('Could not rename lesson')
					break
				case 'error':
					toast.error('An unexpected error occurred')
					break
			}
		}
	}
</script>

<div class="flex gap-4 items-center">
	<div
		on:mousedown|preventDefault={startLessonDrag}
		on:keydown|preventDefault={startLessonDrag}
		on:touchstart|preventDefault={startLessonDrag}
		class={lessonDragDisabled ? 'cursor-grab' : 'cursor-grabbing'}
	>
		<Icon icon="ph:dots-six-vertical-fill" />
	</div>
	{#if renameLesson}
		<form
			action="?/updateLesson&lessonId={lesson.id}"
			method="POST"
			class="flex items-center gap-2"
			use:enhance={submitRenameLesson}
		>
			<div class="flex items-center">
				<Input type="text" name="title" id="title" inputSize="sm" value={lesson.title} />
			</div>
			<div class="flex items-center gap-1">
				<Button type="submit" color="primary" size="sm">Save</Button>
				<Button type="button" color="error" size="sm" on:click={() => (renameLesson = false)}
					>Cancel</Button
				>
			</div>
		</form>
	{:else}
		<p>{lesson.title}</p>
	{/if}

	<Badge color={badgeMap[lesson.status]} size="sm">
		{lesson.status}
	</Badge>
</div>
<div class="flex items-center gap-2">
	<Button href="/admin/courses/{$page.data.course.id}/lessons/{lesson.id}" outline size="sm"
		>Edit lesson</Button
	>
	<DropdownMenuButton
		icon
		variant="ghost"
		color="default"
		groups={lessonDropdownGroups}
		onSelect={lessonDropdownOnSelect}
	>
		<Icon icon="ph:dots-three-outline-vertical" />
	</DropdownMenuButton>
</div>
