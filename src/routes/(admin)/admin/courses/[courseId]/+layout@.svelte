<script lang="ts">
	import '../../../../../admin.css'
	import { page } from '$app/stores'
	import { Toaster } from 'svelte-french-toast'
	import DesktopNav from '$lib/components/admin/navigation/DesktopNav.svelte'
	import MobileNav from '$lib/components/admin/navigation/MobileNav.svelte'
	import MobileTopNav from '$lib/components/admin/navigation/MobileTopNav.svelte'
</script>

<Toaster />
<div class="flex h-full">
	<MobileNav />
	<DesktopNav />
	<div class="flex min-w-0 flex-1 flex-col overflow-hidden">
		<!-- Mobile top navigation -->
		<MobileTopNav />

		<main class="flex flex-1 overflow-hidden">
			<!-- Primary column -->
			<section
				aria-labelledby="primary-heading"
				class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last px-10 py-6"
			>
				<slot />
			</section>

			<!-- Secondary column (hidden on smaller screens) -->
			<aside class="hidden lg:order-first lg:block lg:flex-shrink-0">
				<div
					class="relative flex h-full w-40 flex-col overflow-y-auto border-r border-gray-500 bg-gray-800 "
				>
					<div class="w-full text-center py-7 border-b border-gray-500">
						<a
							href="/admin/courses/{$page.data.course.id}"
							class="w-full text-center font-medium text-primary-500">{$page.data.course.title}</a
						>
					</div>
					<div class="py-7 flex flex-col space-y-4 px-4">
						<a
							href="/admin/courses/{$page.data.course.id}"
							class="hover:text-primary-500 transition-all duration-200 ease-in-out">Information</a
						>
						<a
							href="/admin/courses/{$page.data.course.id}/curriculum"
							class="hover:text-primary-500 transition-all duration-200 ease-in-out">Curriculum</a
						>
						<a
							href="/admin/courses/{$page.data.course.id}/comments"
							class="hover:text-primary-500 transition-all duration-200 ease-in-out">Comments</a
						>
						<a
							href="/admin/courses/{$page.data.course.id}/students"
							class="hover:text-primary-500 transition-all duration-200 ease-in-out">Students</a
						>
					</div>
				</div>
			</aside>
		</main>
	</div>
</div>
