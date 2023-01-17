<script lang="ts">
	import type { PageData } from './$types'
	import { articleSlideoverDialog as dialog } from '$lib/ui/admin'
	import Button from '$lib/components/Button.svelte'
	import { Editor, Slideover, PageHeading } from '$lib/components/admin'
	import { Input, Select } from '$lib/components/form'

	export let data: PageData
	let content: string = ''
	console.log(data)

	$: tagOptions = data.tags.map((tag) => ({
		label: tag.name,
		value: tag.id
	}))

	$: statusOptions = [
		{ label: 'Draft', value: 'DRAFT' },
		{ label: 'Published', value: 'PUBLISHED' },
		{ label: 'Archived', value: 'ARCHIVED' }
	]
</script>

<form action="?/createArticle" method="POST" class="mx-auto max-w-3xl relative">
	<PageHeading>
		<h2 slot="heading">New Article</h2>
		<div slot="actions">
			<Button
				type="button"
				size="sm"
				on:click={() => {
					console.log('clicked')
					dialog.open()
				}}>Details</Button
			>
		</div>
	</PageHeading>
	<input
		type="text"
		class="outline-none bg-inherit border-none text-5xl font-bold text-gray-50 focus:ring-0 p-0 placeholder:text-gray-500 leading-3"
		placeholder="Article title"
	/>
	<input type="hidden" name="content" bind:value={content} />
	<Editor bind:content />
	<Slideover {dialog}>
		<h2 slot="heading">Article Settings</h2>
		<p slot="subheading">Update article details using the form below</p>
		<div slot="content">
			<Input type="text" name="slug" label="Slug" />
			<Select name="tags" label="Tags" options={tagOptions} />
			<Select name="status" label="Status" options={statusOptions} value="DRAFT" />
		</div>
	</Slideover>
</form>
