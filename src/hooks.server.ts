import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"
import type { Handle } from "@sveltejs/kit"
import { createTRPCHandle } from "trpc-sveltekit"
import { getUserSession } from "$lib/server/sessions"
import { sequence } from "@sveltejs/kit/hooks"

export const first: Handle = async ({ event, resolve }) => {
	event.locals.session = await getUserSession(event)

	return resolve(event)
}

export const second: Handle = createTRPCHandle({ router, createContext })

export const handle = sequence(first, second)
