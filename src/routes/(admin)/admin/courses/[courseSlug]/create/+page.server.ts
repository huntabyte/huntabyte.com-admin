import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { error, fail } from "@sveltejs/kit"
import type { z } from "zod"
import type { Actions, PageServerLoad } from "./$types"
import type { LessonCreateInputSchema } from "$lib/schemas/generated"
import { cloneObj } from "$lib/utils"
import { request } from "@playwright/test"

export const load: PageServerLoad = async ({ url }) => {
	if (!url.searchParams.get("module")) {
		throw error(404, "Module not specified")
	}
	// need to check here to see if module actually exists :)
}

export const actions: Actions = {
	create: async (event) => {
		if (!event.locals.session) {
			return fail(401, { message: "Unauthorized" })
		}

		const body = Object.fromEntries(await event.request.formData()) as unknown

		try {
			const lesson = router
				.createCaller(await createContext(event))
				.lessons.create(body)
		} catch (err) {
			return fail(400, { message: "Invalid data" })
		}
	},
}
