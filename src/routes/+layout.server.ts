import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) {
        const user: Lucia.UserAttributes = session.user;
        return { user };
    }
    return null;
};
