import { unified } from "unified"
import Turndown from "turndown"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkSlug from "remark-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeCodeTitles from "rehype-code-titles"
import rehypePrism from "rehype-prism-plus"
import rehypeStringify from "rehype-stringify"
import rehypeRaw from "rehype-raw"

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

export async function compileContent(markdown: string) {
	const result = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkSlug)
		.use(remarkRehype)
		.use(rehypeAutolinkHeadings)
		.use(rehypeCodeTitles)
		.use(rehypePrism)
		.use(rehypeRaw)
		.use(rehypeStringify)
		.process(searchAndReplace(markdown))

	return result.value as string
}

export function processMarkdown(html: string) {
	return unescapeMarkdownLinks(
		new Turndown({ codeBlockStyle: "fenced" }).turndown(html),
	)
}

function unescapeMarkdownLinks(markdown: string) {
	const pattern = /(\\)([\[\]])/g
	return markdown.replace(pattern, "$2")
}
