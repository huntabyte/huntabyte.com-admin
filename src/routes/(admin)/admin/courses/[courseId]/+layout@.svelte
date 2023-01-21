<script lang="ts">
	import '../../../../../admin.css'
	import { page } from '$app/stores'
	import DesktopNavAlt from '$lib/components/admin/DesktopNavAlt.svelte'
	import { Toaster } from 'svelte-french-toast'
	import MobileNavAlt from '$lib/components/admin/MobileNavAlt.svelte'
	import MobileTopNav from '$lib/components/admin/MobileTopNav.svelte'
</script>

<Toaster />
<div class="flex h-full">
	<MobileNavAlt />
	<DesktopNavAlt />
	<div class="flex min-w-0 flex-1 flex-col overflow-hidden">
		<!-- Mobile top navigation -->
		<MobileTopNav />

		<main class="flex flex-1 overflow-hidden">
			<!-- Primary column -->
			<section
				aria-labelledby="primary-heading"
				class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
			>
				<slot />
			</section>

			<!-- Secondary column (hidden on smaller screens) -->
			<aside class="hidden lg:order-first lg:block lg:flex-shrink-0">
				<div
					class="relative flex h-full w-40 flex-col overflow-y-auto border-r border-gray-200 bg-gray-800 "
				>
					<div class="w-full text-center py-7 border-b border-gray-600">
						<a
							href="/admin/courses/{$page.data.course.id}"
							class="w-full text-center font-medium text-primary-500">{$page.data.course.title}</a
						>
					</div>
					<div class="py-7 flex flex-col space-y-4 px-4">
						<a href="/" class="hover:text-primary-500 transition-all duration-200 ease-in-out"
							>Details</a
						>
						<a href="/" class="hover:text-primary-500 transition-all duration-200 ease-in-out"
							>Content</a
						>
						<a href="/" class="hover:text-primary-500 transition-all duration-200 ease-in-out"
							>Comments</a
						>
					</div>
				</div>
			</aside>
		</main>
	</div>
</div>
