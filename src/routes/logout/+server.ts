import { handleLogout } from "$lib/server/auth"
import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async (event) => {
	await handleLogout(event)

	throw redirect(303, "/login")
}
