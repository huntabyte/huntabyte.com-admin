import { p } from "$lib/server/prisma"
import { stripe } from "$lib/server/stripe"
import type { User } from "@prisma/client"
import { error, redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

const plans = ["monthly", "annual"]

export const actions: Actions = {
	checkout: async ({ locals, url }) => {
		if (!locals.session) {
			throw redirect(303, "/login")
		}
		const plan = url.searchParams.get("plan")
		if (!plan) {
			throw error(400, "No plan specified")
		}
		if (!plans.includes(plan)) {
			throw error(400, "Invalid plan")
		}

		const price = await stripe.prices.search({
			query: `active:\'true\' AND metadata[\'type\']:\'${plan}\'`,
		})

		if (!price.data.length) {
			throw error(500, "Could not process checkout.")
		}

		let user: User | null
		try {
			user = await p.user.findUnique({
				where: {
					id: locals.session.user.id,
				},
			})
		} catch (err) {
			console.error(err)
			throw error(500, "Could not find user.")
		}

		if (!user) {
			throw error(500, "Could not find user.")
		}

		const checkoutSession = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price: price.data[0].id,
					quantity: 1,
				},
			],
			customer: user.customerId as string,
			mode: "subscription",
			success_url: "http://localhost:5173/payment/success",
			cancel_url: "http://localhost:5173/payment/cancelled",
		})

		if (!checkoutSession.url) {
			throw error(500, "Could not process checkout.")
		}

		throw redirect(303, checkoutSession.url)
	},
}
