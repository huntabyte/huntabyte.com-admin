import type { Context } from "$lib/trpc/context"
import { initTRPC } from "@trpc/server"
import { ZodError } from "zod"

export const t = initTRPC.context<Context>().create({
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
                hello: 'this is formatted',
				zodError:
					error.code === "BAD_REQUEST" && error.cause instanceof ZodError
						? error.cause.flatten()
						: null,
			},
		}
	},
})
