import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { handleActionErrors } from "$lib/utils"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
	return {
		article: router
			.createCaller(await createContext(event))
			.articles.get(event.params.articleId),
	}
}

export const actions: Actions = {
	updateArticle: async (event) => {
		const body = await event.request.formData()
		try {
			await router
				.createCaller(await createContext(event))
				.articles.update({ id: event.params.articleId, data: body })
		} catch (e) {
			return handleActionErrors(e, body)
		}
	},
}
