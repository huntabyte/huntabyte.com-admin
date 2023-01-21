<script lang="ts">
	import { mobileAltMenuDialog as dialog } from '$lib/ui/admin'
	import Logo from '$lib/components/Logo.svelte'
</script>

<div class="lg:hidden">
	<div class="flex items-center justify-between bg-primary-600 py-2 px-4 sm:px-6 lg:px-8">
		<div class="w-8">
			<Logo />
		</div>
		<div>
			<button
				type="button"
				class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				on:click={dialog.open}
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>
