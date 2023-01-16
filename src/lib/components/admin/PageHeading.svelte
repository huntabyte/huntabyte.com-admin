<script lang="ts">
	export let classes: string = ''
</script>

<div class="{classes} md:flex md:items-center md:justify-between w-full">
	<div class="min-w-0 flex-1">
		<slot name="heading" />
	</div>
	<div class="mt-4 flex md:mt-0 md:ml-4">
		<slot name="actions" />
	</div>
</div>
