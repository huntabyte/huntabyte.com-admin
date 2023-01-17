<script lang="ts">
	import Badge from '$lib/components/Badge.svelte'
	import type { CoursesWithModulesAndLessons } from '$lib/prisma.types'
	import CourseListItem from './CourseListItem.svelte'

	export let courses: CoursesWithModulesAndLessons[]
</script>

<div class="overflow-hidden shadow sm:rounded-md pt-6">
	<ul class="divide-y-2 divide-gray-500">
		{#each courses as course}
			<CourseListItem {course} />
		{/each}
	</ul>
</div>
