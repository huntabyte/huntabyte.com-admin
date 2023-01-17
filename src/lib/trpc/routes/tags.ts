import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { z } from "zod"
import { zfd } from "$lib/zfd"

export const CreateTagSchema = zfd.formData({
	name: zfd.text(),
})

export const UpdateTagSchema = zfd.formData({
	id: zfd.numeric(),
	name: zfd.text(),
})

export const tags = t.router({
	create: t.procedure
		.input(CreateTagSchema)
		.mutation(({ input }) => p.tag.create({ data: input })),
	get: t.procedure
		.input(z.number())
		.query(({ input }) => p.tag.findUniqueOrThrow({ where: { id: input } })),
	list: t.procedure.query(() => p.tag.findMany()),
	update: t.procedure
		.input(UpdateTagSchema)
		.mutation(({ input }) =>
			p.tag.update({ where: { id: input.id }, data: { name: input.name } }),
		),
	getByName: t.procedure
		.input(z.string())
		.query(({ input }) => p.tag.findFirstOrThrow({ where: { name: input } })),
})

export type TagRouter = typeof tags
