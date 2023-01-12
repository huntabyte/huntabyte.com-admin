import { stripe } from "$lib/server/stripe"
import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import { error, redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
	customerPortal: async (event) => {
		if (!event.locals.session) {
			throw redirect(303, "/login")
		}

		const user = await router
			.createCaller(await createContext(event))
			.users.getById(event.locals.session.userId)

		if (!user) {
			throw error(500, "Could not find user.")
		}

		const session = await stripe.billingPortal.sessions.create({
			customer: user.customerId as string,
			return_url: "http://localhost:5173/account",
		})

		if (!session.url) {
			throw error(
				500,
				"Could not retrieve billing information. Please try again later.",
			)
		}

		throw redirect(303, session.url)
	},
}
