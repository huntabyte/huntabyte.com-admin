<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Courses</h2>
	<div slot="actions">
		<Button href="/admin/courses/new" color="default">New Course</Button>
	</div>
</PageHeading>
<TagsList courses={data.courses} />
