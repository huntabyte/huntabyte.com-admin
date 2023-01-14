<script lang="ts">
	import classNames from 'classnames'

	export let href: string | undefined = undefined
	export let type: 'button' | 'submit' | 'reset' = 'button'
	export let color: 'primary' | 'secondary' | 'error' = 'primary'
	export let outline: boolean = false
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md'

	const colorClasses = {
		primary:
			'bg-primary-500 text-gray-1000 hover:bg-primary-600 hover:text-gray-900 focus:ring-2 focus:ring-primary-300 transition-all duration-100 ease-in-out',
		secondary:
			'bg-secondary-500 text-gray-1000 hover:bg-secondary-600 hover:text-gray-900 focus:ring-2 focus:ring-secondary-300 transition-all duration-100 ease-in-out',
		error:
			'bg-error-500 text-gray-1000 hover:bg-error-600 hover:text-gray-900 focus:ring-2 focus:ring-error-300 transition-all duration-100 ease-in-out'
	}

	const outlineClasses = {
		primary:
			'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 transition-all duration-100 ease-in-out',
		secondary:
			'bg-transparent border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-10 transition-all duration-100 ease-in-out ',
		error:
			'bg-transparent border-2 border-error-500 text-error-500 hover:bg-error-500 hover:bg-opacity-10 transition-all duration-100 ease-in-out'
	}

	const sizeClasses = {
		xs: 'py-1.5 px-2.5 text-sm',
		sm: 'py-2 px-3 text-sm',
		md: 'py-2.5 px-4 text-base',
		lg: 'py-3.5 px-5 text-lg'
	}

	const defaultClasses = 'font-medium rounded-md text-center'

	let buttonClass: string

	$: buttonClass = classNames(
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
