<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="flex flex-col mx-auto items-center space-y-12 max-w-2xl">
	<div class="w-full">
		<div class="mx-auto px-6 pt-16">
			<div class="text-center">
				<p class="mt-1 font-semibold tracking-tight text-5xl">Thoughts, Ideas, & Lessons</p>
				<p class="mx-auto max-w-lg text-xl text-gray-100">
					<em> "You can make anything by writing" </em>
					-C.S. Lewis
				</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col space-y-8">
		{#each data.articles as article}
			<ArticleCard {article} />
		{/each}
	</div>
</div>
