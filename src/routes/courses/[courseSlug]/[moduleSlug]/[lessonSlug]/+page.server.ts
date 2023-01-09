import type { PageServerLoad } from "./$types";
import { getLesson } from "$lib/server/lessons";

export const load: PageServerLoad = async ({ params }) => {
	return {
		lesson: getLesson(params),
	};
};
