import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { zfd } from "$lib/zfd"
import { z } from "zod"

const CreateCourseSchema = zfd.formData({
	title: zfd.text(),
	slug: zfd.text(),
	description: zfd.text().nullable().optional(),
	stripeProductId: zfd.text().nullable().optional(),
	status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
})

export const courses = t.router({
	create: t.procedure
		.input(CreateCourseSchema)
		.mutation(({ input }) => p.course.create({ data: input })),
	delete: t.procedure
		.input(z.number())
		.mutation(({ input }) => p.course.delete({ where: { id: input } })),
	list: t.procedure.query(async () => {
		return await p.course.findMany({
			include: {
				modules: {
					orderBy: {
						sortOrder: "asc",
					},
					include: {
						lessons: {
							orderBy: {
								sortOrder: "asc",
							},
						},
					},
				},
				lessons: {
					orderBy: {
						sortOrder: "asc",
					},
				},
			},
		})
	}),
	getBySlug: t.procedure.input(z.string()).query(({ input }) =>
		p.course.findUniqueOrThrow({
			where: { slug: input },
			include: { modules: { include: { lessons: true } }, lessons: true },
		}),
	),
	get: t.procedure.input(z.number()).query(({ input }) =>
		p.course.findUniqueOrThrow({
			where: { id: input },
			include: {
				lessons: {
					orderBy: {
						sortOrder: "asc",
					},
				},
				modules: {
					orderBy: {
						sortOrder: "asc",
					},
					include: {
						lessons: {
							orderBy: {
								sortOrder: "asc",
							},
						},
						_count: {
							select: { lessons: true },
						},
					},
				},
				_count: {
					select: { lessons: true, modules: true },
				},
			},
		}),
	),
})

export type CourseRouter = typeof courses
