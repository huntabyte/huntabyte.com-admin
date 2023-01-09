import { getAllCourses } from "$lib/server/courses";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		courses: getAllCourses(),
	};
};
