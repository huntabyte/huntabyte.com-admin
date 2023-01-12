<script lang="ts">
	import '../../app.postcss'
	import Navbar from '$lib/components/Navbar.svelte'
</script>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<Navbar />
	<slot />
</div>
