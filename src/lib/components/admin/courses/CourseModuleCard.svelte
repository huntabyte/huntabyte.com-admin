<script lang="ts">
	import { page } from '$app/stores'
	import { Button, Icon } from '$lib/components'
	import Input from '$lib/components/form/Input.svelte'
	import type { ModuleWithLessons } from '$lib/prisma.types'
	import { trpc } from '$lib/trpc/client'
	import type { Lesson } from '@prisma/client'
	import { dndzone } from 'svelte-dnd-action'
	import { flip } from 'svelte/animate'
	import CourseModuleCardItem from './CourseModuleCardItem.svelte'

	export let module: ModuleWithLessons
	export let moduleDragDisabled: boolean

	const flipDurationMs = 300
	let lessonDragDisabled: boolean = true
	let lessons: Lesson[]

	let showNewLesson: boolean = false

	async function handleDndConsider(e: CustomEvent<DndEvent<Lesson>>) {
		lessons = e.detail.items
		console.log(lessons)
	}

	async function handleDndFinalize(e: CustomEvent<DndEvent<Lesson>>) {
		lessons = e.detail.items

		if (e.detail.info.trigger === 'droppedIntoZone') {
			const res = await trpc($page).lessons.update.mutate({
				id: Number(e.detail.info.id),
				data: {
					moduleId: module.id
				}
			})
		}
		lessonDragDisabled = true
	}

	function startModuleDrag() {
		moduleDragDisabled = false
	}
	function startLessonDrag() {
		lessonDragDisabled = false
	}

	$: lessons = module.lessons.map((lesson) => {
		return lesson
	})
</script>

<div class="flex flex-col w-full bg-gray-700 items-center rounded-md px-4 pb-2">
	<!-- Module Item -->
	<div class="flex w-full items-center justify-between px-2 py-2 h-16">
		<div class="flex gap-4 items-center">
			<div
				on:mousedown|preventDefault={startModuleDrag}
				on:keydown|preventDefault={startModuleDrag}
				on:touchstart|preventDefault={startModuleDrag}
				class={moduleDragDisabled ? 'cursor-grab' : 'cursor-grabbing'}
			>
				<Icon icon="ph:dots-six-vertical-fill" />
			</div>
			<p>{module.title}</p>
		</div>
		<div>
			<Icon icon="ph:dots-three-outline-vertical" />
		</div>
	</div>
	<!-- Lesson Item -->
	<div
		class="w-full"
		use:dndzone={{
			items: lessons,
			flipDurationMs,
			dragDisabled: lessonDragDisabled,
			type: 'lesson'
		}}
		on:consider={handleDndConsider}
		on:finalize={handleDndFinalize}
	>
		{#each lessons as lesson (lesson.id)}
			<div
				class="flex w-full items-center justify-between py-2 pl-8 pr-2 h-16"
				animate:flip={{ duration: flipDurationMs }}
			>
				<CourseModuleCardItem {lesson} {lessonDragDisabled} {startLessonDrag} />
			</div>
		{/each}
		{#if showNewLesson}
			<div class="flex w-full items-center justify-between py-2 pl-8 pr-2 h-16">
				<div class="flex gap-4 items-center">
					<div class={moduleDragDisabled ? 'cursor-grab' : 'cursor-grabbing'}>
						<Icon icon="ph:dots-six-vertical-fill" />
					</div>
					<form
						action="?/createLesson&moduleId={module.id}"
						method="POST"
						class="flex items-center gap-2"
					>
						<div class="flex items-center">
							<Input type="text" name="title" id="title" placeholder="New Lesson" inputSize="sm" />
						</div>
						<div class="flex items-center gap-1">
							<Button type="submit" color="primary" size="sm">Save</Button>
							<Button type="button" color="error" size="sm" on:click={() => (showNewLesson = false)}
								>Cancel</Button
							>
						</div>
					</form>
				</div>
				<div class="flex items-center gap-4">
					<div>
						<Icon icon="ph:dots-three-outline-vertical" />
					</div>
				</div>
			</div>
		{/if}
	</div>
	<!-- New Lesson Button -->
	<div class="px-2 py-2 h-16 w-full">
		<Button
			classes="w-full flex justify-start items-center h-full gap-2 mb-3"
			color="primary"
			outline
			on:click={() => (showNewLesson = true)}
		>
			<Icon icon="ph:plus-circle" />
			<p>Add new lesson</p>
		</Button>
	</div>
</div>
