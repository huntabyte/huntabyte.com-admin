import { fail } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
	createModule: async ({ request, params, locals }) => {
		if (!locals.session) {
			return fail(401, { message: "Unauthorized" })
		}

		const { courseSlug } = params
		const body = Object.fromEntries(await request.formData()) as Record<
			string,
			any
		>
	},
}
