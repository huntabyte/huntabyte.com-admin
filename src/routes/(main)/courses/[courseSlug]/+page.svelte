<script lang="ts">
	import { page } from '$app/stores'
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ course } = data)
</script>

<h1>Welcome to {course.title}</h1>

{#each course.modules as module}
	<h2>Module: {module.title}</h2>
	<h4>Lessons:</h4>
	{#each module.lessons as lesson}
		<p>{lesson.title}</p>
	{/each}
{/each}
<h2>Homeless Lesson:</h2>
{#each course.lessons as lesson}
	<p>{lesson.title}</p>
{/each}
