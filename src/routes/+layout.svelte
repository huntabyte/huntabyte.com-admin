<script lang="ts">
	import '../app.postcss';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
	<Navbar />
	<slot />
</div>
