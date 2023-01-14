<script lang="ts">
	import Input from '$lib/components/form/Input.svelte'
	import Textarea from '$lib/components/form/Textarea.svelte'
	import Button from '../Button.svelte'

	export let action: string = ''
</script>

<form {action} class="max-w-lg mt-6" method="POST">
	<div class="space-y-6">
		<Input label="Title" name="title" />

		<Textarea label="Overview" name="overview" rows={3} />
		<Input label="Slug" name="slug" />
		<Input label="Order" name="sortOrder" type="number" />
		<Button classes="w-full" size="lg">Add Module</Button>
	</div>
</form>
