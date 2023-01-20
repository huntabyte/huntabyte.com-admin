<script lang="ts">
	import type { PageData } from './$types'
	import '$lib/styles/code/onedark.css'
	import LessonPage from '$lib/components/LessonPage.svelte'

	export let data: PageData
	$: ({ lesson } = data)
</script>

<LessonPage {lesson} />
