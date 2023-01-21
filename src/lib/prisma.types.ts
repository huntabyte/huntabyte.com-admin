import { Prisma } from "@prisma/client"

export const coursesModulesLessons = Prisma.validator<Prisma.CourseArgs>()({
	include: {
		modules: {
			include: {
				lessons: true,
			},
		},
	},
})

export type CoursesWithModulesAndLessons = Prisma.CourseGetPayload<
	typeof coursesModulesLessons
>

export const moduleWithLessons = Prisma.validator<Prisma.ModuleArgs>()({
	include: {
		lessons: true,
	},
})

export type ModuleWithLessons = Prisma.ModuleGetPayload<
	typeof moduleWithLessons
>

export const modulesWithLessons = Prisma.validator<Prisma.ModuleArgs>()({
	include: {
		lessons: true,
	},
})

export type ModulesWithLessons = Prisma.ModuleGetPayload<
	typeof modulesWithLessons
>

export const minimumCoursesModulesLessons =
	Prisma.validator<Prisma.CourseArgs>()({
		select: {
			id: true,
			title: true,
			slug: true,
			modules: {
				select: {
					id: true,
					title: true,
					lessons: {
						select: {
							id: true,
							title: true,
							slug: true,
						},
					},
				},
			},
		},
	})

export type MinimumCoursesModulesLessons = Prisma.CourseGetPayload<
	typeof minimumCoursesModulesLessons
>
