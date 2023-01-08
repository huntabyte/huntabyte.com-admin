import { prisma } from "$lib/server/prisma";
import type { Course } from "@prisma/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	let courses: Course[];
	try {
		courses = await prisma.course.findMany();
	} catch (err) {
		console.error(err);
		throw error(500, "Internal Server Error");
	}

	return {
		courses,
	};
};
