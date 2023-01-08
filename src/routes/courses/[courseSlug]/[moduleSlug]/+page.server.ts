import type { ModulesWithLessons } from "$lib/prisma.types";
import { prisma } from "$lib/server/prisma";
import type { Module } from "@prisma/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	let module: ModulesWithLessons | null;
	try {
		module = await prisma.module.findFirst({
			where: {
				slug: params.moduleSlug,
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

	return {
		module,
	};
};
