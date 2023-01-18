<script lang="ts">
	import { PageHeading } from '$lib/components/admin'
	import { Button } from '$lib/components'
	import ArticleList from '$lib/components/admin/articles/ArticleList.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Manage Articles</h2>
	<div slot="actions">
		<Button href="/admin/articles/new">New Article</Button>
	</div>
</PageHeading>
<div class="pt-8">
	<ArticleList articles={data.articles} />
</div>
