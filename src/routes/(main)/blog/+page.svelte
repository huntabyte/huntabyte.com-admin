<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="flex flex-col mx-auto items-center">
	<div class="w-full">
		<div class="mx-auto px-6 pt-16">
			<div class="text-center">
				<h2 class="text-lg font-semibold text-primary-600">Blog</h2>
				<p class="mt-1 font-bold tracking-tight text-6xl">Thoughts, Ideas, & Experiences</p>
				<p class="mx-auto mt-5 max-w-xl text-xl text-gray-100">
					Exploring the intersection of technology, personal growth, and whatever else I find
					interesting.
				</p>
			</div>
		</div>
	</div>
	<ul>
		{#each data.articles as article}
			<li>
				<a href="/blog/{article.slug}">{article.title}</a>
			</li>
		{/each}
	</ul>
</div>
