<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import '$lib/styles/code/onedark.css';

	export let data: PageData;
	let navigationOrder: string[];

	$: navigationOrder = $page.data.course.navigationOrder;
	$: endOfCourse = false;

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
	{@html data.content}
</div>
<div>
	{#if endOfCourse}
		<a href="/">Finish Course</a>
	{:else}
		<a href="/courses/{$page.params.courseSlug}/{nextSlug}">Next Lesson</a>
	{/if}
</div>
