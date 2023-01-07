<script lang="ts">
	import '../app.postcss';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

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

<nav class="flex bg-gray-100">
	<a href="/" class="flex-1">Home</a>
	<a href="/pro" class="flex-1">Pro</a>
	<a href="/account" class="flex-1">Account</a>
	{#if $page.data.session?.user}
		<a href="/logout" class="flex-1">Logout</a>
	{:else}
		<a href="/login" class="flex-1">Login</a>
	{/if}
	<p>Logged in as {$page.data.session?.user.email}</p>
</nav>
<slot />
