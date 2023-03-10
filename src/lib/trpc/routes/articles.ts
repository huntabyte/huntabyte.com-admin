import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"
import { compileContent, processMarkdown } from "$lib/markdown"

export const CreateArticleSchema = zfd.formData({
	title: zfd.text(),
	slug: zfd.text(),
	content: zfd.text(z.string().nullish().optional()).nullable().optional(),
	markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
	pageContent: zfd.text(z.string().nullish().optional()).nullable().optional(),
})

const UpdateArticleSchema = z.object({
	id: zfd.numeric(),
	data: zfd.formData({
		title: zfd.text(),
		slug: zfd.text().optional(),
		content: zfd.text(z.string().nullish().optional()).nullable().optional(),
		markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
		pageContent: zfd
			.text(z.string().nullish().optional())
			.nullable()
			.optional(),
		moduleId: zfd.numeric().optional().nullable(),
		contentType: zfd.text().optional(),
		videoUrl: zfd.text().optional(),
		sortOrder: zfd.numeric().optional(),
		status: zfd.text(z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"])).optional(),
	}),
})

export const articles = t.router({
	list: t.procedure.query(() => p.article.findMany()),
	create: t.procedure.input(CreateArticleSchema).mutation(async ({ input }) => {
		if (input.content) {
			input.markdown = processMarkdown(input.content)
			input.pageContent = await compileContent(input.markdown)
		}
		return await p.article.create({ data: input })
	}),

	get: t.procedure
		.input(zfd.numeric())
		.query(({ input }) =>
			p.article.findUniqueOrThrow({ where: { id: input } }),
		),
	update: t.procedure.input(UpdateArticleSchema).mutation(({ input }) => {
		if (input.data.content) {
			input.data.markdown = processMarkdown(input.data.content)
		}
		return p.article.update({ where: { id: input.id }, data: input.data })
	}),
	delete: t.procedure
		.input(zfd.numeric())
		.mutation(({ input }) => p.article.delete({ where: { id: input } })),
	getBySlug: t.procedure
		.input(z.string())
		.query(async ({ input }) =>
			p.article.findFirstOrThrow({ where: { slug: input } }),
		),
})

export type ArticleRouter = typeof articles
