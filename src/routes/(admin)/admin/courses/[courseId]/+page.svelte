<script lang="ts">
	import LessonsList from '$lib/components/admin/LessonsList.svelte'
	import ModuleList from '$lib/components/admin/ModuleList.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">{data.course.title}</h2>
	<div slot="actions" class="space-x-1">
		<Button href="/admin/courses/{data.course.id}/modules/new" size="sm">New Module</Button>
		<Button href="/admin/courses/{data.course.id}/lessons/new" size="sm">New Lesson</Button>
	</div>
</PageHeading>
<div class="pt-8 space-y-8">
	<div class="space-y-4">
		<PageHeading>
			<h3 slot="heading" class="text-2xl font-normal">Modules</h3>
			<div slot="actions">
				<Button href="/admin/courses/{data.course.id}/modules/new" size="sm">New Module</Button>
			</div>
		</PageHeading>
		{#if data.course.modules.length > 0}
			<ModuleList modules={data.course.modules} />
		{:else}
			<p>No modules yet.</p>
		{/if}
	</div>
	<div class="space-y-4">
		<PageHeading>
			<h3 slot="heading" class="text-2xl font-normal">Lessons</h3>
			<div slot="actions">
				<Button href="/admin/courses/{data.course.id}/lessons/new" size="sm">New Lesson</Button>
			</div>
		</PageHeading>
		{#if data.course.lessons.length > 0}
			<LessonsList lessons={data.course.lessons} />
		{:else}
			<p>No lessons yet.</p>
		{/if}
	</div>
</div>
