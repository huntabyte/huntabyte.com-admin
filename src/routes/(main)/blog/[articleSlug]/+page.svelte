<script lang="ts">
	import type { PageData } from './$types'
	import { shortDate } from '$lib/utils'
	import '$lib/styles/code/onedark.css'
	import Icon from '$lib/components/Icon.svelte'
	export let data: PageData
	let articleTag
	$: ({ article } = data)
</script>

<div class="flex flex-col items-center mx-auto w-full max-w-2xl gap-6">
	<a
		href="/blog"
		class="self-start flex items-center gap-2 hover:text-primary-500 transition-all duration-200 ease-in-out"
	>
		<Icon icon="ph:arrow-left-bold" />
		<p>Back to Blog</p>
	</a>
	<div class="w-full">
		<h1 class="text-left text-5xl font-semibold">{article.title}</h1>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2 text-sm pt-2">
				<img
					src="https://avatars.githubusercontent.com/u/64506580?v=4"
					alt="Author Profile Avatar"
					class="w-6 h-6 rounded-full"
				/>
				<span>
					Hunter Johnston / {shortDate(article.createdAt)}
				</span>
			</div>
			<div class="flex gap-2">
				<span>
					<Icon icon="ph:eye" />
				</span>
				<span> 10,839 </span>
			</div>
		</div>
	</div>
	<article bind:this={articleTag} class="prose-invert prose prose-lg max-w-2xl w-full">
		{@html article.content}
	</article>
</div>
