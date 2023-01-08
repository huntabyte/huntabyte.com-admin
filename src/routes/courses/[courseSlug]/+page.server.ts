import type { CoursesWithModulesAndLessons } from "$lib/prisma.types";
import { prisma } from "$lib/server/prisma";
import type { Course } from "@prisma/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	let course: CoursesWithModulesAndLessons | null;
	try {
		course = await prisma.course.findFirst({
			where: {
				slug: params.courseSlug,
			},
			include: {
				modules: {
					orderBy: {
						sortOrder: "asc",
					},
					include: {
						lessons: {
							orderBy: {
								sortOrder: "asc",
							},
						},
					},
				},
			},
		});
	} catch (err) {
		console.error(err);
		throw error(500, "Internal Server Error");
	}

	if (!course) {
		throw error(404, "Not Found");
	}

	return {
		course,
	};
};
