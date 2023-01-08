<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ course } = data.course);
</script>

<h1>Welcome to {course.title}</h1>
<pre>{JSON.stringify(course, null, 2)}</pre>
