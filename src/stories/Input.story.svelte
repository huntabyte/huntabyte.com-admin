<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Input from '$lib/components/form/Input.svelte'
	export let Hst: Hst

	let disabled: boolean = false
	let label: string = 'Label'
</script>

<Hst.Story title="Input">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={label} title="Label" />
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
	</svelte:fragment>
	<Hst.Variant title="primary">
		<div class="p-2">
			<Input color="primary" {disabled} {label} name="one" />
		</div>
	</Hst.Variant>
	<Hst.Variant title="secondary">
		<div class="p-2">
			<Input color="secondary" {disabled} {label} name="two" />
		</div>
	</Hst.Variant>
	<Hst.Variant title="error">
		<div class="p-2">
			<Input color="error" {disabled} {label} name="three" />
		</div>
	</Hst.Variant>
</Hst.Story>
