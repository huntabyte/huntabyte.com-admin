import { createDialog } from "svelte-headlessui"

export const dialog = createDialog()

export const adminNavigation = [
	{
		name: "Home",
		href: "/admin",
	},
	{
		name: "Content",
		href: "/admin/content",
	},
	{
		name: "Users",
		href: "/admin/users",
	},
	{
		name: "Settings",
		href: "/admin/settings",
	},
]
