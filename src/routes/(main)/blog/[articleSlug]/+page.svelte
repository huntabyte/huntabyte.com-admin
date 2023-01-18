<script lang="ts">
	import type { PageData } from './$types'
	import '$lib/styles/code/onedark.css'
	export let data: PageData
	$: ({ article } = data)
</script>

<div class="flex flex-col items-center mx-auto w-full max-w-2xl gap-6 py-16">
	<div class="flex flex-col w-full gap-2">
		<h1 class="text-left text-5xl font-medium">{article.title}</h1>
		<p class="text-left text-gray-300">{article.createdAt} - 1 min read</p>
	</div>
	<div class="prose-invert prose prose-lg max-w-2xl">
		{@html article.content}
	</div>
</div>
