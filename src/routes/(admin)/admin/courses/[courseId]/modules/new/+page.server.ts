import type { Actions } from "./$types"
import { router } from "$lib/trpc/router"
import { createContext } from "$lib/trpc/context"
import { redirect } from "@sveltejs/kit"
import { handleActionErrors } from "$lib/utils"

export const actions: Actions = {
	createModule: async (event) => {
		const formData = await event.request.formData()
		formData.append("courseId", event.params.courseId)
		const body = Object.fromEntries(formData)

		try {
			await router.createCaller(await createContext(event)).modules.create(body)
		} catch (e) {
			return handleActionErrors(e, body)
		}

		throw redirect(303, `/admin/courses/${event.params.courseId}`)
	},
}
