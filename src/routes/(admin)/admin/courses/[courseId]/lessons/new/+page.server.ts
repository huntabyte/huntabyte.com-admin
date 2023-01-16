import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { CreateLessonSchema } from '$lib/trpc/routes/lessons';
import { fail, redirect } from '@sveltejs/kit';
import type { z } from 'zod';
import type { Actions } from './$types';



export const actions: Actions = {
    createLesson: async (event) => {
        const body = Object.fromEntries(await event.request.formData()) as unknown as z.infer<typeof CreateLessonSchema>
        body.courseId = Number(event.params.courseId)

        
        try {
            await router.createCaller(await createContext(event)).lessons.create(body)
        } catch (err) {
            console.error(err)
            return fail(400, { message: 'Invalid data'})
        }

        throw redirect(303, `/admin/courses/${event.params.courseId}`)
    }
};