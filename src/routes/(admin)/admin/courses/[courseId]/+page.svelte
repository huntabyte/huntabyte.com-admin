<script lang="ts">
	import LessonList from '$lib/components/admin/lessons/LessonList.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'
	import CourseUpdateModal from '$lib/components/admin/courses/CourseUpdateModal.svelte'

	export let data: PageData
	import {
		createModuleModal as createModuleDialog,
		updateModuleModal as updateModuleDialog,
		updateCourseModal as updateCourseDialog
	} from '$lib/ui/admin'
	import ModuleCreateModal from '$lib/components/admin/modules/ModuleCreateModal.svelte'
	import ModuleUpdateModal from '$lib/components/admin/modules/ModuleUpdateModal.svelte'
	import type { Module } from '@prisma/client'

	let currentModule: Module | null
</script>

<ModuleCreateModal dialog={createModuleDialog} />
<ModuleUpdateModal dialog={updateModuleDialog} {currentModule} />
<CourseUpdateModal dialog={updateCourseDialog} course={data.course} />

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">{data.course.title}</h2>
	<div slot="actions" class="space-x-2">
		<Button on:click={updateCourseDialog.open} color="default" size="sm" outline>Edit Course</Button
		>
		<Button on:click={createModuleDialog.open} color="default" size="sm">New Module</Button>
	</div>
</PageHeading>
<div class="pt-8 space-y-8">
	<div class="space-y-4">
		{#each data.course.modules as module}
			<PageHeading>
				<h3 slot="heading" class="text-2xl font-normal">{module.title}</h3>
				<div slot="actions" class="space-x-2">
					<Button
						on:click={() => {
							currentModule = module
							updateModuleDialog.open()
						}}
						size="sm"
						outline>Edit Module</Button
					>
					<Button href="/admin/courses/{data.course.id}/lessons/new?moduleId={module.id}" size="sm"
						>New Lesson</Button
					>
				</div>
			</PageHeading>
			{#if module.lessons.length > 0}
				<LessonList lessons={module.lessons} {module} />
			{:else}
				<p>No lessons yet.</p>
			{/if}
		{/each}
	</div>
</div>
