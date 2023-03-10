<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements'
	import classNames from 'classnames'

	interface $$Props extends HTMLSelectAttributes {
		label?: string | undefined
		color?: 'primary' | 'secondary' | 'error'
		type?: string
		name: string
		options?: OptionItem[]
		classes?: string
		inputSize?: 'xs' | 'sm' | 'md' | 'lg'
	}
	export let label: string | undefined = undefined

	export let color: 'primary' | 'secondary' | 'error' = 'primary'

	export let name: string
	export let classes: string = ''
	export let inputSize: 'xs' | 'sm' | 'md' | 'lg' = 'md'

	type OptionItem = {
		value: any
		label: string
	}
	export let options: OptionItem[] = []

	const sizeClasses = {
		xs: 'py-1.5 px-2.5 text-sm',
		sm: 'py-2 px-3 text-sm',
		md: 'py-2.5 px-4 text-base',
		lg: 'py-3.5 px-5 text-lg'
	}

	const colorClasses = {
		primary: 'focus:ring-primary-500 focus:border-primary-500 border-gray-200',
		secondary: 'focus:ring-secondary-500 focus:border-secondary-500 border-gray-100',
		error: 'focus:ring-error-500 focus:border-error-500 border-error-500'
	}

	let inputClass: string
	const defaultClasses =
		'block w-full rounded-md shadow-sm bg-transparent border-2focus:border-opacity-10 focus:ring-opacity-60 focus:ring-2 text-gray-50 transition-all duration-200 ease-in-out group-hover:border-gray-50 focus:group-hover:border-transparent'
	$: inputClass = classNames(classes, colorClasses[color], sizeClasses[inputSize], defaultClasses)
</script>

<div>
	{#if label}
		<label for={name} class="block font-medium text-gray-100 sm:mt-px sm:pt-2">{label}</label>
	{/if}
	<div class="mt-1 group">
		<select {name} id={name} class={inputClass} {...$$restProps}>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	</div>
</div>

<style lang="postcss">
	select * {
		@apply text-white bg-gray-800;
	}
</style>
