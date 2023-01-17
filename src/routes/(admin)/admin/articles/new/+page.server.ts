import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
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
		const body = (await event.request.formData()) as unknown

		try {
			await router
				.createCaller(await createContext(event))
				.articles.create(body)
		} catch (err) {
			console.log(err)
			return fail(400, { message: "Error creating article" })
		}

		return {
			success: true,
		}
	},
}
