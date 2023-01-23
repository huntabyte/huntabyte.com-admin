import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { handleActionErrors } from "$lib/utils"
import { fail } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
	createLesson: async (event) => {
		const body = Object.fromEntries(await event.request.formData())
		const { courseId } = event.params
		const moduleId = event.url.searchParams.get("moduleId")

		if (!moduleId) {
			return fail(400, { message: "Bad request" })
		}
		try {
			await router.createCaller(await createContext(event)).lessons.create({
				courseId,
				moduleId,
				data: body,
			})
		} catch (e) {
			return handleActionErrors(e, body)
		}

		return {
			status: 201,
		}
	},
}
