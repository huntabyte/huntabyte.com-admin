import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { Actions } from "./$types"
import { fail, redirect } from "@sveltejs/kit"
import { handleActionErrors } from "$lib/utils"

export const actions: Actions = {
	createCourse: async (event) => {
		const body = Object.fromEntries(await event.request.formData())

		try {
			await router.createCaller(await createContext(event)).courses.create(body)
		} catch (e) {
			return handleActionErrors(e, body)
		}

		throw redirect(303, "/admin/courses")
	},
}
