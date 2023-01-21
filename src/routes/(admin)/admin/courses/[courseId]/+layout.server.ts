import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
	return {
		course: router
			.createCaller(await createContext(event))
			.courses.get(Number(event.params.courseId)),
		session: event.locals.session,
	}
}
