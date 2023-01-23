import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { handleActionErrors } from "$lib/utils"
import { redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
	createLesson: async (event) => {
		const formData = await event.request.formData()
		formData.append("courseId", event.params.courseId)
		const body = Object.fromEntries(formData)

		try {
			await router.createCaller(await createContext(event)).lessons.create(body)
		} catch (e) {
			return handleActionErrors(e, body)
		}

		throw redirect(303, `/admin/courses/${event.params.courseId}`)
	},
}
