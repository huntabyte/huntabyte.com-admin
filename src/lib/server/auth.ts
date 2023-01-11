import type { User } from "@prisma/client"
import { createHash } from "$lib/utils"
import { AUTH_SECRET } from "$env/static/private"
import { sendMagicLinkEmail } from "$lib/server/email"
import { error, type RequestEvent } from "@sveltejs/kit"
import type { AuthSession, VerificationToken } from "$lib/types"
import {
	createSession,
	createVerificationToken,
	deleteSession,
	useVerificationToken,
} from "$lib/server/sessions"
import { createUser, getUserByEmail } from "$lib/server/users"

export async function sendMagicLink(email: string) {
	const token = await createHash(`${crypto.randomUUID()}${AUTH_SECRET}`)

	const verificationToken: VerificationToken = {
		identifier: email,
		token,
	}

	await createVerificationToken(verificationToken)

	sendMagicLinkEmail(email, token)
}

export async function handleMagicLinkVerification(event: RequestEvent) {
	const token = event.url.searchParams.get("token")
	const email = event.url.searchParams.get("identifier")
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
		throw error(401, "Verification token invalid or expired. Please try again.")
	}

	let session: AuthSession
	try {
		session = await handleLogin(email)
	} catch (err) {
		console.error(err)
		throw error(500, "Error creating session")
	}

	event.cookies.set("hbyte-session", session.sid, {
		path: "/",
		maxAge: 60 * 60 * 24 * 14,
	})

	return session
}

export async function handleLogin(email: string) {
	let user: User | null = null
	try {
		user = await getUserByEmail(email)
	} catch (err) {
		console.error(err)
	}

	if (!user) {
		try {
			user = await createUser(email)
		} catch (err) {
			throw error(500, "Error creating user")
		}
	}

	const sessionObj: AuthSession = {
		sid: crypto.randomUUID(),
		user: user,
		expires: new Date(Date.now() + 60 * 60 * 24 * 7),
	}

	const session = await createSession(sessionObj)
	return session
}

export async function handleLogout(event: RequestEvent) {
	try {
		const sid = event.cookies.get("hbyte-session")
		if (sid) {
			await deleteSession(sid)
		}
		event.cookies.delete("hbyte-session")
		// Not sure if this is needed but I'm adding just in case :)
		event.locals.session = null
	} catch (err) {
		event.cookies.delete("hbyte-session")
		// Not sure if this is needed but I'm adding just in case :)
		event.locals.session = null
	}
}
