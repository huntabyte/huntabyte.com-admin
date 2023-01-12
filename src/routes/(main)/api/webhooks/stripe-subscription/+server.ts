import { STRIPE_SIGNING_SECRET } from "$env/static/private"
import { p } from "$lib/server/prisma"
import { stripe } from "$lib/server/stripe"
import { Role } from "@prisma/client"
import { json } from "@sveltejs/kit"
import type Stripe from "stripe"
import { z } from "zod"

import type { RequestHandler } from "./$types"

const EventCustomerSchema = z.object({
	customer: z.string(),
})

export const POST: RequestHandler = async ({ request }) => {
	const stripeSignature = request.headers.get("stripe-signature")

	if (!stripeSignature) {
		return json("Unauthorized", { status: 401 })
	}

	const body = await request.text()

	let event: Stripe.DiscriminatedEvent

	try {
		event = stripe.webhooks.constructEvent(
			body,
			stripeSignature,
			STRIPE_SIGNING_SECRET,
		) as Stripe.DiscriminatedEvent
	} catch (err) {
		console.error(err)
		return json("Unauthorized", { status: 401 })
	}

	const customer = EventCustomerSchema.safeParse(event.data.object)
	if (!customer.success) {
		console.log(customer.error)
		return json({ error: "Invalid customer" }, { status: 400 })
	}

	switch (event.type) {
		case "customer.subscription.updated":
			try {
				await p.user.update({
					where: {
						customerId: customer.data.customer,
					},
					data: {
						role: Role.PRO,
					},
				})
			} catch (err) {
				console.log(err)
				return json({ error: "Could not update user" }, { status: 500 })
			}
			break
		case "customer.subscription.deleted":
			try {
				await p.user.update({
					where: {
						customerId: customer.data.customer,
					},
					data: {
						role: Role.FREE,
					},
				})
			} catch (err) {
				console.log(err)
				return json({ error: "Could not update user" }, { status: 500 })
			}
			break
	}
	return json({ success: true })
}
