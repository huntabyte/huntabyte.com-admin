<script lang="ts">
	import { page } from '$app/stores'
	import { Button, Icon } from '$lib/components'
	import { DropdownMenuButton } from '$lib/components/admin'
	import type { DropdownGroup } from '$lib/types'
	import type { Lesson } from '@prisma/client'
	import type { EventHandler } from 'svelte/elements'

	export let startLessonDrag: EventHandler
	export let lessonDragDisabled: boolean
	export let lesson: Lesson

	export let groups: DropdownGroup[] = [[{ icon: 'ph:pencil', label: 'Rename Lesson' }]]
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
	<p>{lesson.title}</p>
</div>
<div class="flex items-center gap-2">
	<Button href="/admin/courses/{$page.data.course.id}/lessons/{lesson.id}" outline size="sm"
		>Edit lesson</Button
	>
	<DropdownMenuButton icon variant="ghost" color="default" {groups}>
		<Icon icon="ph:dots-three-outline-vertical" />
	</DropdownMenuButton>
</div>
