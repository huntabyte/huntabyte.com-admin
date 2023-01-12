import Stripe from "stripe"
import { STRIPE_SECRET_KEY } from "$env/static/private"

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
	apiVersion: "2022-11-15",
})

export async function createCustomer(email: string) {
	let stripeCustomer: Stripe.Customer
	try {
		stripeCustomer = await stripe.customers.create({
			email,
		})
	} catch (err) {
		console.error(err)
		return null
	}

	return stripeCustomer.id
}
