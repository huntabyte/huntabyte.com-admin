<script lang="ts">
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Input from '$lib/components/form/Input.svelte'
</script>

<form action="?/createCourse" method="POST">
	<PageHeading>
		<h2 slot="heading" class="text-3xl font-bold">New course</h2>
		<div slot="actions">
			<Button type="submit">Save</Button>
		</div>
	</PageHeading>
	<div class="pt-8 space-y-4">
		<Input label="Title *" name="title" classes="max-w-lg" />
		<Input label="Slug *" name="slug" classes="max-w-lg" />
		<Input label="Stripe ID" name="stripeProductId" classes="max-w-lg" />
	</div>
</form>
