<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">{data.course.title}</h2>
</PageHeading>
<div class="pt-8 space-y-6">
	{#each data.course.modules as module}
		<div>
			<PageHeading>
				<h3 slot="heading" class="text-2xl font-normal">Module: {module.title}</h3>
				<div slot="actions">
					<Button href="/admin/courses/{data.course.slug}/create?module={module.id}" size="sm"
						>New Lesson</Button
					>
				</div>
			</PageHeading>
		</div>
	{/each}
</div>
