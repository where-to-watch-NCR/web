import { json, type RequestHandler } from '@sveltejs/kit';
import prismaClient from '$lib/server/prisma';
import type { BroadcastType } from '@prisma/client';

/**
 * Get all broadcasts types
 * @returns 
 */
export const GET: RequestHandler = async () => {

  try {

    const broadcastTypes: BroadcastType[] = await prismaClient.broadcastType.findMany();

    return json({
      status: 200,
      body: broadcastTypes,
    });
  } catch (error) {
    console.error(error);
    return json({
      status: 500,
      body: { error: 'Internal Server Error' },
    });
  }
};
