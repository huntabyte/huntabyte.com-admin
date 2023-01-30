import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types"
import type { Session } from "@supabase/supabase-js"
import { AuthSession } from "./lib/server/auth"
import { TRPCError } from "@trpc/server"

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

	/// <reference types="easymde" />
	declare type Item = import("svelte-dnd-action").Item
	declare type DndEvent<ItemType = Item> =
		import("svelte-dnd-action").DndEvent<ItemType>
	declare namespace svelte.JSX {
		interface HTMLAttributes<T> {
			onconsider?: (
				event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T },
			) => void
			onfinalize?: (
				event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T },
			) => void
		}
	}
}
