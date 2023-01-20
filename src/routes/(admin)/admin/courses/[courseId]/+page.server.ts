import type { PageServerLoad, Actions } from "./$types"
import type { z } from "zod"
import { router } from "$lib/trpc/router"
import { createContext } from "$lib/trpc/context"
import { error, fail } from "@sveltejs/kit"
import type { CreateModuleSchema } from "$lib/trpc/routes/modules"

export const load: PageServerLoad = async () => {}

export const actions: Actions = {
	createModule: async (event) => {
		const body = Object.fromEntries(
			await event.request.formData(),
		) as unknown as z.infer<typeof CreateModuleSchema>
		body.courseId = Number(event.params.courseId)

		try {
			await router.createCaller(await createContext(event)).modules.create(body)
		} catch (err) {
			console.error(err)
			return fail(400, { message: "Invalid data" })
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
		} catch (err) {
			console.error(err)
			return fail(400, { message: "Invalid data" })
		}

		return {
			status: 200,
		}
	},

	updateSortOrder: async (event) => {},
	updateModule: async (event) => {
		const data = Object.fromEntries(await event.request.formData()) as unknown

		const moduleId = event.url.searchParams.get("moduleId")
		if (!moduleId) {
			return fail(400, { message: "Bad request" })
		}
		try {
			await router.createCaller(await createContext(event)).modules.update({
				moduleId,
				data,
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Something went wrong updating the module" })
		}

		return {
			status: 200,
		}
	},
	updateCourse: async (event) => {
		const data = Object.fromEntries(await event.request.formData()) as unknown

		const courseId = event.params.courseId

		try {
			await router.createCaller(await createContext(event)).courses.update({
				courseId,
				data,
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Something went wrong updating the course." })
		}

		return {
			status: 200,
		}
	},
}
