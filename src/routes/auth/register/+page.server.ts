import { auth } from '$lib/server/lucia'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (session) {
		throw redirect(302, '/me')
	}
}

export const actions: Actions = {
	default: async ({ request }) => {
		const { mail,contry_code, username, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>
		try {
			await auth.createUser({
				key: {
					providerId: 'mail',
					providerUserId: mail,
					password
				},
				attributes: {
					username,
                    mail,
                    contry_code,
				}
			})
		} catch (err) {
			console.error(err)
			return fail(400, { message: 'Could not register user' })
		}
		throw redirect(302, '/auth/login')
	}
}