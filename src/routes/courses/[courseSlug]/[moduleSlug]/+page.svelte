<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;
	$: ({ module } = data);
	$: console.log($page);
</script>

<h1>{module.title}</h1>
<p>{module.overview}</p>
<p>{module.status}</p>

<h1>Lesson</h1>
{#each module.lessons as lesson}
	<a
		href="/courses/{$page.params.courseSlug}/{module.slug}/{lesson.slug}"
		class="font-medium text-lg block">{lesson.title}</a
	>
{/each}
