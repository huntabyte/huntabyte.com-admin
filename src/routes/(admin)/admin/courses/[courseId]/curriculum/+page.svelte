<script lang="ts">
	import { page } from '$app/stores'
	import type { PageData } from './$types'

	import { dndzone } from 'svelte-dnd-action'
	import { trpc } from '$lib/trpc/client'
	import { flip } from 'svelte/animate'
	import type { Module } from '@prisma/client'

	import CourseModuleCard from '$lib/components/admin/courses/CourseModuleCard.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import ModuleCreateModal from '$lib/components/admin/modules/ModuleCreateModal.svelte'
	import {
		createModuleModal as createModuleDialog,
		updateModuleModal as updateModuleDialog
	} from '$lib/ui/admin'

	import ModuleUpdateModal from '$lib/components/admin/modules/ModuleUpdateModal.svelte'

	export let data: PageData

	let items: any[] = []
	let moduleDragDisabled = true
	let currentModule: Module | null = null

	const flipDurationMs = 100

	function handleModuleDndConsider(e: CustomEvent<DndEvent>) {
		items = e.detail.items
	}
	async function handleModuleDndFinalize(e: CustomEvent<DndEvent>) {
		items = e.detail.items
		items = items.map((item, idx) => {
			return { ...item, sortOrder: idx }
		})
		await trpc($page).courses.updateModules.mutate({
			courseId: data.course.id,
			modules: items
		})
	}

	$: items = data.course.modules.map((module) => {
		return module
	})
</script>

<ModuleUpdateModal dialog={updateModuleDialog} {currentModule} />

<ModuleCreateModal dialog={createModuleDialog} />
<div class="mx-auto w-full">
	<PageHeading>
		<h2 slot="heading" class="text-3xl font-bold">Curriculum</h2>
		<div slot="actions">
			<Button on:click={createModuleDialog.open} color="default" size="sm">New Module</Button>
		</div>
	</PageHeading>
	<section
		class="flex flex-col pt-12 gap-10"
		use:dndzone={{
			items,
			dragDisabled: moduleDragDisabled,
			type: 'module',
			flipDurationMs,
			dropTargetStyle: {}
		}}
		on:consider={handleModuleDndConsider}
		on:finalize={handleModuleDndFinalize}
	>
		{#each items as module (module.id)}
			<div animate:flip={{ duration: 200 }}>
				<CourseModuleCard {module} bind:moduleDragDisabled bind:currentModule />
			</div>
		{/each}
	</section>
</div>
