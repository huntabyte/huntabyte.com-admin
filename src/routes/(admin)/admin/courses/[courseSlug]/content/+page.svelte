<script lang="ts">
	import ContentTable from '$lib/components/admin/ContentTable.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Manage Content</h2>
	<div slot="actions">
		<Button>New Module</Button>
		<Button color="secondary">New Lesson</Button>
	</div>
</PageHeading>
<ContentTable modules={data.modules} />
