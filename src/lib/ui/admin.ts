import { createDialog } from "svelte-headlessui"

export type Dialog = ReturnType<typeof createDialog>

export const mobileMenuDialog = createDialog()
export const articleSlideoverDialog = createDialog()
export const lessonSlideoverDialog = createDialog()

export const createModuleModal = createDialog()

export const navigation = [
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

export const navClasses = {
	active: {
		link: "bg-gray-900 text-white group flex items-center px-3 py-3 text-sm font-medium rounded-md flex items-center",
		icon: "text-gray-300 mr-3 flex-shrink-0 text-lg",
	},
	default: {
		link: "text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-3 py-3 text-sm font-medium rounded-md flex items-center",
		icon: "text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 text-lg",
	},
}
