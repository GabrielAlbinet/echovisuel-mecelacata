import { prisma } from "../config/prisma.ts";
import type { CreateParticipantDTO } from "../dto/participant.dto.ts";

const include = {
  ticket: { select: { id: true, name: true } },
};

const findAll = async (email?: string) =>
  prisma.participant.findMany({
    where: email ? { email: { contains: email } } : undefined,
    include,
    orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
  });

const findById = async (id: number) => prisma.participant.findUnique({ where: { id }, include });

const findByEmail = async (email: string) => prisma.participant.findUnique({ where: { email } });

const create = async (data: CreateParticipantDTO) => prisma.participant.create({ data, include });

const update = async (id: number, data: Partial<CreateParticipantDTO>) =>
  prisma.participant.update({ where: { id }, data, include });

const remove = async (id: number) => prisma.participant.delete({ where: { id } });

export default { findAll, findById, findByEmail, create, update, remove };