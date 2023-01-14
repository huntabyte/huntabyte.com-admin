import type { Context } from "$lib/trpc/context"
import { initTRPC } from "@trpc/server"
import { users } from "$lib/trpc/routes/users"
import { lessons } from "$lib/trpc/routes/lessons"
import { courses } from "$lib/trpc/routes/courses"

export const t = initTRPC.context<Context>().create()

export const router = t.router({
	users,
	lessons,
	courses,
})

export type Router = typeof router
