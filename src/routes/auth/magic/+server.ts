import {
	handleLogin,
	useVerificationToken,
	type VerificationToken,
} from "$lib/server/auth"
import { error, redirect, type RequestHandler } from "@sveltejs/kit"
import type { AuthSession } from "$lib/server/auth"

export const GET: RequestHandler = async ({ url, cookies }) => {
	const token = url.searchParams.get("token")
	const email = url.searchParams.get("identifier")
	if (!token) {
		console.error("Missing token")
		throw error(400, "Invalid request")
	}
	if (!email) {
		console.error("Missing email")
		throw error(400, "Invalid request")
	}
	const requestToken: VerificationToken = {
		identifier: email,
		token,
	}

	const verificationToken = await useVerificationToken(requestToken)
	if (!verificationToken) {
		console.error("Invalid token")
		throw error(401, "Verification token invalid or expired.")
	}

	let session: AuthSession
	try {
		session = await handleLogin(email)
		console.log("got session")
	} catch (err) {
		console.error(err)
		throw error(500, "Error creating session")
	}

	cookies.set("hbyte-session", session.sid, {
		path: "/",
		maxAge: 60 * 60 * 24 * 14,
	})

	throw redirect(303, "/")
}
