import { p } from "$lib/server/prisma"
import type { User } from "@prisma/client"

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
