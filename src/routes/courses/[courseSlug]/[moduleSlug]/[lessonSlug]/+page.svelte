<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import '$lib/styles/code/onedark.css';

	export let data: PageData;
	$: ({ lesson } = data);

	$: navigationOrder = $page.data.course.navigationOrder;
	$: endOfCourse = false;

	/*
	 * Handle navigation within the lesson page by getting the next lesson slug.
	 * If the current lesson is the last lesson, the course is complete, and currently,
	 * the user is redirected to the home page when clicking finish course.
	 */
	function getNextNavigation(lessonSlug: string) {
		const index = navigationOrder.indexOf(`${$page.params.moduleSlug}/${lessonSlug}`);
		const nextIndex = index + 1;
		if (nextIndex >= $page.data.course.navigationOrder.length) {
			endOfCourse = true;
			return $page.data.course.navigationOrder[0];
		}
		endOfCourse = false;

		return $page.data.course.navigationOrder[nextIndex];
	}

	$: nextSlug = getNextNavigation($page.params.lessonSlug);
</script>

<div>
	{@html lesson.content}
</div>
<div>
	{#if endOfCourse}
		<a href="/">Finish Course</a>
	{:else}
		<a href="/courses/{$page.params.courseSlug}/{nextSlug}">Next Lesson</a>
	{/if}
</div>
