<script lang="ts">
	import Input from '../Input.svelte'
</script>

<form action="" class="max-w-lg mt-6">
	<div class="space-y-6">
		<div>
			<label for="project-name" class="block text-sm font-medium text-gray-700">Title</label>
			<div class="mt-1">
				<input
					type="text"
					name="title"
					id="title"
					class="block w-full rounded-md p-4 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 "
				/>
			</div>
		</div>
		<div>
			<div>
				<label for="overview" class="block text-sm font-medium text-gray-700">Overview</label>
				<div class="mt-1">
					<textarea
						id="overview"
						name="overview"
						rows="3"
						class="block w-full rounded-md p-4 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
					/>
				</div>
			</div>
		</div>
	</div>
</form>
