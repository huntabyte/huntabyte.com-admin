import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"
import { compileContent, processMarkdown } from "$lib/markdown"
import { slugify } from "$lib/utils"

export const CreateLessonSchema = zfd.formData({
	title: zfd.text(),
	slug: zfd.text().nullable().optional(),
	content: zfd.text(z.string().nullish().optional()).nullable().optional(),
	markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
	moduleId: zfd.numeric().optional().nullable(),
	courseId: zfd.numeric(),
})

export const CreateNewLessonSchema = zfd.formData({
	courseId: zfd.numeric(),
	moduleId: zfd.numeric(),
	data: z.object({
		title: zfd.text(),
	}),
})

const UpdateLessonSchema = z.object({
	id: z.number(),
	data: zfd.formData({
		title: zfd.text().optional(),
		slug: zfd.text().nullable().optional(),
		content: zfd.text(z.string().nullish().optional()).nullable().optional(),
		markdown: zfd.text(z.string().nullish().optional()).nullable().optional(),
		moduleId: zfd.numeric().optional(),
		contentType: zfd.text().optional(),
		videoUrl: zfd.text(z.string().nullish().optional()).nullable().optional(),
		sortOrder: zfd.numeric().optional(),
	}),
})

export const lessons = t.router({
	create: t.procedure.input(CreateNewLessonSchema).mutation(({ input }) =>
		p.lesson.create({
			data: {
				...input.data,
				slug: slugify(input.data.title),
				courseId: input.courseId,
				moduleId: input.moduleId,
			},
		}),
	),
	get: t.procedure
		.input(z.number())
		.query(({ input }) => p.lesson.findUniqueOrThrow({ where: { id: input } })),
	update: t.procedure.input(UpdateLessonSchema).mutation(({ input }) => {
		console.log("Made it to updateLesson procedure")
		if (input.data.content) {
			input.data.markdown = processMarkdown(input.data.content)
		}
		return p.lesson.update({
			where: { id: input.id },
			data: input.data,
		})
	}),
	delete: t.procedure.input(z.number()).mutation(({ input }) =>
		p.lesson.delete({
			where: {
				id: input,
			},
		}),
	),
	getBySlug: t.procedure.input(z.string()).query(async ({ input }) => {
		const lesson = await p.lesson.findFirstOrThrow({ where: { slug: input } })
		if (lesson.markdown) {
			lesson.content = await compileContent(lesson.markdown)
		}
		return lesson
	}),
})

export type LessonRouter = typeof lessons
