import type { PrismaClient } from "@prisma/client"
import type {
	Adapter,
	AdapterAccount,
	AdapterUser,
	AdapterSession,
	VerificationToken,
} from "next-auth/adapters"
import type { RedisClientType } from "redis"

export interface PrismaRedisAdapterOptions {
	baseKeyPrefix?: string
	sessionKeyPrefix?: string
	sessionByUserIdKeyPrefix?: string
	verificationTokenKeyPrefix?: string
}

export const defaultOptions = {
	baseKeyPrefix: "",
	sessionKeyPrefix: "user:session:",
	sessionByUserIdKeyPrefix: "user:session:by-user-id:",
	verificationTokenKeyPrefix: "user:token:",
}

const isoDateRE =
	/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function isDate(value: any) {
	return value && isoDateRE.test(value) && !isNaN(Date.parse(value))
}

export function hydrateDates(json: object) {
	return Object.entries(json).reduce((acc, [key, val]) => {
		acc[key] = isDate(val) ? new Date(val as string) : val
		return acc
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	}, {} as any)
}

export function PrismaRedisAdapter(
	p: PrismaClient,
	redis: RedisClientType,
	options: PrismaRedisAdapterOptions = {},
): Adapter {
	const mergedOptions = {
		...defaultOptions,
		...options,
	}

	const { baseKeyPrefix } = mergedOptions
	const sessionKeyPrefix = baseKeyPrefix + mergedOptions.sessionKeyPrefix
	const sessionByUserIdKeyPrefix =
		baseKeyPrefix + mergedOptions.sessionByUserIdKeyPrefix
	const verificationTokenKeyPrefix =
		baseKeyPrefix + mergedOptions.verificationTokenKeyPrefix

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const setObjectAsJson = async (key: string, obj: any) => {
		await redis.set(key, JSON.stringify(obj))
	}

	const setSession = async (
		id: string,
		session: AdapterSession,
	): Promise<AdapterSession> => {
		const sessionKey = sessionKeyPrefix + id
		await setObjectAsJson(sessionKey, session)
		await redis.set(sessionByUserIdKeyPrefix + session.userId, sessionKey)
		return session
	}

	const getSession = async (id: string) => {
		const session = (await redis.get(
			sessionKeyPrefix + id,
		)) as AdapterSession | null
		if (!session) return null
		return hydrateDates(session)
	}

	return {
		createUser: (data) => p.user.create({ data }) as Promise<AdapterUser>,
		getUser: (id) =>
			p.user.findUnique({ where: { id } }) as Promise<AdapterUser>,
		getUserByEmail: (email) =>
			p.user.findUnique({
				where: {
					email,
				},
			}) as Promise<AdapterUser>,
		async getUserByAccount(provider_providerAccountId) {
			const account = await p.account.findUnique({
				where: { provider_providerAccountId },
				select: { user: true },
			})

			const user = account?.user as AdapterUser

			return user ?? null
		},
		updateUser: ({ id, ...data }) =>
			p.user.update({ where: { id }, data }) as Promise<AdapterUser>,
		deleteUser: (id) =>
			p.user.delete({ where: { id } }) as Promise<AdapterUser>,
		linkAccount: (data) =>
			p.account.create({ data }) as unknown as AdapterAccount,
		unlinkAccount: (provider_providerAccountId) =>
			p.account.delete({
				where: { provider_providerAccountId },
			}) as unknown as AdapterAccount,
		createSession: (session) => setSession(session.sessionToken, session),
		async getSessionAndUser(sessionToken) {
			const session = (await getSession(sessionToken)) as AdapterSession
			if (!session) return null
			const user = (await p.user.findUnique({
				where: { id: session.userId },
			})) as AdapterUser
			return { session, user }
		},
		async updateSession(updates) {
			const session = await getSession(updates.sessionToken)
			if (!session) {
				return null
			}
			return await setSession(updates.sessionToken, { ...session, ...updates })
		},
		async deleteSession(sessionToken) {
			await redis.del(sessionKeyPrefix + sessionToken)
		},
		async createVerificationToken(verificationToken) {
			await setObjectAsJson(
				`${verificationTokenKeyPrefix}${verificationToken.identifier}:${verificationToken.token}`,
				verificationToken,
			)
			return verificationToken
		},
		async useVerificationToken(verificationToken) {
			const tokenKey = `${verificationTokenKeyPrefix}${verificationToken.identifier}:${verificationToken.token}`

			const token = (await redis.get(tokenKey)) as VerificationToken | null

			if (!token) {
				return null
			}
			await redis.del(tokenKey)
			return hydrateDates(token)
		},
	}
}
