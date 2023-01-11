import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types"
import type { Session } from "@supabase/supabase-js"
import { AuthSession } from "./lib/server/auth"

declare global {
	/// <reference types="stripe-event-types" />
	declare namespace App {
		// interface Error {}
		interface Locals {
			session: AuthSession | null
		}
		interface PageData {
			session: AuthSession | null
		}
		// interface Platform {}
	}

	declare namespace NodeJS {
		interface Global {
			spotConfig: any
		}
	}
}
