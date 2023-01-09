<script lang="ts">
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-50">
			Sign in to your account
		</h2>
		<p class="mt-2 text-center text-sm text-gray-200">
			A magic link will be sent to your email to login.
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-gray-600 py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="?/login" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-50">Email address</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full appearance-none rounded-md border border-gray-600 px-3 py-2 placeholder-gray-50 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm bg-gray-900 text-gray-50"
						/>
					</div>
				</div>

				<div>
					<button type="submit" class="btn-primary w-full justify-center">Request magic link</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
