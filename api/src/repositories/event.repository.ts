import { prisma } from "../config/prisma.ts";
import type { CreateEventDTO } from "../dto/event.dto.ts";

// On joint le nom de l'artiste et du lieu : le front peut les afficher sans requête en plus
const include = {
  artist: { select: { id: true, name: true } },
  venue: { select: { id: true, name: true } },
};

const findAll = async () =>
  prisma.event.findMany({ include, orderBy: [{ date: "asc" }, { startTime: "asc" }] });

const findById = async (id: number) => prisma.event.findUnique({ where: { id }, include });

// Utilisé par le service pour détecter les chevauchements dans un même lieu
const findScheduledByVenueAndDate = async (venueId: number, date: string) =>
  prisma.event.findMany({ where: { venueId, date, status: "scheduled" } });

const create = async (data: CreateEventDTO) => prisma.event.create({ data, include });

const update = async (id: number, data: Partial<CreateEventDTO>) =>
  prisma.event.update({ where: { id }, data, include });

const remove = async (id: number) => prisma.event.delete({ where: { id } });

export default { findAll, findById, findScheduledByVenueAndDate, create, update, remove };