import { error } from "@sveltejs/kit"
import Turndown from "turndown"
import { compile } from "mdsvex"

/* Thanks to @joyofcodedev for this useful function
 * TODO: Add link to source - need to think about S3 or CF for this.
 */
function searchAndReplace(content: string): string {
	const embeds = /{% embed src="(.*?)" title="(.*?)" %}/g
	const videos = /{% video src="(.*?)" %}/g
	const images = /{% img src="(.*?)" alt="(.*?)" %}/g

	return content
		.replace(embeds, (_, src, title) => {
			return `
        <iframe
          title="${title}"
          src=""
          loading="lazy"
        ></iframe>
      `.trim()
		})
		.replace(videos, (_, src) => {
			return `
        <video controls>
          <source
            src=""
            type="video/mp4"
          />
        </video>
      `.trim()
		})
		.replace(images, (_, src, alt) => {
			return `
      <img
        src=""
        alt="${alt}"
        loading="lazy"
      />
  `.trim()
		})
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
	return searchAndReplace(
		unescapeMarkdownLinks(
			new Turndown({ codeBlockStyle: "fenced" }).turndown(html),
		),
	)
}

function unescapeMarkdownLinks(markdown: string) {
	const pattern = /(\\)([\[\]])/g
	return markdown.replace(pattern, "$2")
}
