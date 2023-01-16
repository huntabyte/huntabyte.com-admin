<script lang="ts">
	import LessonsList from '$lib/components/admin/LessonsList.svelte'
	import ModuleList from '$lib/components/admin/ModuleList.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Modal from '$lib/components/admin/Modal.svelte'
	import type { PageData } from './$types'
	export let data: PageData
	import { createModuleModal as dialog } from '$lib/ui/admin'
	import Input from '$lib/components/form/Input.svelte'
	import Icon from '$lib/components/Icon.svelte'
</script>

<!-- Create Module Modal -->
<Modal {dialog}>
	<form method="POST" action="?/createModule" class="space-y-2">
		<div class="flex w-full justify-between items-center">
			<h3 class="font-medium text-2xl">
				<span class="text-secondary-500">{data.course.title}</span>
				> New module
			</h3>
			<Button
				type="button"
				outline
				classes="bg-transparent outline-none border-none text-gray-50"
				on:click={dialog.close}
			>
				<Icon icon="ph:x" />
			</Button>
		</div>
		<Input label="Title" name="title" />
		<Input type="number" label="Sort Order" name="sortOrder" />
		<div class="flex w-full justify-end pt-2">
			<Button type="submit" classes="w-full" color="primary">Create module</Button>
		</div>
	</form>
</Modal>
<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">{data.course.title}</h2>
</PageHeading>
<div class="pt-8 space-y-8">
	<div class="space-y-4">
		<PageHeading>
			<h3 slot="heading" class="text-2xl font-normal">Modules</h3>
			<div slot="actions">
				<Button on:click={dialog.open} size="sm">New Module</Button>
			</div>
		</PageHeading>
		{#if data.course.modules.length > 0}
			<ModuleList modules={data.course.modules} />
		{:else}
			<p>No modules yet.</p>
		{/if}
	</div>
	<div class="space-y-4">
		<PageHeading>
			<h3 slot="heading" class="text-2xl font-normal">Lessons</h3>
			<div slot="actions">
				<Button href="/admin/courses/{data.course.id}/lessons/new" size="sm">New Lesson</Button>
			</div>
		</PageHeading>
		{#if data.course.lessons.length > 0}
			<LessonsList lessons={data.course.lessons} />
		{:else}
			<p>No lessons yet.</p>
		{/if}
	</div>
</div>
