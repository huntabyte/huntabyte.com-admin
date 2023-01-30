import { fail } from "@sveltejs/kit"
import { TRPCError } from "@trpc/server"
import { getHTTPStatusCodeFromError } from "@trpc/server/http"
import { ZodError } from "zod"

export async function createHash(message: string) {
	const data = new TextEncoder().encode(message)
	const hash = await crypto.subtle.digest("SHA-256", data)
	return Array.from(new Uint8Array(hash))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("")
		.toString()
}

export function cloneObj<T>(obj: T): T {
	return structuredClone(obj)
}

const defaultDateOptions: Intl.DateTimeFormatOptions = {
	year: "numeric",
	month: "long",
	day: "numeric",
}

export function shortDate(
	date: Date,
	options: Intl.DateTimeFormatOptions = defaultDateOptions,
) {
	return new Intl.DateTimeFormat("en-US", options).format(date)
}

export function getReadingTime(text: string) {
	console.log(text)
	const wpm = 225
	const words = text.trim().split(/\s+/).length
	const time = Math.ceil(words / wpm)
	return time
}

export function slugify(str: string) {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "")
}

export function handleActionErrors(e: unknown, body: unknown = {}) {
	console.log(e)
	if (e instanceof TRPCError) {
		if (e.cause instanceof ZodError) {
			return fail(400, {
				data: structuredClone(body),
				errors: e.cause.flatten(),
			})
		}
		return fail(getHTTPStatusCodeFromError(e), {
			message: "An unexpected error occurred. Please try again later.",
		})
	}
	return fail(500, {
		message: "An unexpected error occurred. Please try again later.",
	})
}
