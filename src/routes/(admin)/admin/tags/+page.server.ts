import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { fail } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
	return {
		tags: router.createCaller(await createContext(event)).tags.list(),
	}
}

export const actions: Actions = {
	createTag: async (event) => {
		const body = (await event.request.formData()) as unknown

		try {
			await router.createCaller(await createContext(event)).tags.create(body)
		} catch (err) {
			console.log(err)
			return fail(400, { message: "Error creating tag" })
		}

		return {
			success: true,
		}
	},
	updateTag: async (event) => {
		const body = (await event.request.formData()) as unknown

		try {
			await router.createCaller(await createContext(event)).tags.update(body)
		} catch (err) {
			console.error(err)
			return fail(400, { message: "Error updating tag" })
		}
	},
}
