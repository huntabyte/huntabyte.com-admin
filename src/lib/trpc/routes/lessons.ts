import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "zod-form-data"

export const CreateLessonSchema = zfd.formData({
    title: zfd.text(),
    slug: zfd.text().nullable().optional(),
    content: zfd.text(z.string().nullish().optional()).nullable().optional(),
    moduleId: zfd.numeric().optional().nullable(),
    courseId: zfd.numeric()
})

const UpdateLessonSchema = z.object({
    id: z.number(),
    data: zfd.formData({
        title: zfd.text(),
        slug: zfd.text().nullable().optional(),
        content: zfd.text(z.string().nullish().optional()).nullable().optional(),
        moduleId: zfd.numeric().optional().nullable(),
    })
})


export const lessons = t.router({
    create: t.procedure.input(CreateLessonSchema).mutation(({ input }) => p.lesson.create({ data: input })),
    get: t.procedure.input(z.number()).query(({ input }) => p.lesson.findUniqueOrThrow({ where: { id: input } })),
    update: t.procedure.input(UpdateLessonSchema).mutation(({ input }) => p.lesson.update({ where: { id: input.id }, data: input.data}))
})

export type LessonRouter = typeof lessons
