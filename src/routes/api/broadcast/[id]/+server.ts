import { json, type RequestHandler } from '@sveltejs/kit';
import prismaClient from '$lib/server/prisma';

export const GET: RequestHandler = async ({ params }) => {
  const { id } = params;
  console.log(id);
  try {
    if (id === undefined) {
      throw new Error('Missing id');
    }
    const broadcasts = await prismaClient.broadcast.findMany({
      where: {
        raceId: parseInt(id, 10),
      },
      include: {
        race: true,
        broadcastType: true, // Include the broadcastType field
      },
    });

    return json({
      status: 200,
      body: broadcasts,
    });
  } catch (error) {
    console.error(error);
    return json({
      status: 500,
      body: { error: 'Internal Server Error' },
    });
  }
};
