<script lang="ts">
	import CourseModuleCard from '$lib/components/admin/courses/CourseModuleCard.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Curriculum</h2>
	<div slot="actions">
		<Button href="/admin/courses/new" color="primary">New Module</Button>
	</div>
</PageHeading>
<div class="flex flex-col pt-12">
	<CourseModuleCard />
</div>
