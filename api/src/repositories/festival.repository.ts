import { prisma } from "../config/prisma.ts";
import type { CreateFestivalDTO } from "../dto/festival.dto.ts";

const findAll = async () => prisma.festival.findMany({ orderBy: { startDate: "asc" } });

const findById = async (id: number) => prisma.festival.findUnique({ where: { id } });

const create = async (data: CreateFestivalDTO) => prisma.festival.create({ data });

const update = async (id: number, data: Partial<CreateFestivalDTO>) =>
  prisma.festival.update({ where: { id }, data });

const remove = async (id: number) => prisma.festival.delete({ where: { id } });

export default { findAll, findById, create, update, remove };