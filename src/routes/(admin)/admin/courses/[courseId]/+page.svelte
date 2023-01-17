<script lang="ts">
	import { LessonList } from '$lib/components/admin/lessons'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'
	export let data: PageData
	import { createModuleModal as dialog } from '$lib/ui/admin'
	import ModuleCreateModal from '$lib/components/admin/modules/ModuleCreateModal.svelte'
</script>

<ModuleCreateModal {dialog} />

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">{data.course.title}</h2>
</PageHeading>
<div class="pt-8 space-y-8">
	<div class="space-y-4">
		{#each data.course.modules as module}
			<PageHeading>
				<h3 slot="heading" class="text-2xl font-normal">{module.title}</h3>
				<div slot="actions">
					<Button on:click={dialog.open} size="sm">Edit Module</Button>
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
