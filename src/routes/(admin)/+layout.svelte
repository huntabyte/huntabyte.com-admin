<script lang="ts">
	import '../../admin.css'
	import DesktopNav from '$lib/components/admin/navigation/DesktopNav.svelte'
	import { Toaster } from 'svelte-french-toast'
	import MobileNav from '$lib/components/admin/navigation/MobileNav.svelte'
	import MobileTopNav from '$lib/components/admin/navigation/MobileTopNav.svelte'
</script>

<Toaster />
<div class="flex h-full">
	<MobileNav />
	<DesktopNav />
	<div class="flex min-w-0 flex-1 flex-col overflow-hidden">
		<MobileTopNav />

		<main class="flex flex-1 overflow-hidden">
			<section
				aria-labelledby="primary-heading"
				class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last w-full px-10 py-6"
			>
				<slot />
			</section>
		</main>
	</div>
</div>
