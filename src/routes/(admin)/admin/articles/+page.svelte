<script lang="ts">
	import { PageHeading } from '$lib/components/admin'
	import { Button } from '$lib/components'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Manage Articles</h2>
	<div slot="actions">
		<Button href="/admin/articles/new">New Article</Button>
	</div>
</PageHeading>
