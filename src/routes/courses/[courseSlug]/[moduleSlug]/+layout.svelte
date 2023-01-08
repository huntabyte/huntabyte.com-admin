<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex">
	<nav class="w-60 p-1">
		{#each $page.data.course.course.modules as module}
			<a href="/courses/{$page.params.courseSlug}/{module.slug}" class="font-semibold text-xl block"
				>{module.title}</a
			>
			<hr class="w-3/4" />
			{#each module.lessons as lesson}
				<a href="/courses/{$page.params.courseSlug}/{module.slug}/{lesson.slug}" class="block"
					>{lesson.title}</a
				>
			{/each}
		{/each}
	</nav>
	<div class="flex-1">
		<slot />
	</div>
</div>
