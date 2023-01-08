import { Prisma } from "@prisma/client";
import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";

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
});

export type CoursePageContent = Prisma.CourseGetPayload<
	typeof coursePageContent
>;

// Get minimum content needed for the course landing page.
export const getCoursePageData = async (courseSlug: string) => {
	let course: CoursePageContent;
	try {
		course = await prisma.course.findFirstOrThrow({
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
		});
	} catch (err) {
		console.error(err);
		throw error(404, "Not found");
	}

	const navigationOrder = courseNavigationOrder(course);

	return {
		course,
		navigationOrder,
	};
};

const courseNavigationOrder = (course: CoursePageContent) => {
	let navOrder: string[] = [];

	course.modules.forEach((module) => {
		navOrder.push(module.slug);
		module.lessons.forEach((lesson) => {
			navOrder.push(`${module.slug}/${lesson.slug}`);
		});
	});

	return navOrder;
};
