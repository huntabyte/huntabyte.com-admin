<script lang="ts">
	import Input from '$lib/components/form/Input.svelte'
	import Textarea from '$lib/components/form/Textarea.svelte'
</script>

<form action="" class="max-w-lg mt-6">
	<div class="space-y-6">
		<Input label="Title" name="title" />

		<Textarea label="Overview" name="overview" rows={3} />
		<Input label="Slug" name="slug" />
		<div>
			<label for="slug" class="block font-medium text-gray-700">Order</label>
			<div class="mt-1">
				<input
					type="number"
					name="slug"
					id="slug"
					class="block w-full rounded-md p-4 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 "
				/>
			</div>
		</div>
	</div>
</form>
