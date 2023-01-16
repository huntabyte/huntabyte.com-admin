<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { Editor } from '@tiptap/core'
	import StarterKit from '@tiptap/starter-kit'
	import Placeholder from '@tiptap/extension-placeholder'
	let element: Element
	let editor: Editor
	export let content: string = ''

	onMount(() => {
		editor = new Editor({
			editorProps: {
				attributes: {
					class: 'prose prose-lg prose-zinc focus:outline-none mt-4 dark:prose-invert w-full'
				}
			},
			content: content,
			element: element,
			extensions: [
				StarterKit,
				Placeholder.configure({
					placeholder: 'Start writing...'
				})
			],
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor
			},
			onUpdate: ({ editor }) => {
				content = editor.getHTML()
			}
		})
	})

	onDestroy(() => {
		if (editor) {
			editor.destroy()
		}
	})
</script>

<div bind:this={element} />
