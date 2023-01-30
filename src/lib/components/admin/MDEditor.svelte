<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import EasyMDE from 'easymde'
	let element: HTMLTextAreaElement
	let editor: EasyMDE
	onMount(() => {
		editor = new EasyMDE({
			element,
			placeholder: 'Start writing...',
			previewClass: 'editor-preview',
			minHeight: '75vh'
		})
	})

	onDestroy(() => {
		if (editor) {
			editor.toTextArea()
		}
	})
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css" />
</svelte:head>

<textarea bind:this={element} name="content" id="mdeditor" />
