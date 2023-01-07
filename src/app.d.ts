import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types"
import type { Session } from "@supabase/supabase-js"

declare global {
	/// <reference types="stripe-event-types" />
	declare namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient
			session: Session | null
		}
		interface PageData {
			session: import("@supabase/supabase-js").Session | null
		}
		// interface Platform {}
	}

	declare namespace NodeJS {
		interface Global {
			// rome-ignore lint/suspicious/noExplicitAny: <explanation>
			spotConfig: any
		}
	}
}
