<script lang="ts">
	import type { Article } from '@prisma/client'
	import TutorialListItem from '$lib/components/admin/tutorials/TutorialListItem.svelte'
	export let articles: Article[]
</script>

<div class="shadow border-t-2 border-gray-600">
	<ul class="divide-y-2 divide-gray-500 mt-2">
		{#each articles as article}
			<TutorialListItem {article} />
		{/each}
	</ul>
</div>
