<script lang="ts">
	import { lessonSlideoverDialog as dialog } from '$lib/ui/admin'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Slideover from '$lib/components/admin/Slideover.svelte'
	import Input from '$lib/components/form/Input.svelte'
	import type { PageData } from './$types'
	import EditorUpdate from '$lib/components/EditorUpdate.svelte'
	import { applyAction, enhance, type SubmitFunction } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import Select from '$lib/components/form/Select.svelte'

	export let data: PageData

	let content: string = data.lesson.content ?? ''
	const moduleOptions = data.course.modules.map((module) => ({
		label: module.title,
		value: module.id
	}))

	const submitUpdateLesson: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					break
				case 'failure':
					break
				default:
					break
			}
			await applyAction(result)
			await invalidateAll()
		}
	}

	$: console.log(data.lesson)
</script>

<form
	action="?/updateLesson"
	method="POST"
	class="mx-auto max-w-3xl relative"
	use:enhance={submitUpdateLesson}
>
	<PageHeading>
		<h2 slot="heading">Editing: {data.lesson.title}</h2>
		<div slot="actions" class="space-x-1">
			<Button type="submit" size="sm" color="primary">Save</Button>
			<Button type="button" size="sm" on:click={dialog.open}>Details</Button>
		</div>
	</PageHeading>
	<input
		type="text"
		class="outline-none bg-inherit border-none text-5xl font-bold text-gray-50 focus:ring-0 p-0 placeholder:text-gray-500 leading-3"
		placeholder="Article title"
		name="title"
		value={data.lesson.title}
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
		</div>
		<div slot="actions">
			<Button type="submit" size="sm" color="primary">Save</Button>
		</div>
	</Slideover>
</form>
