import type { MinimumCoursesModulesLessons } from "$lib/prisma.types";
import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params }) => {
	let course: MinimumCoursesModulesLessons | null;
	try {
		course = await prisma.course.findFirst({
			where: {
				slug: params.courseSlug,
			},
			select: {
				id: true,
				title: true,
				slug: true,
				modules: {
					orderBy: {
						sortOrder: "asc",
					},
					select: {
						id: true,
						title: true,
						slug: true,
						lessons: {
							orderBy: {
								sortOrder: "asc",
							},
							select: {
								id: true,
								title: true,
								slug: true,
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
