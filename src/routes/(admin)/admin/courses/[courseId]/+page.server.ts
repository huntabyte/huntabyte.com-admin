import type { PageServerLoad, Actions } from "./$types"
import type { z } from "zod"
import { router } from "$lib/trpc/router"
import { createContext } from "$lib/trpc/context"
import { fail, redirect } from "@sveltejs/kit"
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
			success: true,
		}
	},
}
