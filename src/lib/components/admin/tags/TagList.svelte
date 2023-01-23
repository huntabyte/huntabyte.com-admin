<script lang="ts">
	import type { Tag } from '@prisma/client'
	import { updateModuleModal as dialog } from '$lib/ui/admin'
	import TagUpdateModal from '$lib/components/admin/tags/TagUpdateModal.svelte'
	import TagListItem from '$lib/components/admin/tags/TagListItem.svelte'
	export let tags: Tag[]

	export let currentTag: Tag | null = null
</script>

<TagUpdateModal {currentTag} {dialog} />

<div class="shadow border-t-2 border-gray-600">
	<ul class="divide-y-2 divide-gray-500 mt-2">
		{#each tags as tag}
			<TagListItem bind:currentTag {tag} {dialog} />
		{/each}
	</ul>
</div>
