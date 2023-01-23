<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	import Input from '$lib/components/form/Input.svelte'
	import Button from '$lib/components/Button.svelte'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Edit Course</h2>
</PageHeading>
<div class="pt-8 space-y-2">
	<PageHeading>
		<h3 slot="heading" class="text-2xl font-normal">Details</h3>
		<div slot="actions" class="space-x-2" />
	</PageHeading>
	<form action="?/updateCourse" method="POST" class="max-w-xl flex flex-col gap-4">
		<Input name="title" id="title" label="Title" value={data.course.title} />
		<Input name="slug" id="slug" label="Slug" value={data.course.slug} />
		<Button type="submit">Update Course</Button>
	</form>
</div>
