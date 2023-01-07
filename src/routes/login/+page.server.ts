import { error, fail } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
	login: async ({ locals, request }) => {
		const { email } = Object.fromEntries(await request.formData())

		if (!email) {
			throw fail(400, { message: "Email is required" })
		}

		await locals.sb.auth.signInWithOtp({
			email: email as string,
			options: {
				emailRedirectTo: "http://localhost:5173",
			},
		})

		return {
			success: true,
		}
	},
}
