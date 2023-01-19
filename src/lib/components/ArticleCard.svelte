<script lang="ts">
	import { shortDate } from '$lib/utils'
	import type { Article } from '@prisma/client'

	export let article: Article
</script>

<a href="/blog" class="group">
	<div
		class="flex flex-col border border-secondary-500 border-opacity-20 max-w-xl rounded-xl group-hover:border-opacity-100 group-hover:divide-opacity-100 transition-all duration-500 ease-in-out"
	>
		<div class="flex flex-col space-y-2 px-6 pt-6">
			<p class="text-xs text-gray-300 font-medium">{shortDate(article.createdAt)}</p>
			<h2 class="text-3xl font-medium">{article.title}</h2>
		</div>
		<div class="px-6 pb-6 pt-4">
			<p class="leading-7 text-gray-200">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat, commodi impedit
				autem inventore odio quae ut optio cum ad earum at neque libero.
			</p>
		</div>
	</div>
</a>
