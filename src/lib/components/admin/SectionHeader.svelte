<script lang="ts">
	export let heading: string = ''
</script>

<div class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
	<h3 class="text-lg font-medium leading-6 text-gray-900">{heading}</h3>
	<div class="mt-3 sm:mt-0 sm:ml-4">
		<button
			type="button"
			class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
			>Create new job</button
		>
	</div>
</div>
