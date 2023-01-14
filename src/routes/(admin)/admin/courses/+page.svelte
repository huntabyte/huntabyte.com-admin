<script lang="ts">
	import CoursesTable from '$lib/components/admin/CoursesTable.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Manage Courses</h2>
	<div slot="actions">
		<Button>New Course</Button>
	</div>
</PageHeading>
<CoursesTable courses={data.courses} />
