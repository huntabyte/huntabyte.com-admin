<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ course } = data);
</script>

<p>{course.id}</p>
<h1>{course.title}</h1>

<h1>Modules</h1>
{#each course.modules as module}
	<a href="/courses/{course.slug}/{module.slug}" class="font-bold text-2xl">{module.title}</a>
	{#each module.lessons as lesson}
		<a href="/courses/{course.slug}/{module.slug}/{lesson.slug}" class="font-medium text-lg block"
			>{lesson.title}</a
		>
	{/each}
{/each}
