<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements'
	import classNames from 'classnames'

	interface $$Props extends HTMLTextareaAttributes {
		label?: string
		color?: 'primary' | 'secondary' | 'error'
		name: string
		rows?: number
	}
	export let label: string | undefined = undefined

	export let color: 'primary' | 'secondary' | 'error' = 'primary'

	export let name: string
	export let rows: number = 3

	const colorClasses = {
		primary: 'focus:ring-primary-500 focus:border-primary-500 border-gray-200',
		secondary: 'focus:ring-secondary-500 focus:border-secondary-500 border-gray-100',
		error: 'focus:ring-error-500 focus:border-error-500 border-error-500'
	}

	let inputClass: string
	const defaultClasses =
		'block w-full p-4 rounded-md shadow-sm bg-transparent border-2 focus:border-opacity-10 focus:ring-opacity-60 focus:ring-2 text-gray-50 transition-all duration-200 ease-in-out group-hover:border-gray-50 focus:group-hover:border-transparent resize-none disabled:bg-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed'
	$: inputClass = classNames(defaultClasses, colorClasses[color])
</script>

<div>
	<div>
		{#if label}
			<label for={name} class="block font-medium text-gray-50 sm:mt-px sm:pt-2">{label}</label>
		{/if}
	</div>
	<div class="mt-1 group">
		<textarea id={name} {name} {rows} class={inputClass} {...$$restProps} />
	</div>
</div>
