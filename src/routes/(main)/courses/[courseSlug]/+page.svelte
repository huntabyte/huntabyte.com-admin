<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ course } = data.course);
</script>

<h1>Welcome to {course.title}</h1>
<a href="/courses/{course.slug}/{course.modules[0].slug}">Start Course</a>
