import type { RequestHandler } from "./$types"
import { API_KEY } from "$env/static/private"
import { json } from "@sveltejs/kit"
import { stripe } from "$lib/server/stripe"
import { prisma } from "$lib/server/prisma"
import { z } from "zod"

const CreateCustomerSchema = z.object({
	record: z.object({
		id: z.string(),
		email: z.string().email(),
	}),
})

export const POST: RequestHandler = async ({ url, request }) => {
	console.log("hit endpoint")
	if (url.searchParams.get("API_KEY") !== API_KEY) {
		return json({ error: "Invalid API key" }, { status: 401 })
	}

	const body = await request.json()

	const parsedBody = CreateCustomerSchema.safeParse(body)

	if (!parsedBody.success) {
		return json({ error: "Invalid body" }, { status: 400 })
	}

	const stripeCustomer = await stripe.customers.create({
		email: parsedBody.data.record.email,
	})

	try {
		await prisma.user.update({
			where: {
				id: parsedBody.data.record.id,
			},
			data: {
				customerId: stripeCustomer.id,
			},
		})
	} catch (err) {
		console.error(err)
		return json({ error: "Failed to update user" }, { status: 500 })
	}

	return json({ success: true })
}
