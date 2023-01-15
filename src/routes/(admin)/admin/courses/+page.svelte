<script lang="ts">
	import CoursesList from '$lib/components/admin/CoursesList.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Courses</h2>
	<div slot="actions">
		<Button color="default">New Course</Button>
	</div>
</PageHeading>
<CoursesList courses={data.courses} />
