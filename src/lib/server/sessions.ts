import type { AuthSession, VerificationToken } from "$lib/types"
import { redis } from "$lib/server/redis"
import { getUser } from "$lib/server/users"
import type { RequestEvent, ServerLoadEvent } from "@sveltejs/kit"

const options = {
	baseKeyPrefix: "",
	sessionKeyPrefix: "user:session",
	sessionByUserIdKeyPrefix: "user:session:by-user-id:",
	verificationTokenKeyPrefix: "user:token:",
}

const { baseKeyPrefix } = options
const sessionKeyPrefix = `${baseKeyPrefix}${options.sessionKeyPrefix}`
const sessionByUserIdKeyPrefix = `${baseKeyPrefix}${options.sessionByUserIdKeyPrefix}`
const verificationTokenKeyPrefix = `${baseKeyPrefix}${options.verificationTokenKeyPrefix}`
const ONE_WEEK = 60 * 60 * 24 * 7

const setObjectAsJson = async (
	key: string,
	obj: any,
	EX: number = ONE_WEEK,
) => {
	await redis.set(key, JSON.stringify(obj), {
		EX: EX,
	})
}

const setSession = async (
	sid: string,
	session: AuthSession,
): Promise<AuthSession> => {
	const sessionKey = `${sessionKeyPrefix}${sid}`
	await setObjectAsJson(sessionKey, session)
	await redis.set(`${sessionByUserIdKeyPrefix}${session.user.id}`, sessionKey)
	return session
}

export async function getSession(sid: string) {
	const session = await redis.get(`${sessionKeyPrefix}${sid}`)
	if (!session) {
		return null
	}
	return JSON.parse(session) as AuthSession
}

export async function createSession(session: AuthSession) {
	return await setSession(session.sid, session)
}

export async function getSessionAndUser(sid: string) {
	const session = (await getSession(sid)) as AuthSession
	if (!session) {
		return null
	}
	const user = await getUser(session.user.id)

	return { session, user }
}

export async function updateSession(updates: AuthSession) {
	const session = await getSession(updates.sid)
	if (!session) {
		return null
	}
	return await setSession(updates.sid, { ...session, ...updates })
}

export async function deleteSession(sid: string) {
	await redis.del(`${sessionKeyPrefix}${sid}`)
}

export async function createVerificationToken(
	verificationToken: VerificationToken,
) {
	await setObjectAsJson(
		`${verificationTokenKeyPrefix}${verificationToken.identifier}:${verificationToken.token}`,
		verificationToken,
	)
	return verificationToken
}

export async function useVerificationToken(
	verificationToken: VerificationToken,
) {
	const tokenKey = `${verificationTokenKeyPrefix}${verificationToken.identifier}:${verificationToken.token}`
	const token = (await redis.get(tokenKey)) as VerificationToken | null

	if (!token) {
		return null
	}
	await redis.del(tokenKey)
	return token
}

export async function getUserSession(event: RequestEvent | ServerLoadEvent) {
	const sid = event.cookies.get("hbyte-session")

	if (!sid) {
		return null
	}

	let session: AuthSession | null = null

	try {
		session = await getSession(sid)
	} catch (err) {
		console.error(err)
	}

	if (!session) {
		return null
	}

	if (session.expires < new Date(Date.now())) {
		try {
			await deleteSession(sid)
		} catch (err) {
			console.error(err)
		}
		event.cookies.delete("hbyte-session")
		return null
	}

	return await setSession(sid, { ...session })
}
