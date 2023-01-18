import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"
import { compileContent, htmlToMarkdown } from "$lib/utils"

export const CreateLessonSchema = zfd.formData({
	title: zfd.text(),
	slug: zfd.text().nullable().optional(),
	content: zfd.text(z.string().nullish().optional()).nullable().optional(),
	markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
	moduleId: zfd.numeric().optional().nullable(),
	courseId: zfd.numeric(),
})

const UpdateLessonSchema = z.object({
	id: z.number(),
	data: zfd.formData({
		title: zfd.text(),
		slug: zfd.text().nullable().optional(),
		content: zfd.text(z.string().nullish().optional()).nullable().optional(),
		markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
		moduleId: zfd.numeric().optional().nullable(),
		contentType: zfd.text().optional(),
		videoUrl: zfd.text().optional(),
		sortOrder: zfd.numeric().optional(),
	}),
})

export const lessons = t.router({
	create: t.procedure.input(CreateLessonSchema).mutation(({ input }) => {
		if (input.content) {
			input.markdown = htmlToMarkdown(input.content)
		}
		return p.lesson.create({ data: input })
	}),
	get: t.procedure
		.input(z.number())
		.query(({ input }) => p.lesson.findUniqueOrThrow({ where: { id: input } })),
	update: t.procedure.input(UpdateLessonSchema).mutation(({ input }) => {
		if (input.data.content) {
			input.data.markdown = htmlToMarkdown(input.data.content)
		}
		return p.lesson.update({ where: { id: input.id }, data: input.data })
	}),
	getBySlug: t.procedure.input(z.string()).query(async ({ input }) => {
		const lesson = await p.lesson.findFirstOrThrow({ where: { slug: input } })
		if (lesson.markdown) {
			lesson.content = await compileContent(lesson.markdown)
		}
		return lesson
	}),
})

export type LessonRouter = typeof lessons
