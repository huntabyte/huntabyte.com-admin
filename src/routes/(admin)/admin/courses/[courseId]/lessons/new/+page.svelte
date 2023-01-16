<script lang="ts">
	import { lessonSlideoverDialog as dialog } from '$lib/ui/admin'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Editor from '$lib/components/Editor.svelte'
	import Slideover from '$lib/components/admin/Slideover.svelte'
	import Input from '$lib/components/form/Input.svelte'

	let content = ''
</script>

<form action="?/createLesson" method="POST" class="mx-auto max-w-3xl relative">
	<PageHeading>
		<h2 slot="heading">New Lesson</h2>
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
	/>
	<input type="hidden" name="content" bind:value={content} />
	<Editor bind:content />
	<Slideover {dialog}>
		<h2 slot="heading">Lesson Details</h2>
		<p slot="subheading">Update lesson details using the form below</p>
		<div slot="content">
			<Input type="text" name="slug" label="Slug" />
		</div>
	</Slideover>
</form>
