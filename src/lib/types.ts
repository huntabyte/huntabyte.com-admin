import type { User } from "@prisma/client"

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

export type DropdownGroup = {
	icon: string
	label: string
}[]
