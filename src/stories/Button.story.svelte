<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Button from '../lib/components/Button.svelte'
	export let Hst: Hst

	let disabled: boolean = false
	let text: string = 'Button'
	let size: 'sm' | 'md' | 'lg' = 'md'
	let outline: boolean = false
</script>

<Hst.Story title="Button" layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={text} title="Text" />
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
		<Hst.Select bind:value={size} title="Size" options={['sm', 'md', 'lg']}>
			<option value="sm">Small</option>
			<option value="md">Medium</option>
			<option value="lg">Large</option>
		</Hst.Select>
		<Hst.Checkbox bind:value={outline} title="Outline" />
	</svelte:fragment>
	<Hst.Variant title="primary">
		<div class="p-8 flex w-full justify-center items-center">
			<Button color="primary" {size} {outline} {disabled}>{text}</Button>
		</div>
	</Hst.Variant>
	<Hst.Variant title="secondary">
		<div class="p-8 flex w-full justify-center items-center">
			<Button color="secondary" {size} {outline} {disabled}>{text}</Button>
		</div>
	</Hst.Variant>
	<Hst.Variant title="error">
		<div class="p-8 flex w-full justify-center items-center">
			<Button color="error" {size} {outline} {disabled}>{text}</Button>
		</div>
	</Hst.Variant>
</Hst.Story>
