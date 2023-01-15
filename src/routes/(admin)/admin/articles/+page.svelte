<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Editor from '$lib/components/Editor.svelte'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">Manage Articles</h2>
	<div slot="actions">
		<Button href="/admin/articles/new">New Article</Button>
	</div>
</PageHeading>
