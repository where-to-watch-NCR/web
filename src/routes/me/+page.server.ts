import {  fail, redirect } from '@sveltejs/kit'
import type {  Actions, PageServerLoad } from './$types'
import { auth } from '$lib/server/lucia'

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (!session) {
		throw redirect(302, '/auth/login')
	}
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
        const session = await locals.auth.validate()
		const { contry_code } = 
        Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>
		try {
			await auth.updateUserAttributes(
                session.user.userId,
                {
                    contry_code:contry_code
                });
		} catch (err) {
			console.error(err)
			return fail(400, { message: 'Could not update user contry code' })
		}
		throw redirect(302, '/me')
	}
}