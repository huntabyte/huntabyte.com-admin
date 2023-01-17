<script lang="ts">
	import type { Module } from '@prisma/client'
	import { updateModuleModal as dialog } from '$lib/ui/admin'
	import { ModuleUpdateModal, ModuleListItem } from '$lib/components/admin/modules'
	export let modules: Module[]

	export let currentModule: Module | null = null
</script>

<ModuleUpdateModal {currentModule} {dialog} />

<div class="shadow border-t-2 border-gray-600">
	<ul class="divide-y-2 divide-gray-500 mt-2">
		{#each modules as module}
			<ModuleListItem bind:currentModule {module} {dialog} />
		{/each}
	</ul>
</div>
