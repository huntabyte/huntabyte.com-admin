<script lang="ts">
	import '../../admin.css'
	import MobileNav from '$lib/components/admin/MobileNav.svelte'
	import DesktopNav from '$lib/components/admin/DesktopNav.svelte'
	import MobileMenuButton from '$lib/components/admin/MobileMenuButton.svelte'
	import { Toaster } from 'svelte-french-toast'
</script>

<Toaster />
<div>
	<MobileNav />
	<DesktopNav />
	<div class="flex flex-1 flex-col md:pl-52">
		<MobileMenuButton />
		<main class="flex-1">
			<div class="py-2 md:py-6">
				<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<slot />
				</div>
			</div>
		</main>
	</div>
</div>
