import { getUserSession } from "$lib/server/sessions"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.session = await getUserSession(event)

	console.log(event.locals.session)

	return resolve(event)
}
