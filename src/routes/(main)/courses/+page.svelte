<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.courses as course}
	<a href="/courses/{course.slug}">- {course.title}</a>
{/each}
