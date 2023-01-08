import type { ModulesWithLessons } from "$lib/prisma.types";
import { prisma } from "$lib/server/prisma";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const { moduleSlug } = params;

	let module: ModulesWithLessons | null;

	try {
		module = await prisma.module.findFirst({
			where: {
				slug: moduleSlug,
				course: {
					slug: params.courseSlug,
				},
			},
			include: {
				lessons: {
					orderBy: {
						sortOrder: "asc",
					},
				},
			},
		});
	} catch (err) {
		console.error(err);
		throw error(500, "Internal Server Error");
	}

	if (!module) {
		throw error(404, "Not Found");
	}

	throw redirect(
		303,
		`/courses/${params.courseSlug}/${params.moduleSlug}/${module.lessons[0].slug}`,
	);
};
