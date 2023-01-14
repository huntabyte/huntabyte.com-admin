<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Manage Articles</h2>
	<div slot="actions">
		<Button>New Article</Button>
	</div>
</PageHeading>
