import { p } from "$lib/server/prisma"
import { createCustomer } from "$lib/server/stripe"
import { t } from "$lib/trpc/t"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

export const users = t.router({
	getById: t.procedure
		.input(z.string())
		.query(({ input }) => p.user.findUnique({ where: { id: input } })),
	getByEmail: t.procedure
		.input(z.string().email())
		.query(({ input }) => p.user.findFirst({ where: { email: input } })),
	create: t.procedure.input(z.string().email()).mutation(async ({ input }) => {
		const customerId = await createCustomer(input)
		if (!customerId) {
			throw new TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Could not create stripe customer.",
			})
		}
		return p.user.create({
			data: {
				email: input,
				customerId,
			},
		})
	}),
	delete: t.procedure
		.input(z.string())
		.mutation(({ input }) => p.user.delete({ where: { id: input } })),
})

export type UserRouter = typeof users
