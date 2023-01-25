<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Input from '$lib/components/form/Input.svelte'
</script>

<div class="flex min-h-full flex-col sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="text-center text-4xl font-bold tracking-tight text-gray-50">
			Sign in to your account
		</h2>
		<p class="text-center text-gray-300">A magic link will be sent to your email to login.</p>
	</div>

	<div class="pt-6 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-gray-600 py-6 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="?/login" method="POST">
				<Input type="email" name="email" id="email" label="Email" />

				<div>
					<Button type="submit" color="primary" classes="w-full">Request magic link</Button>
				</div>
			</form>
		</div>
	</div>
</div>
