<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Input from '$lib/components/form/Input.svelte'
</script>

<form action="?/createModule" method="POST">
	<PageHeading>
		<h2 slot="heading" class="text-3xl font-bold">New module</h2>
		<div slot="actions">
			<Button type="submit">Save</Button>
		</div>
	</PageHeading>
	<div class="pt-8 space-y-4">
		<Input label="Title *" name="title" classes="max-w-lg" />
		<Input type="number" label="Sort Order" name="sortOrder" classes="max-w-lg" />
	</div>
</form>
