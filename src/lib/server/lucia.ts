import { lucia } from "lucia";
import {prisma} from '@lucia-auth/adapter-prisma'
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment"
import prismaClient from "./prisma";

const client = prismaClient;

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (userData) => {
		return {
			userId: userData.id,
			username: userData.username,
			mail: userData.mail,
			contry_code: userData.contry_code
		}
	}
})

export type Auth = typeof auth