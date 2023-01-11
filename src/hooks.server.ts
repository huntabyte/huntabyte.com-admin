import "$lib/supabase"
import { redis } from "$lib/server/redis"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)

	event.locals.sb = supabaseClient
	event.locals.session = session

	return await resolve(event)
}
