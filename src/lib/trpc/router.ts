import type { Context } from "$lib/trpc/context"
import { initTRPC } from "@trpc/server"
import { users } from "$lib/trpc/routes/users"
import { lessons } from "$lib/trpc/routes/lessons"
import { courses } from "$lib/trpc/routes/courses"
import { modules } from "$lib/trpc/routes/modules"
import { articles } from "$lib/trpc/routes/articles"
import { tags } from "$lib/trpc/routes/tags"

export const t = initTRPC.context<Context>().create()

export const router = t.router({
	articles,
	courses,
	lessons,
	modules,
	tags,
	users,
})

export type Router = typeof router
