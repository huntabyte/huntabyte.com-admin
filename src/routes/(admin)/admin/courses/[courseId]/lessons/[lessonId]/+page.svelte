<script lang="ts">
	import { lessonSlideoverDialog as dialog } from '$lib/ui/admin'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Slideover from '$lib/components/admin/Slideover.svelte'
	import Input from '$lib/components/form/Input.svelte'
	import type { PageData } from './$types'
	import EditorUpdate from '$lib/components/admin/EditorUpdate.svelte'
	import { applyAction, enhance, type SubmitFunction } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import Select from '$lib/components/form/Select.svelte'
	import toast from 'svelte-french-toast'
	import Icon from '$lib/components/Icon.svelte'
	export let data: PageData

	let content: string = data.lesson.content ?? ''
	const moduleOptions = data.course.modules.map((module) => ({
		label: module.title,
		value: module.id
	}))

	const contentTypeOptions = [
		{ label: 'Video', value: 'VIDEO' },
		{ label: 'Text', value: 'TEXT' }
	]

	const submitUpdateLesson: SubmitFunction = () => {
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					dialog.close()
					toast.success('Lesson updated')
				case 'failure':
					break
				default:
					break
			}
			await applyAction(result)
			await invalidateAll()
		}
	}
</script>

<form
	action="?/updateLesson"
	method="POST"
	class="mx-auto max-w-4xl relative w-full"
	use:enhance={submitUpdateLesson}
>
	<PageHeading>
		<div slot="heading" class="flex items-center gap-2">
			<a href="/admin/courses/{data.course.id}/curriculum" class="flex items-center">
				<Icon icon="ph:arrow-left" classes="text-2xl" />
			</a>
			<h2 class="text-xl font-medium">Editing: {data.lesson.title}</h2>
		</div>
		<div slot="actions" class="space-x-1">
			<Button type="submit" size="sm" color="primary">Save</Button>
			<Button type="button" size="sm" on:click={dialog.open}>Details</Button>
		</div>
	</PageHeading>
	<input
		type="text"
		class="outline-none bg-inherit border-none text-5xl font-bold text-gray-50 focus:ring-0 p-0 placeholder:text-gray-500 leading-3"
		name="title"
		value={data.lesson.title ?? ''}
	/>
	<input type="hidden" name="content" bind:value={content} />
	<EditorUpdate bind:content />
	<Slideover {dialog}>
		<h2 slot="heading">Lesson Details</h2>
		<p slot="subheading">Update lesson details using the form below</p>
		<div slot="content" class="space-y-2">
			<Input type="text" name="slug" label="Slug" value={data.lesson.slug ?? ''} />
			<Select
				name="moduleId"
				label="Module"
				options={moduleOptions}
				value={data.lesson.moduleId ?? ''}
			/>
			<Input type="number" name="sortOrder" label="Sort Order" value={data.lesson.sortOrder ?? 0} />
			<Select
				name="contentType"
				label="Content Type"
				options={contentTypeOptions}
				value={data.lesson.contentType ?? 'VIDEO'}
			/>
			<Input name="videoUrl" label="Video URL" value={data.lesson.videoUrl ?? ''} />
		</div>
		<div slot="actions" class="space-x-2">
			<Button type="button" size="sm" color="error" outline>Delete Lesson</Button>
			<Button type="submit" size="sm" color="primary">Update Lesson</Button>
		</div>
	</Slideover>
</form>
