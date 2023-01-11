import { handleSession } from "$lib/server/auth"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.session = await handleSession(event.cookies)

	console.log(event.locals.session)

	return resolve(event)
}
