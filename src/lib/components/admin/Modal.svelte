<script lang="ts">
	import type { Dialog } from '$lib/ui/admin'
	import { Transition } from 'svelte-transition'

	export let dialog: Dialog
</script>

<Transition show={$dialog.expanded}>
	<div
		class="relative z-10"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		use:dialog.modal
	>
		<Transition
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="flex justify-center py-16 items-center">
					<Transition
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div
							class="relative transform overflow-hidden rounded-lg bg-gray-700 p-8 pt-5 pb-4 shadow-xl transition-all text-gray-50 max-w-xl w-full"
						>
							<slot />
							<div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
								<slot name="actions" />
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</div>
</Transition>
