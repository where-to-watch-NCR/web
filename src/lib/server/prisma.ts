import { dev } from '$app/environment'
import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient({
    log: dev? ['query'] : [],
  });
export default prismaClient