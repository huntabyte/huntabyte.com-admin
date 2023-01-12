import type { PageServerLoad } from "./$types"
import { router } from "$lib/trpc/router"
import { createContext } from "$lib/trpc/context"

export const load: PageServerLoad = async (event) => {
	return {
		lesson: router
			.createCaller(await createContext(event))
			.lessons.getBySlug(event.params),
	}
}
