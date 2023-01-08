import { prisma } from "$lib/server/prisma";
import type { Lesson } from "@prisma/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { compile } from "mdsvex";

export const load: PageServerLoad = async ({ params, parent }) => {
	const { moduleSlug, lessonSlug, courseSlug } = params;

	let lesson: Lesson | null;

	try {
		lesson = await prisma.lesson.findFirst({
			where: {
				slug: lessonSlug,
				module: {
					slug: moduleSlug,
					course: {
						slug: courseSlug,
					},
				},
			},
		});
	} catch (err) {
		console.error(err);
		throw error(500, "Internal Server Error");
	}

	if (!lesson) {
		throw error(404, "Not Found");
	}
	if (!lesson.content) {
		return {
			content: "",
			lesson,
		};
	}

	const content = (
		await compile(lesson.content, {
			smartypants: {
				dashes: "oldschool",
			},
		})
	)?.code
		// https://github.com/pngwn/MDsveX/issues/392
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, "</code></pre>");

	return {
		content: content,
		lesson,
	};
};
