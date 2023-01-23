<script lang="ts">
	import classNames from 'classnames'
	import { createMenu } from 'svelte-headlessui'
	import Transition from 'svelte-transition'
	import type { EventHandler } from 'svelte/elements'
	import Icon from '$lib/components/Icon.svelte'

	export let label: string = 'default'
	export let icon: boolean = false
	export let color: 'default' | 'primary' | 'secondary' | 'error' = 'default'
	export let variant: 'ghost' | 'outline' | 'default' = 'default'
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md'
	export let classes: string = ''

	export let menu = createMenu({ label })

	export let onSelect: EventHandler<Event, HTMLButtonElement> = (e: Event) => {
		console.log((e as CustomEvent).detail)
	}

	type DropdownGroup = {
		icon: string
		label: string
	}[]

	export let groups: DropdownGroup[] = [
		[
			{ icon: '', label: `Edit` },
			{ icon: '', label: `Duplicate` }
		],
		[
			{ icon: '', label: `Archive` },
			{ icon: '', label: `Move` }
		],
		[{ icon: '', label: `Delete` }]
	]

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

	const ghostClasses = {
		default:
			'bg-transparent text-gray-50 hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-100 ease-in-out',
		primary:
			'bg-transparent text-primary-500 hover:bg-primary-500 hover:bg-opacity-20 transition-all duration-100 ease-in-out',
		secondary:
			'bg-transparent text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20 transition-all duration-100 ease-in-out ',
		error:
			'bg-transparent text-error-500 group-hover:bg-error-500 hover:bg-opacity-20 transition-all duration-100 ease-in-out'
	}

	const sizeClasses = {
		xs: 'py-1.5 px-2.5 text-sm',
		sm: 'py-2 px-3 text-sm',
		md: 'py-2.5 px-4 text-base',
		lg: 'py-3.5 px-5 text-lg'
	}

	const iconSizeClasses = {
		xs: 'p-1.5 text-sm',
		sm: 'p-2 text-sm',
		md: 'p-2.5 text-base',
		lg: 'p-3.5 text-lg'
	}

	let btnColor = color

	const defaultClasses = 'font-medium rounded-md text-center flex items-center'
	const iconDefaultClasses = 'font-medium rounded-full text-center flex items-center'

	let buttonClass = classNames(
		classes,
		icon ? iconDefaultClasses : defaultClasses,
		icon ? iconSizeClasses[size] : sizeClasses[size],
		variant === 'outline' ?? outlineClasses[btnColor],
		variant === 'ghost' ?? ghostClasses[btnColor],
		variant === 'default' ?? colorClasses[btnColor]
	)

	$: buttonClass = classNames(
		classes,
		icon ? iconDefaultClasses : defaultClasses,
		icon ? iconSizeClasses[size] : sizeClasses[size],
		variant == 'ghost' ? ghostClasses[btnColor] : '',
		variant == 'outline' ? outlineClasses[btnColor] : '',
		variant == 'default' ? colorClasses[btnColor] : ''
	)
</script>

<div class="relative inline-block text-left">
	<button class={buttonClass} use:menu.button on:select={onSelect}>
		<slot />
		{#if !icon}
			<Icon icon="ph:caret-down" classes="ml-2 -mr-1 text-sm" />
		{/if}
	</button>

	<Transition
		show={$menu.expanded}
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
	>
		<div
			use:menu.items
			class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			{#each groups as group}
				<div class="px-1 py-1">
					{#each group as option}
						{@const active = $menu.active === option.label}
						<button
							use:menu.item
							class="group flex rounded-md items-center w-full px-2 py-2 text-sm {active
								? 'bg-violet-500 text-white'
								: 'text-gray-900'}"
						>
							<Icon icon="ph:house" classes="mr-2" />
							{option.label}
						</button>
					{/each}
				</div>
			{/each}
		</div>
	</Transition>
</div>
