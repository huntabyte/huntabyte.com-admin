<script lang="ts">
	import type { PageData } from './$types'
	import '$lib/styles/code/onedark.css'
	export let data: PageData
</script>

<div class="prose-invert prose prose-lg max-w-2xl">
	{@html data.article.content}
</div>
