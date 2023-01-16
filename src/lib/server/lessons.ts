import { error } from "@sveltejs/kit"
import Turndown from "turndown"
import { compile } from "mdsvex"

/* Receive raw markdown and compile it to HTML */
export const compileContent = async (htmlString: string) => {
	const markdown = new Turndown({ codeBlockStyle: "fenced" }).turndown(
		htmlString,
	)

	console.log("Markdown:", markdown)

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
