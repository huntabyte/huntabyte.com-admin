<script lang="ts">
	import { lessonSlideoverDialog as dialog } from '$lib/ui/admin'
	import Button from '$lib/components/Button.svelte'
	import { Editor, Slideover, PageHeading } from '$lib/components/admin'
	import { Input, Select } from '$lib/components/form'
	import type { PageData } from './$types'

	let content = ''

	export let data: PageData

	const moduleOptions = data.course.modules.map((module) => ({
		label: module.title,
		value: module.id
	}))

	const contentTypeOptions = [
		{ label: 'Video', value: 'VIDEO' },
		{ label: 'Text', value: 'TEXT' }
	]
</script>

<form action="?/createLesson" method="POST" class="mx-auto max-w-3xl relative">
	<PageHeading>
		<h2 slot="heading">New Lesson</h2>
		<div slot="actions" class="space-x-1">
			<Button type="button" size="sm" color="primary" on:click={dialog.open}>Continue</Button>
		</div>
	</PageHeading>
	<input
		type="text"
		class="outline-none bg-inherit border-none text-5xl font-bold text-gray-50 focus:ring-0 p-0 placeholder:text-gray-500 leading-3"
		placeholder="Lesson title"
		name="title"
	/>
	<input type="hidden" name="content" bind:value={content} />
	<Editor bind:content />
	<Slideover {dialog}>
		<h2 slot="heading">Lesson Details</h2>
		<p slot="subheading">Update lesson details using the form below</p>
		<div slot="content" class="space-y-2">
			<Input type="text" name="slug" label="Slug" />
			<Select name="moduleId" label="Module" options={moduleOptions} />
			<Input
				type="number"
				name="sortOrder"
				label="Sort Order"
				value={data.course._count.lessons + 1}
			/>
			<Select
				name="contentType"
				label="Content Type"
				options={contentTypeOptions}
				value={'VIDEO'}
			/>
			<Input name="videoUrl" label="Video URL" />
		</div>
		<div slot="actions" class="space-x-2">
			<Button type="button" size="sm" color="error" outline on:click={dialog.close}>Cancel</Button>
			<Button type="submit" size="sm" color="primary">Create Lesson</Button>
		</div>
	</Slideover>
</form>
