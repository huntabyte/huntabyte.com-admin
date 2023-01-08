import { Prisma } from "@prisma/client";

export const coursesModulesLessons = Prisma.validator<Prisma.CourseArgs>()({
	include: {
		modules: {
			include: {
				lessons: true,
			},
		},
	},
});

export type CoursesWithModulesAndLessons = Prisma.CourseGetPayload<
	typeof coursesModulesLessons
>;
export const modulesWithLessons = Prisma.validator<Prisma.ModuleArgs>()({
	include: {
		lessons: true,
	},
});

export type ModulesWithLessons = Prisma.ModuleGetPayload<
	typeof modulesWithLessons
>;
