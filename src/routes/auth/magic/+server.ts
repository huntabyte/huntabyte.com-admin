import { handleMagicLinkVerification } from "$lib/server/auth"
import { error, redirect, type RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async (event) => {
	const session = await handleMagicLinkVerification(event)
	if (!session) {
		throw error(400, "Invalid or expired auth token, please try again")
	}
	throw redirect(303, "/")
}
