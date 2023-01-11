import { Prisma } from "@prisma/client"
import { p } from "$lib/server/prisma"
import { error } from "@sveltejs/kit"

export const coursePageContent = Prisma.validator<Prisma.CourseArgs>()({
	select: {
		id: true,
		title: true,
		slug: true,
		modules: {
			select: {
				id: true,
				title: true,
				slug: true,
				lessons: {
					select: {
						id: true,
						title: true,
						slug: true,
					},
				},
			},
		},
	},
})

export type CoursePageContent = Prisma.CourseGetPayload<
	typeof coursePageContent
>

// Get minimum content needed for the course landing page.
export const getCoursePageData = async (courseSlug: string) => {
	let course: CoursePageContent
	try {
		course = await p.course.findFirstOrThrow({
			where: {
				slug: courseSlug,
			},
			select: {
				id: true,
				title: true,
				slug: true,
				modules: {
					orderBy: {
						sortOrder: "asc",
					},
					select: {
						id: true,
						title: true,
						slug: true,
						lessons: {
							orderBy: {
								sortOrder: "asc",
							},
							select: {
								id: true,
								title: true,
								slug: true,
								isFree: true,
							},
						},
					},
				},
			},
		})
	} catch (err) {
		console.error(err)
		throw error(404, "Not found")
	}

	const navigationOrder = courseNavigationOrder(course)

	return {
		course,
		navigationOrder,
	}
}

const courseNavigationOrder = (course: CoursePageContent) => {
	let navOrder: string[] = []

	course.modules.forEach((module) => {
		navOrder.push(module.slug)
		module.lessons.forEach((lesson) => {
			navOrder.push(`${module.slug}/${lesson.slug}`)
		})
	})

	return navOrder
}

export const getAllCourses = async () => {
	let courses: CoursePageContent[]
	try {
		courses = await p.course.findMany({
			select: {
				id: true,
				title: true,
				slug: true,
				modules: {
					select: {
						id: true,
						title: true,
						slug: true,
						lessons: {
							select: {
								id: true,
								title: true,
								slug: true,
							},
						},
					},
				},
			},
		})
	} catch (err) {
		console.error(err)
		throw error(500, "Internal Server Error")
	}

	return courses
}

export const moduleWithLesson = Prisma.validator<Prisma.ModuleArgs>()({
	select: {
		lessons: {
			select: {
				slug: true,
			},
		},
	},
})

export type ModuleWithLesson = Prisma.ModuleGetPayload<typeof moduleWithLesson>

export const getFirstLessonSlug = async (slug: string) => {
	let module: ModuleWithLesson
	try {
		module = await p.module.findFirstOrThrow({
			where: {
				slug,
			},
			select: {
				lessons: {
					select: {
						slug: true,
					},
				},
			},
		})
	} catch (err) {
		console.error(err)
		throw error(404, "Not found")
	}

	return module.lessons[0].slug
}
