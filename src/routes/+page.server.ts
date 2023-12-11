import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad  = async () => {
  const prisma = new PrismaClient();
  
  try {
    const races = await prisma.race.findMany({
      orderBy: [
        { date: 'desc' }
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
