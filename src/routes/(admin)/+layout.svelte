<script lang="ts">
	import '../../admin.postcss'
	import MobileNav from '$lib/components/admin/MobileNav.svelte'
	import DesktopNav from '$lib/components/admin/DesktopNav.svelte'
	import MobileMenuButton from '$lib/components/admin/MobileMenuButton.svelte'
</script>

<div>
	<MobileNav />
	<DesktopNav />
	<div class="flex flex-1 flex-col md:pl-52">
		<MobileMenuButton />
		<slot />
	</div>
</div>
