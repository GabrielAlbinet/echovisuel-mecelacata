import { prisma } from "../config/prisma.ts";
import type { CreateTicketDTO } from "../dto/ticket.dto.ts";

const findAll = async () => prisma.ticket.findMany();
const findById = async (id: number) => prisma.ticket.findUnique({ where: { id } });
const create = async (data: CreateTicketDTO) => prisma.ticket.create({ data });
const update = async (id: number, data: Partial<CreateTicketDTO>) => prisma.ticket.update({ where: { id }, data });
const remove = async (id: number) => prisma.ticket.delete({ where: { id } });

export default { findAll, findById, create, update, remove };