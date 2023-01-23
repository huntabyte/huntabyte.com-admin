<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import { Button } from '$lib/components'
	import TagList from '$lib/components/admin/tags/TagList.svelte'
	import type { PageData } from './$types'
	import { createTagModal as dialog } from '$lib/ui/admin'
	import TagCreateModal from '$lib/components/admin/tags/TagCreateModal.svelte'
	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Tags</h2>
	<div slot="actions">
		<Button on:click={dialog.open} color="default">New Tag</Button>
	</div>
</PageHeading>
<TagCreateModal {dialog} />

<div class="pt-6">
	{#if data.tags.length === 0}
		<div class="text-center text-gray-400 pt-8">
			<p class="text-2xl font-bold">No tags found</p>
			<p class="text-xl">Create a new tag to get started</p>
		</div>
	{:else}
		<TagList tags={data.tags} />
	{/if}
</div>
