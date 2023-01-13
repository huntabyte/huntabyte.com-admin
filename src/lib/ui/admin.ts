import type { House } from "$lib/components/icons"
import { createDialog } from "svelte-headlessui"

export const dialog = createDialog()

export const adminNavigation = [
	{
		name: "Dashboard",
		href: "/admin",
		icon: "ph:house",
	},
	{
		name: "Courses",
		href: "/admin/courses",
		icon: "ph:book-open",
	},
	{
		name: "Tutorials",
		href: "/admin/tutorials",
		icon: "ph:chalkboard-teacher",
	},
	{
		name: "Articles",
		href: "/admin/articles",
		icon: "ph:article",
	},
	{
		name: "Snippets",
		href: "/admin/snippets",
		icon: "ph:bookmark-simple",
	},
]
