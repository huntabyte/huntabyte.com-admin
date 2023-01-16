<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ course } = data)
</script>

<h1>Welcome to {course.title}</h1>
<h3>Lessons:</h3>
{#each course.lessons as lesson}
	<a href="/courses/{course.slug}/{lesson.slug}">{lesson.title}</a>
{/each}
