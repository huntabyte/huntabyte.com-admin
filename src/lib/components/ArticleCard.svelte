<script lang="ts">
	import { shortDate } from '$lib/utils'
	import type { Article } from '@prisma/client'
	import Icon from '$lib/components/Icon.svelte'

	export let article: Article
</script>

<a href="/blog/{article.slug}" class="group flex flex-col w-full max-w-2xl">
	<h2 class="text-2xl font-semibold">{article.title}</h2>
	<p class="text-gray-300 mt-1">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ullam nemo culpa, aut pariatur
		tenetur obcaecati fugiat laboriosam quos alias esse assumenda corrupti labore vero excepturi.
	</p>
	<div class="flex flex-row items-center space-x-2 mt-3 justify-between">
		<div class="flex items-center">
			<span class="text-gray-400">{shortDate(article.createdAt)}</span>
		</div>
		<div>
			<span class="text-gray-400 flex items-center gap-1">
				<Icon icon="ph:eye" /> <span>10,000</span>
			</span>
		</div>
	</div></a
>
