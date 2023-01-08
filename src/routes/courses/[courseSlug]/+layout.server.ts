import { getCoursePageData } from "$lib/server/courses";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params }) => {
	return {
		course: getCoursePageData(params.courseSlug),
	};
};
