import { users } from "$lib/trpc/routes/users"
import { lessons } from "$lib/trpc/routes/lessons"
import { courses } from "$lib/trpc/routes/courses"
import { modules } from "$lib/trpc/routes/modules"
import { articles } from "$lib/trpc/routes/articles"
import { tags } from "$lib/trpc/routes/tags"
import { t } from '$lib/trpc/t'


export const router = t.router({
	articles,
	courses,
	lessons,
	modules,
	tags,
	users,
})

export type Router = typeof router
