import { getAuthSession } from "$lib/server/auth"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event
	const sid = cookies.get("hbyte-session")

	const session = await getAuthSession(sid)
	console.log(session)

	return resolve(event)
}
