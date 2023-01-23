import type { PageServerLoad, Actions } from "./$types"
import { router } from "$lib/trpc/router"
import { createContext } from "$lib/trpc/context"
import { error, fail } from "@sveltejs/kit"
import { handleActionErrors } from "$lib/utils"

export const load: PageServerLoad = async () => {}

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

		return {
			status: 200,
		}
	},

	deleteModule: async (event) => {
		const moduleId = event.url.searchParams.get("id")

		if (!moduleId) {
			throw error(400, "Invalid request, unable to delete module")
		}

		try {
			await router
				.createCaller(await createContext(event))
				.modules.delete(Number(moduleId))
		} catch (e) {
			return handleActionErrors(e)
		}

		return {
			status: 200,
		}
	},

	updateSortOrder: async (event) => {},
	updateModule: async (event) => {
		const body = Object.fromEntries(await event.request.formData())

		const moduleId = event.url.searchParams.get("moduleId")
		if (!moduleId) {
			return fail(400, { message: "Bad request" })
		}
		try {
			await router.createCaller(await createContext(event)).modules.update({
				moduleId,
				data: body,
			})
		} catch (e) {
			return handleActionErrors(e, body)
		}

		return {
			status: 200,
		}
	},
	updateCourse: async (event) => {
		const body = Object.fromEntries(await event.request.formData())
		const courseId = event.params.courseId

		try {
			await router.createCaller(await createContext(event)).courses.update({
				courseId,
				data: body,
			})
		} catch (e) {
			return handleActionErrors(e, body)
		}

		return {
			status: 200,
		}
	},
}
