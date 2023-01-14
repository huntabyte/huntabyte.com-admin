import type { ModuleWithLesson } from "$lib/server/courses"
import { p } from "$lib/server/prisma"
import { t } from "$lib/trpc/t"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

export const modules = t.router({
	delete: t.procedure
		.input(z.number())
		.mutation(({ input }) => p.module.delete({ where: { id: input } })),
	getFirstLessonSlug: t.procedure.input(z.string()).query(async ({ input }) => {
		let module: ModuleWithLesson
		module = await p.module
			.findFirstOrThrow({
				where: {
					slug: input,
				},
				select: {
					lessons: {
						select: {
							slug: true,
						},
					},
				},
			})
			.catch((err) => {
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Could not get first lesson slug.",
					cause: err,
				})
			})

		return module.lessons[0].slug
	}),
	getByCourseSlug: t.procedure.input(z.string()).query(async ({ input }) => {
		return p.module.findMany({
			where: {
				slug: input,
			},
			include: {
				lessons: true,
			},
		})
	}),
})

export type ModuleRouter = typeof modules
