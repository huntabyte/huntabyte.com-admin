<script lang="ts">
	import type { ModulesWithLessons } from '$lib/prisma.types'
	import Button from '$lib/components/Button.svelte'

	export let modules: ModulesWithLessons[]

	const tableHeadings = ['Order', 'Title', 'Slug', 'Status', '']
</script>

<div class="mt-8 flex flex-col">
	<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
			<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
				<table class="min-w-full">
					<thead class="bg-white">
						<tr>
							{#each tableHeadings as heading}
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>{heading}</th
								>
							{/each}
						</tr>
					</thead>
					<tbody class="bg-white">
						{#each modules as module}
							<tr class="border-t border-gray-200">
								<th
									colspan="5"
									scope="colgroup"
									class="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
									>{module.title}</th
								>
							</tr>

							{#each module.lessons as lesson}
								<tr class="border-t border-gray-300">
									<td
										class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
										>{lesson.id}</td
									>
									<td
										class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
										>{lesson.title}</td
									>
									<td
										class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
										>{lesson.slug}</td
									>
									<td
										class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
										>{lesson.sortOrder}</td
									>
									<td
										class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
										>{lesson.status}</td
									>

									<td
										class="relative whitespace-nowrap py-4 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center justify-end gap-2"
									>
										<Button size="xs" color="secondary">Edit</Button>
									</td>
								</tr>
							{/each}
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
