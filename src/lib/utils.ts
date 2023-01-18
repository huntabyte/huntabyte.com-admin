import { error } from "@sveltejs/kit"
import Turndown from "turndown"
import { compile } from "mdsvex"

export async function createHash(message: string) {
	const data = new TextEncoder().encode(message)
	const hash = await crypto.subtle.digest("SHA-256", data)
	return Array.from(new Uint8Array(hash))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("")
		.toString()
}

export function cloneObj<T>(obj: T): T {
	return structuredClone(obj)
}

/* Receive raw markdown and compile it to HTML */
export const compileContent = async (markdown: string) => {
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

export function htmlToMarkdown(html: string) {
	return unescapeMarkdownLinks(
		new Turndown({ codeBlockStyle: "fenced" }).turndown(html),
	)
}

function unescapeMarkdownLinks(markdown: string) {
	const pattern = /(\\)([\[\]])/g
	return markdown.replace(pattern, "$2")
}
