<script lang="ts">
	import '../../admin.css'
	import DesktopNavAlt from '$lib/components/admin/DesktopNavAlt.svelte'
	import MobileMenuButton from '$lib/components/admin/MobileMenuButton.svelte'
	import { Toaster } from 'svelte-french-toast'
	import MobileNavAlt from '$lib/components/admin/MobileNavAlt.svelte'
	import MobileTopNav from '$lib/components/admin/MobileTopNav.svelte'
</script>

<Toaster />
<div class="flex h-full">
	<MobileNavAlt />
	<DesktopNavAlt />
	<div class="flex min-w-0 flex-1 flex-col overflow-hidden">
		<MobileTopNav />

		<main class="flex flex-1 overflow-hidden">
			<section
				aria-labelledby="primary-heading"
				class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last "
			>
				<slot />
			</section>
		</main>
	</div>
</div>
