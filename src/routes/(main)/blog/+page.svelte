<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<ul>
	{#each data.articles as article}
		<li>
			<a href="/blog/{article.slug}">{article.title}</a>
		</li>
	{/each}
</ul>
