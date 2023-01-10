import { prisma } from "$lib/server/prisma"
import { stripe } from "$lib/server/stripe"
import { error, redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
	customerPortal: async ({ locals }) => {
		if (!locals.session) {
			throw redirect(303, "/login")
		}

		const user = await prisma.user.findUnique({
			where: {
				id: locals.session.user.id,
			},
		})

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
	updateCustomer: async ({ locals }) => {
		if (!locals.session) {
			throw redirect(303, "/login")
		}

		try {
			await prisma.sBUser.update({
				where: {
					id: locals.session.user.id,
				},
				data: {
					raw_user_meta_data: JSON.stringify({
						customerId: "cus_JZ0X0Q2Q0X0Q2Q",
					}),
				},
			})
		} catch (err) {
			console.log(err)
		}
	},
}
