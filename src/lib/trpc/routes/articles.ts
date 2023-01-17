import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"
import { compileContent } from "$lib/server/lessons"

export const CreateArticleSchema = zfd.formData({
	title: zfd.text(),
	slug: zfd.text(),
	content: zfd.text(z.string().nullish().optional()).nullable().optional(),
})

const UpdateArticleSchema = z.object({
	id: z.number(),
	data: zfd.formData({
		title: zfd.text(),
		slug: zfd.text().nullable().optional(),
		content: zfd.text(z.string().nullish().optional()).nullable().optional(),
		moduleId: zfd.numeric().optional().nullable(),
		contentType: zfd.text().optional(),
		videoUrl: zfd.text().optional(),
		sortOrder: zfd.numeric().optional(),
	}),
})

export const articles = t.router({
	create: t.procedure
		.input(CreateArticleSchema)
		.mutation(({ input }) => p.lesson.create({ data: input })),
	get: t.procedure
		.input(z.number())
		.query(({ input }) => p.lesson.findUniqueOrThrow({ where: { id: input } })),
	update: t.procedure
		.input(UpdateArticleSchema)
		.mutation(({ input }) =>
			p.lesson.update({ where: { id: input.id }, data: input.data }),
		),
	getBySlug: t.procedure.input(z.string()).query(async ({ input }) => {
		const lesson = await p.lesson.findFirstOrThrow({ where: { slug: input } })
		if (lesson.content) {
			lesson.content = await compileContent(lesson.content)
		}
		return lesson
	}),
})

export type ArticleRouter = typeof articles
