<script lang="ts">
	import { page } from '$app/stores'
	import CourseModuleCard from '$lib/components/admin/courses/CourseModuleCard.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import { trpc } from '$lib/trpc/client'
	import { dndzone } from 'svelte-dnd-action'
	import { flip } from 'svelte/animate'
	import type { PageData } from './$types'

	export let data: PageData

	let items: any[] = []
	let moduleDragDisabled = true

	const flipDurationMs = 200

	function handleModuleDndConsider(e: CustomEvent<DndEvent>) {
		console.log(e.detail.items)
		items = e.detail.items
	}
	async function handleModuleDndFinalize(e: CustomEvent<DndEvent>) {
		console.log(e.detail.items)
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

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Curriculum</h2>
	<div slot="actions">
		<Button href="/admin/courses/new" color="primary">New Module</Button>
	</div>
</PageHeading>
<section
	class="flex flex-col pt-12 gap-10"
	use:dndzone={{ items, dragDisabled: moduleDragDisabled, type: 'module', flipDurationMs }}
	on:consider={handleModuleDndConsider}
	on:finalize={handleModuleDndFinalize}
>
	{#each items as module (module.id)}
		<div animate:flip={{ duration: 200 }}>
			<CourseModuleCard {module} bind:moduleDragDisabled />
		</div>
	{/each}
</section>
