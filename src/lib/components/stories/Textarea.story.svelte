<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Textarea from '$lib/components/form/Textarea.svelte'
	export let Hst: Hst

	let disabled: boolean = false
	let label: string = 'Label'
</script>

<Hst.Story title="Textarea" layout={{ type: 'grid', width: 400 }}>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={label} title="Label" />
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
	</svelte:fragment>
	<Hst.Variant title="primary">
		<div class="p-2">
			<Textarea color="primary" {disabled} {label} name="one" />
		</div>
	</Hst.Variant>
	<Hst.Variant title="secondary">
		<div class="p-2">
			<Textarea color="secondary" {disabled} {label} name="two" />
		</div>
	</Hst.Variant>
	<Hst.Variant title="error">
		<div class="p-2">
			<Textarea color="error" {disabled} {label} name="three" />
		</div>
	</Hst.Variant>
</Hst.Story>
