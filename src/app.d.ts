import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit"
import type { Session } from "@supabase/supabase-js"

declare global {
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
