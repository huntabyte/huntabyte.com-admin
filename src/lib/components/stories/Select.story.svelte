<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Select from '$lib/components/form/Select.svelte'
	export let Hst: Hst

	let disabled: boolean = false
	let label: string = 'Label'
	let options = [
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' },
		{ value: 'three', label: 'Three' }
	]
</script>

<Hst.Story title="Select" layout={{ type: 'grid', width: 400 }}>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={label} title="Label" />
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
	</svelte:fragment>
	<Hst.Variant title="primary">
		<div class="p-2">
			<Select color="primary" {disabled} {label} name="one" {options} />
		</div>
	</Hst.Variant>
	<Hst.Variant title="secondary">
		<div class="p-2">
			<Select color="secondary" {disabled} {label} name="two" {options} />
		</div>
	</Hst.Variant>
	<Hst.Variant title="error">
		<div class="p-2">
			<Select color="error" {disabled} {label} name="three" {options} />
		</div>
	</Hst.Variant>
</Hst.Story>
