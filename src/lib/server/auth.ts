import type { User } from "@prisma/client"
import { prisma } from "$lib/server/prisma"
import { error } from "@sveltejs/kit"

export const loginUser = async (email: string) => {
	let user: User | null
	try {
		// check if user exists in DB, if they do, log them in with a magic link
		user = await prisma.user.findFirst({
			where: {
				email: email,
			},
		})
	} catch (err) {
		console.error(err)
		throw error(500, "Error finding user")
	}

	// if user doesn't exist, register them and send a magic link
	if (!user) {
		user = await prisma.user.create({
			data: {
				email: email,
			},
		})
	}
}
