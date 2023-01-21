<script>
	import Button from '$lib/components/Button.svelte'
	import Icon from '$lib/components/Icon.svelte'
</script>

<div class="flex flex-col w-full bg-gray-700 items-center rounded-md">
	<!-- Module Item -->
	<div class="flex w-full items-center justify-between px-4 py-6">
		<div class="flex gap-4 items-center">
			<div>
				<Icon icon="ph:dots-six-vertical-fill" />
			</div>
			<p>Module 0 - Introduction</p>
		</div>
		<div>
			<Icon icon="ph:dots-three-outline-vertical" />
		</div>
	</div>
	<!-- Lesson Item -->
	<div class="flex w-full items-center justify-between py-2 pl-10 pr-4">
		<div class="flex gap-4 items-center">
			<div>
				<Icon icon="ph:dots-six-vertical-fill" />
			</div>
			<p>Lesson 1 - Welcome to the course</p>
		</div>
		<div class="flex items-center gap-4">
			<Button color="primary" outline size="sm">Edit lesson</Button>
			<Icon icon="ph:dots-three-outline-vertical" />
		</div>
	</div>
</div>
