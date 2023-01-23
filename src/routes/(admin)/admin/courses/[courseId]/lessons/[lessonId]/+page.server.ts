import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { CreateLessonSchema } from "$lib/trpc/routes/lessons"
import { handleActionErrors } from "$lib/utils"
import type { z } from "zod"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
	return {
		lesson: router
			.createCaller(await createContext(event))
			.lessons.get(Number(event.params.lessonId)),
	}
}

export const actions: Actions = {
	updateLesson: async (event) => {
		const body = Object.fromEntries(await event.request.formData())
		try {
			await router.createCaller(await createContext(event)).lessons.update({
				id: Number(event.params.lessonId),
				data: body,
			})
		} catch (e) {
			handleActionErrors(e, body)
		}

		return {
			success: true,
		}
	},
}
