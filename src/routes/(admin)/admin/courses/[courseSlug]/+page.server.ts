import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
	return {
		course: router
			.createCaller(await createContext(event))
			.courses.getBySlug(event.params.courseSlug),
	}
}
