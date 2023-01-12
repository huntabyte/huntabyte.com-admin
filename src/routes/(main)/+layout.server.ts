import { getUserSession } from "$lib/server/sessions"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
	return {
		session: getUserSession(event),
	}
}
