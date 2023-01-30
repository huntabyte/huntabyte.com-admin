<script lang="ts">
	import {
		articleSlideoverDialog as slideoverDialog,
		articleDeleteDialog as deleteDialog
	} from '$lib/ui/admin'
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
	import ArticleDeleteModal from '$lib/components/admin/articles/ArticleDeleteModal.svelte'
	export let data: PageData

	let content: string = data.article.content ?? ''

	const statusOptions = [
		{ label: 'Draft', value: 'DRAFT' },
		{ label: 'Published', value: 'PUBLISHED' },
		{ label: 'Archived', value: 'ARCHIVED' }
	]

	const submitUpdateArticle: SubmitFunction = () => {
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					slideoverDialog.close()
					toast.success('Article updated')
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

<ArticleDeleteModal dialog={deleteDialog} article={data.article} />

<form
	action="?/updateArticle"
	method="POST"
	class="mx-auto max-w-4xl relative w-full"
	use:enhance={submitUpdateArticle}
>
	<PageHeading>
		<h2 slot="heading">Editing: {data.article.title}</h2>
		<div slot="actions" class="space-x-1">
			<Button type="submit" size="sm" color="primary">Save</Button>
			<Button type="button" size="sm" on:click={slideoverDialog.open}>Details</Button>
		</div>
	</PageHeading>
	<input
		type="text"
		class="outline-none bg-inherit border-none text-5xl font-bold text-gray-50 focus:ring-0 p-0 placeholder:text-gray-500 leading-3"
		placeholder="Article title"
		name="title"
		value={data.article.title}
	/>
	<input type="hidden" name="content" bind:value={content} />
	<EditorUpdate bind:content />
	<Slideover dialog={slideoverDialog}>
		<h2 slot="heading">Article Details</h2>
		<p slot="subheading">Update article details using the form below</p>
		<div slot="content" class="space-y-2">
			<Input type="text" name="slug" label="Slug" value={data.article.slug ?? ''} />
			<Select
				name="status"
				label="Status"
				options={statusOptions}
				value={data.article.status ?? ''}
			/>
		</div>
		<div slot="actions" class="space-x-2">
			<Button
				type="button"
				size="sm"
				color="error"
				outline
				on:click={() => {
					deleteDialog.open()
					slideoverDialog.close()
				}}>Delete Article</Button
			>
			<Button type="submit" size="sm" color="primary">Update Article</Button>
		</div>
	</Slideover>
</form>
