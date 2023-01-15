import type { ModuleWithLesson } from "$lib/server/courses"
import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"

export const courses = t.router({
	delete: t.procedure
		.input(z.number())
		.mutation(({ input }) => p.course.delete({ where: { id: input } })),
	list: t.procedure.query(async () => {
		return await p.course.findMany({
			include: {
				modules: {
					include: {
						lessons: true,
					},
				},
			},
		})
	}),
	getBySlug: t.procedure.input(z.string()).query(({ input }) =>
		p.course.findUniqueOrThrow({
			where: { slug: input },
			include: { modules: { include: { lessons: true } } },
		}),
	),
})

export type CourseRouter = typeof courses
