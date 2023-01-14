<script lang="ts">
	import classNames from 'classnames'
	export let label: string | undefined = undefined

	export let color: 'primary' | 'secondary' | 'error' = 'primary'
	export let type: string = 'text'

	const colorClasses = {
		primary: 'focus:ring-primary-500 focus:border-primary-500 border-gray-300',
		secondary: 'focus:ring-secondary-500 focus:border-secondary-500 border-gray-300',
		error: 'focus:ring-error-500 focus:border-error-500 border-error-500'
	}

	let inputClass: string
	const defaultClasses =
		'w-full block rounded-md shadow-sm focus:border-opacity-10 focus:ring-opacity-60 focus:ring-2 sm:max-w-xs sm:text-sm text-gray-900 group-hover:bg-gray-50 focus:bg-gray-50 transition-all duration-100 ease-in-out p-4'
	$: inputClass = classNames(defaultClasses, colorClasses[color])
</script>

<div>
	{#if label}
		<label for="first-name" class="block w-full text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
			>{label}</label
		>
	{/if}
	<div class="mt-1">
		<input {type} class={inputClass} {...$$restProps} />
	</div>
</div>
