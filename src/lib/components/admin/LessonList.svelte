<script lang="ts">
	import { page } from '$app/stores'
	import { flip } from 'svelte/animate'
	import { dndzone } from 'svelte-dnd-action'
	import type { Lesson, Module } from '@prisma/client'
	import Badge from '../Badge.svelte'
	import { trpc } from '$lib/trpc/client'

	export let lessons: Lesson[]
	export let module: Module

	let items: any[] = []
	const flipDurationMs = 200

	function handleDndConsider(e: CustomEvent<DndEvent>) {
		items = e.detail.items
	}
	async function handleDndFinalize(e: CustomEvent<DndEvent>) {
		items = e.detail.items
		items = items.map((item, idx) => {
			return { ...item, sortOrder: idx }
		})
		const res = await trpc($page).modules.updateLessons.mutate({
			moduleId: module.id,
			lessons: items
		})
		console.log(res)
	}

	$: items = lessons.map((lesson) => {
		return lesson
	})
</script>

<div class="overflow-hidden shadow border-t-2 border-gray-600">
	<ul
		use:dndzone={{ items, flipDurationMs }}
		on:consider={handleDndConsider}
		on:finalize={handleDndFinalize}
		class="divide-y-2 divide-gray-500 mt-2"
	>
		{#each items as item (item.id)}
			<li animate:flip={{ duration: flipDurationMs }}>
				<a href="/admin/courses/{item.courseId}/lessons/{item.id}" class="block hover:bg-gray-800">
					<div class="flex items-center  py-4 px-4">
						<div class="flex min-w-0 flex-1 items-center">
							<div class="min-w-0 flex-1 grid grid-cols-2 gap-4 items-center">
								<div>
									<p class="truncate font-medium text-primary-600">{item.title}</p>
									<p class="mt-2 flex items-center text-sm text-gray-100">
										<span class="truncate">Hunter Johnston</span>
									</p>
								</div>
								<div class="flex gap-4 items-center justify-self-end">
									{#if item.status === 'PUBLISHED'}
										<Badge color="primary">
											{item.status}
										</Badge>
									{:else if item.status === 'DRAFT'}
										<Badge color="secondary">
											{item.status}
										</Badge>
									{:else if item.status === 'ARCHIVED'}
										<Badge color="default">
											{item.status}
										</Badge>
									{/if}
									<div>
										<svg
											class="h-5 w-5 text-gray-300"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
