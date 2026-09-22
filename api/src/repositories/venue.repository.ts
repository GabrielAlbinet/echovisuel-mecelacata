import { prisma } from "../config/prisma.ts";
import type { CreateVenueDTO } from "../dto/venue.dto.ts";

const findAll = async () => prisma.venue.findMany();
const findById = async (id: number) => prisma.venue.findUnique({ where: { id } });
const create = async (data: CreateVenueDTO) => prisma.venue.create({ data });
const update = async (id: number, data: Partial<CreateVenueDTO>) => prisma.venue.update({ where: { id }, data });
const remove = async (id: number) => prisma.venue.delete({ where: { id } });

export default { findAll, findById, create, update, remove };