import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from './$types';
import prismaClient from '$lib/server/prisma';

export const load: PageServerLoad  = async () => {
  const prisma = prismaClient;
  
  try {
    const races = await prisma.race.findMany({
      orderBy: [
        { date: 'asc' }
      ]
    });

    return {
      props: {
        races
      }
    };
  } finally {
    await prisma.$disconnect();
  }
};
