import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import prismaClient from '$lib/server/prisma';

export const POST: RequestHandler = async ({ locals, request }) => {
  try {
    const session = await locals.auth.validate();

    if (!session) {
      // Return code 403 for authorized users
      return json({ error: 'Forbidden' }, { status: 403 });
    }

    const formData = await request.json();

    const { country_code, name, link, type, raceId } = formData;

    console.log(country_code, name, link, type, raceId, parseInt(type), parseInt(raceId));

    const broadcast = await prismaClient.broadcast.create({
      data: {
        name,
        link,
        broadcastTypeId: parseInt(type),
        country_code,
        raceId: parseInt(raceId),
      },
    });

    // Handle additional logic if needed

    return json({ success: true, broadcast }, { status: 200 });

  } catch (error) {
    console.error(error);
    // You can add additional error handling logic here if needed
    return json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
