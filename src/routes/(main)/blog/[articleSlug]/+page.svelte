<script lang="ts">
	import type { PageData } from './$types'
	import { shortDate } from '$lib/utils'
	import '$lib/styles/code/onedark.css'
	export let data: PageData
	let articleTag
	$: ({ article } = data)
</script>

<div class="flex flex-col items-center mx-auto w-full max-w-2xl gap-6 py-16">
	<div class="w-full">
		<h1 class="text-left text-5xl font-semibold">{article.title}</h1>
		<div class="flex items-center gap-2 text-sm pt-2">
			<img
				src="https://i.pravatar.cc/40"
				alt="Author Profile Avatar"
				class="w-6 h-6 rounded-full"
			/>
			<span>
				Hunter Johnston / {shortDate(article.createdAt)}
			</span>
		</div>
	</div>
	<article bind:this={articleTag} class="prose-invert prose prose-lg max-w-2xl">
		{@html article.content}
	</article>
</div>
