import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Actions } from './$types';
import type { CourseCreateInputSchema } from '$lib/schemas/generated';
import type { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
    createCourse: async (event) => {
        const formData = Object.fromEntries(await event.request.formData()) as unknown as z.infer<typeof CourseCreateInputSchema>

        try {
            await router.createCaller(await createContext(event)).courses.create(formData)
        } catch (err) {
            console.log(err)
            return fail(400, { message: 'Invalid request'})
        }

        throw redirect(303, '/admin/courses')
    }
};