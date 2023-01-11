import type { Lesson } from "@prisma/client"
import { p } from "$lib/server/prisma"
import { error } from "@sveltejs/kit"
import { compile } from "mdsvex"

type LessonParams = {
	lessonSlug: string
	moduleSlug: string
	courseSlug: string
}

/* Receive raw markdown and compile it to HTML */
export const compileMarkdown = async (markdown: string) => {
	const compiledContent = (
		await compile(markdown, {
			smartypants: {
				dashes: "oldschool",
			},
		})
	)?.code
		/* https://github.com/pngwn/MDsveX/issues/392
		 * This is a hack to fix a bug in MDsveX that causes code
		 * blocks to be rendered incorrectly
		 */
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, "</code></pre>")
	if (!compiledContent) {
		console.error("Error compiling markdown.")
		throw error(500, "Server error. Please try again later")
	}
	return compiledContent
}

export const getLesson = async (params: LessonParams) => {
	let lesson: Lesson

	try {
		lesson = await p.lesson.findFirstOrThrow({
			where: {
				slug: params.lessonSlug,
				module: {
					slug: params.moduleSlug,
					course: {
						slug: params.courseSlug,
					},
				},
			},
		})
	} catch (err) {
		console.error(err)
		throw error(500, "Internal Server Error")
	}

	const content = await compileMarkdown(lesson.content)
	lesson.content = content

	return lesson
}
