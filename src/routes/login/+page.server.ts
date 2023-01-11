import { error, fail } from "@sveltejs/kit"
import type { Actions } from "./$types"
import { sendMagicLinkEmail } from "$lib/server/email"
import { sendMagicLink } from "$lib/server/auth"

export const actions: Actions = {
	login: async ({ request }) => {
		const { email } = Object.fromEntries(await request.formData())

		if (!email) {
			return fail(400, { message: "Missing email" })
		}

		try {
			await sendMagicLink(email as string)
		} catch (err) {
			console.error(err)
			throw error(500, "Something went wrong sending email.")
		}
	},
}
