<script lang="ts">
	import classNames from 'classnames'
	export let color: 'default' | 'primary' | 'secondary' | 'error' = 'default'
	export let size: 'sm' | 'md' = 'md'
	const colorClasses = {
		default: 'bg-gray-600 text-gray-600 bg-opacity-10',
		primary: 'bg-primary-600 text-primary-600 bg-opacity-10',
		secondary: 'bg-secondary-600 text-secondary-600 bg-opacity-10',
		error: 'bg-error-600 text-error-600 bg-opacity-10'
	}

	const sizeClasses = {
		sm: 'text-xs',
		md: 'text-sm'
	}

	const defaultClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 font-medium'
	let badgeClass: string

	$: badgeClass = classNames(defaultClasses, colorClasses[color], sizeClasses[size])
</script>

<span class={badgeClass}><slot /></span>
