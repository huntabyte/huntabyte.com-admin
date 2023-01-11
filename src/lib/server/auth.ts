import type { User } from "@prisma/client"
import { p } from "$lib/server/prisma"
import { redis } from "./redis"
import { createHash } from "$lib/utils"
import { AUTH_SECRET } from "$env/static/private"
import { sendMagicLinkEmail } from "$lib/server/email"
import { error } from "@sveltejs/kit"

export type Awaitable<T> = T | PromiseLike<T>

/**
 * Magic Link verification token
 */
export interface VerificationToken {
	identifier: string
	token: string
}

/**
 * The session object implementing this interface
 * is used to look up the user in the database.
 */
export interface AuthSession {
	/** A randomly generated value used to get ahold of the session. */
	sid: string
	/** Connects the active session to a user in the database */
	user: User
	/** The absolute date when the session expires. */
	expires: Date
}

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

export async function createUser(email: string) {
	return await p.user.create({
		data: {
			email,
		},
	})
}

export async function getUser(id: string) {
	return await p.user.findFirst({ where: { id: id } })
}
export async function getUserByEmail(email: string) {
	return await p.user.findFirst({ where: { email: email } })
}

export async function updateUser({ id, ...data }: Partial<User>) {
	return await p.user.update({ where: { id: id }, data })
}

export async function deleteUser(id: string) {
	return await p.user.delete({ where: { id: id } })
}

export async function createSession(session: AuthSession) {
	return await setSession(session.sid, session)
}

export async function getSessionAndUser(sid: string) {
	const session = (await getSession(sid)) as AuthSession
	if (!session) {
		return null
	}
	const user = await p.user.findUnique({
		where: {
			id: session.user.id,
		},
	})
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

export async function sendMagicLink(email: string) {
	console.log("Send magic link to", email)

	const token = await createHash(`${crypto.randomUUID()}${AUTH_SECRET}`)

	const verificationToken: VerificationToken = {
		identifier: email,
		token,
	}

	await createVerificationToken(verificationToken)

	sendMagicLinkEmail(email, token)
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

export async function getAuthSession(sid: string | undefined) {
	if (!sid) {
		return null
	}
	return await getSession(sid)
}
