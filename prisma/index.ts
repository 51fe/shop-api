import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export {
  Prisma,
  prisma
}