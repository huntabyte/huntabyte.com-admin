import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"
import { compileContent, htmlToMarkdown } from "$lib/utils"

export const CreateArticleSchema = zfd.formData({
	title: zfd.text(),
	slug: zfd.text(),
	content: zfd.text(z.string().nullish().optional()).nullable().optional(),
	markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
})

const UpdateArticleSchema = z.object({
	id: zfd.numeric(),
	data: zfd.formData({
		title: zfd.text(),
		slug: zfd.text().optional(),
		content: zfd.text(z.string().nullish().optional()).nullable().optional(),
		markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
		moduleId: zfd.numeric().optional().nullable(),
		contentType: zfd.text().optional(),
		videoUrl: zfd.text().optional(),
		sortOrder: zfd.numeric().optional(),
		status: zfd.text(z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"])).optional(),
	}),
})

export const articles = t.router({
	list: t.procedure.query(() => p.article.findMany()),
	create: t.procedure.input(CreateArticleSchema).mutation(({ input }) => {
		if (input.content) {
			input.markdown = htmlToMarkdown(input.content)
		}
		return p.article.create({ data: input })
	}),

	get: t.procedure
		.input(zfd.numeric())
		.query(({ input }) =>
			p.article.findUniqueOrThrow({ where: { id: input } }),
		),
	update: t.procedure.input(UpdateArticleSchema).mutation(({ input }) => {
		if (input.data.content) {
			input.data.markdown = htmlToMarkdown(input.data.content)
		}
		return p.article.update({ where: { id: input.id }, data: input.data })
	}),
	getBySlug: t.procedure.input(z.string()).query(async ({ input }) => {
		const article = await p.article.findFirstOrThrow({ where: { slug: input } })
		if (article.markdown) {
			article.content = await compileContent(article.markdown)
		}
		return article
	}),
})

export type ArticleRouter = typeof articles
