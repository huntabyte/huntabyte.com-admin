<script lang="ts">
	import type { CoursesWithModulesAndLessons } from '$lib/prisma.types'
	import Button from '$lib/components/Button.svelte'

	export let courses: CoursesWithModulesAndLessons[]

	const tableHeadings = ['ID', 'Title', 'Slug', 'Stripe ID', 'Status', '']
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
						{#each courses as course}
							<tr class="border-t border-gray-300">
								<td
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
									>{course.id}</td
								>
								<td
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
									>{course.title}</td
								>
								<td
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
									>{course.slug}</td
								>
								<td
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
									>{course.stripeProductId}</td
								>
								<td
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
									>{course.status}</td
								>

								<td
									class="relative whitespace-nowrap py-4 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center justify-end gap-2"
								>
									<Button href="/admin/courses/{course.slug}/content" size="xs" color="primary"
										>Content</Button
									>
									<Button size="xs" color="secondary">Edit</Button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
