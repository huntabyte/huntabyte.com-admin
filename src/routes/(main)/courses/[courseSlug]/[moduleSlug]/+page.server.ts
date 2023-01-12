import { getFirstLessonSlug } from "$lib/server/courses";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const firstLessonSlug = await getFirstLessonSlug(params.moduleSlug);

	throw redirect(
		303,
		`/courses/${params.courseSlug}/${params.moduleSlug}/${firstLessonSlug}`,
	);
};
