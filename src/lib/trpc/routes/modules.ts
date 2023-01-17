import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"

export const CreateModuleSchema = zfd.formData({
	title: zfd.text(),
	sortOrder: zfd.numeric(),
	courseId: zfd.numeric(),
})

export const UpdateLessonSortOrderSchema = z.object({
	moduleId: z.number(),
	lessons: z.array(
		z.object({
			id: z.number(),
			sortOrder: z.number(),
		}),
	),
})

export const modules = t.router({
	get: t.procedure
		.input(z.number())
		.query(({ input }) => p.module.findUniqueOrThrow({ where: { id: input } })),
	create: t.procedure
		.input(CreateModuleSchema)
		.mutation(({ input }) => p.module.create({ data: input })),
	delete: t.procedure
		.input(z.number())
		.mutation(({ input }) => p.module.delete({ where: { id: input } })),
	updateLessons: t.procedure
		.input(UpdateLessonSortOrderSchema)
		.mutation(async ({ input }) => {
			const lessons = await Promise.all(
				input.lessons.map(async (lesson) => {
					return p.lesson.update({
						where: { id: lesson.id },
						data: {
							sortOrder: lesson.sortOrder,
						},
					})
				}),
			)
			return lessons
		}),
})

export type ModuleRouter = typeof modules
