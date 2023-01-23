import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { Actions, PageServerLoad } from "./$types"
import { handleActionErrors } from "$lib/utils"

export const load: PageServerLoad = async (event) => {
	return {
		tags: router.createCaller(await createContext(event)).tags.list(),
	}
}

export const actions: Actions = {
	createTag: async (event) => {
		const body = await event.request.formData()

		try {
			await router.createCaller(await createContext(event)).tags.create(body)
		} catch (e) {
			return handleActionErrors(e, body)
		}

		return {
			status: 201,
		}
	},
	updateTag: async (event) => {
		const body = await event.request.formData()

		try {
			await router.createCaller(await createContext(event)).tags.update(body)
		} catch (e) {
			return handleActionErrors(e, body)
		}

		return {
			status: 200,
		}
	},
}
