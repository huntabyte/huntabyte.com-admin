<script lang="ts">
	import classNames from 'classnames'

	export let href: string | undefined = undefined
	export let type: 'button' | 'submit' | 'reset' = 'button'
	export let color: 'default' | 'primary' | 'secondary' | 'error' = 'default'
	export let outline: boolean = false
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md'
	export let classes: string = ''

	const colorClasses = {
		default:
			'bg-gray-50 text-gray-900 border-2 border-gray-50 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-100  focus:ring-2 focus:ring-gray-300 transition-all duration-100 ease-in-out disabled:bg-gray-300 disabled:text-gray-700',
		primary:
			'bg-primary-500 text-gray-900 border-2 border-primary-500 hover:border-primary-600 hover:bg-primary-600 hover:text-gray-900  focus:ring-2 focus:ring-primary-300 transition-all duration-100 ease-in-out disabled:bg-gray-300 disabled:text-gray-700',
		secondary:
			'bg-secondary-500 text-gray-900 border-2 border-secondary-500 hover:border-secondary-600 hover:bg-secondary-600 hover:text-gray-900  focus:ring-2 focus:ring-secondary-300 transition-all duration-100 ease-in-out disabled:bg-gray-300 disabled:text-gray-700',
		error:
			'bg-error-500 text-gray-900 border-2 border-error-500 hover:bg-error-600 hover:border-error-600 hover:text-gray-900  focus:ring-2 focus:ring-error-300 transition-all duration-100 ease-in-out disabled:bg-gray-300 disabled:text-gray-700'
	}

	const outlineClasses = {
		default:
			'bg-transparent border-2 border-gray-50 text-gray-50 hover:bg-gray-100 hover:bg-opacity-10 transition-all duration-100 ease-in-out',
		primary:
			'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 transition-all duration-100 ease-in-out',
		secondary:
			'bg-transparent border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-10 transition-all duration-100 ease-in-out ',
		error:
			'bg-transparent border-2 border-error-500 text-error-500 hover:bg-error-500 hover:bg-opacity-10 transition-all duration-100 ease-in-out'
	}

	const sizeClasses = {
		xs: 'py-1.5 px-2.5 text-sm',
		sm: 'py-2 px-3',
		md: 'py-2.5 px-4 text-base',
		lg: 'py-3.5 px-5 text-lg'
	}

	const defaultClasses = 'font-medium rounded-md text-center'

	let buttonClass: string

	$: buttonClass = classNames(
		classes,
		defaultClasses,
		sizeClasses[size],
		outline ? outlineClasses[color] : colorClasses[color]
	)
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? undefined : type}
	{href}
	{...$$restProps}
	class={buttonClass}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	<slot />
</svelte:element>
