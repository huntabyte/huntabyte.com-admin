<script lang="ts">
	import 'iconify-icon'
	export let classes: string = ''
	export let icon: string
</script>

<div class={`${classes} flex items-center text-xl`}>
	<iconify-icon {icon} />
</div>
