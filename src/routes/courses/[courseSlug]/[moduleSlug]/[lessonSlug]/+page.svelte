<script lang="ts">
	import type { PageData } from './$types';
	import '$lib/styles/code/onedark.css';

	export let data: PageData;
</script>

<div>
	{@html data.content}
</div>
