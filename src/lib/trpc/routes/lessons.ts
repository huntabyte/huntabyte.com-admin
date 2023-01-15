import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { LessonCreateInputSchema } from "$lib/schemas/generated"

const lessonParams = z.object({
	lessonSlug: z.string(),
	moduleSlug: z.string(),
	courseSlug: z.string(),
})

export const lessons = t.router({
	getBySlug: t.procedure.input(lessonParams).query(({ input }) => {
		const { lessonSlug, moduleSlug, courseSlug } = input
		return p.lesson.findFirst({
			where: {
				slug: lessonSlug,
				module: {
					slug: moduleSlug,
					course: {
						slug: courseSlug,
					},
				},
			},
		})
	}),
	create: t.procedure
		.input(LessonCreateInputSchema)
		.mutation(({ input }) => p.lesson.create({ data: input })),
})

export type LessonRouter = typeof lessons
