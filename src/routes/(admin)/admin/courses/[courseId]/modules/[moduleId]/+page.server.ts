import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
	return {
		module: router
			.createCaller(await createContext(event))
			.modules.get(Number(event.params.moduleId)),
	}
}
