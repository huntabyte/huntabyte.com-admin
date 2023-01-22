<script lang="ts">
	import { page } from '$app/stores'
	import Button from '$lib/components/Button.svelte'
	import Icon from '$lib/components/Icon.svelte'
	import type { ModuleWithLessons } from '$lib/prisma.types'
	import { trpc } from '$lib/trpc/client'
	import type { Lesson } from '@prisma/client'
	import { dndzone } from 'svelte-dnd-action'
	import { flip } from 'svelte/animate'
	const flipDurationMs = 300
	export let module: ModuleWithLessons

	export let moduleDragDisabled: boolean
	let lessonDragDisabled: boolean = true

	let lessons: Lesson[]

	async function handleDndConsider(e: CustomEvent<DndEvent<Lesson>>) {
		lessons = e.detail.items
		console.log(lessons)
	}

	async function handleDndFinalize(e: CustomEvent<DndEvent<Lesson>>) {
		lessons = e.detail.items

		if (e.detail.info.trigger === 'droppedIntoZone') {
			await trpc($page).lessons.update.mutate({
				id: Number(e.detail.info.id),
				data: {
					moduleId: module.id
				}
			})
		}
		moduleDragDisabled = true
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
				<div class="flex gap-4 items-center">
					<div
						on:mousedown|preventDefault={startLessonDrag}
						on:keydown|preventDefault={startLessonDrag}
						on:touchstart|preventDefault={startLessonDrag}
						class={moduleDragDisabled ? 'cursor-grab' : 'cursor-grabbing'}
					>
						<Icon icon="ph:dots-six-vertical-fill" />
					</div>
					<p>{lesson.title}</p>
				</div>
				<div class="flex items-center gap-4">
					<Button color="primary" outline size="sm">Edit lesson</Button>
					<div>
						<Icon icon="ph:dots-three-outline-vertical" />
					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- New Lesson Button -->
	<div class="px-2 py-2 h-16 w-full">
		<Button
			classes="w-full flex justify-start items-center h-full gap-2 mb-3"
			color="primary"
			outline
		>
			<Icon icon="ph:plus-circle" />
			<p>Add new lesson</p>
		</Button>
	</div>
</div>
