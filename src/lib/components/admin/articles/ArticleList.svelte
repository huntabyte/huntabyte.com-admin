<script lang="ts">
	import type { Article } from '@prisma/client'
	import ArticleListItem from '$lib/components/admin/articles/ArticleListItem.svelte'
	export let articles: Article[]
</script>

<div class="shadow border-t-2 border-gray-600">
	<ul class="divide-y-2 divide-gray-500 mt-2">
		{#each articles as article}
			<ArticleListItem {article} />
		{/each}
	</ul>
</div>
