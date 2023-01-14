<script lang="ts">
	import CreateModuleForm from '$lib/components/admin/CreateModuleForm.svelte'
	import PageHeading from '$lib/components/admin/PageHeading.svelte'
</script>

<PageHeading>
	<h2 slot="heading" class="text-3xl font-bold">New Module</h2>
</PageHeading>
<CreateModuleForm />
