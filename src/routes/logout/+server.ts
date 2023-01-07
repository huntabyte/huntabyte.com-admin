import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({ locals }) => {
	await locals.sb.auth.signOut()

	throw redirect(303, "/login")
}
