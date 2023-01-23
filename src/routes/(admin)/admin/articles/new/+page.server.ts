import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { handleActionErrors } from "$lib/utils"
import { fail } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import type { Actions } from "./$types"

export const load: PageServerLoad = async (event) => {
	return {
		tags: router.createCaller(await createContext(event)).tags.list(),
	}
}

export const actions: Actions = {
	createArticle: async (event) => {
		const body = await event.request.formData()

		try {
			await router
				.createCaller(await createContext(event))
				.articles.create(body)
		} catch (e) {
			return handleActionErrors(e, body)
		}

		return {
			success: true,
		}
	},
}
