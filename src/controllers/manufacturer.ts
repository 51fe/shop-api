import { Prisma, prisma } from '../prisma';
import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

export default {
  all: asyncHandler(async (req: Request, res: Response) => {
    const { search, skip, take, sort = 'id', order = 'desc' } = req.query;
    const or: Prisma.ManufacturerWhereInput = search
      ? {
          OR: [{ name: { contains: search as string } }]
        }
      : {};

    const result = await prisma.manufacturer.findMany({
      where: {
        ...or
      },
      take: Number(take) || undefined,
      skip: Number(skip) || undefined,
      orderBy: {
        [sort as string]: order as Prisma.SortOrder
      }
    });

    res.json(result);
  }),

  byId: asyncHandler(async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const post = await prisma.manufacturer.findUnique({
      where: { id: Number(id) }
    });
    res.json(post);
  }),

  create: asyncHandler(async (req: Request, res: Response) => {
    const result = await prisma.manufacturer.create({
      data: req.body
    });
    res.json(result);
  }),

  update: asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await prisma.manufacturer.update({
      where: { id: Number(id) },
      data: req.body
    });
    res.json(result);
  }),

  remove: asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.manufacturer.delete({
      where: { id: Number(id) }
    });
    res.json(id);
  })
};
