<script lang="ts">
	import { page } from '$app/stores'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
	import Input from '$lib/components/form/Input.svelte'
	import Textarea from '$lib/components/form/Textarea.svelte'
	import type { PageData } from './$types'
</script>

<PageHeading>
	<h2 slot="heading" class="font-bold text-3xl">New Lesson</h2>
</PageHeading>

<form action="?/create">
	<Input label="Title" name="module" type="hidden" value={$page.url.searchParams.get('module')} />
	<Input label="Title" name="title" />
	<Input label="Slug" name="slug" />
	<Textarea label="Content" name="content" />
</form>
