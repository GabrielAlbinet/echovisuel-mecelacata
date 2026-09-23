import eventRepository from "../repositories/event.repository.ts";
import artistRepository from "../repositories/artist.repository.ts";
import venueRepository from "../repositories/venue.repository.ts";
import type { CreateEventDTO } from "../dto/event.dto.ts";

const getAll = async () => eventRepository.findAll();

const getById = async (id: number) => {
  const event = await eventRepository.findById(id);
  if (!event) throw new Error("Event not found");
  return event;
};

const checkBusinessRules = async (data: CreateEventDTO, excludedId?: number) => {
  if (data.endTime <= data.startTime) {
    throw new Error("L'heure de fin doit être postérieure à l'heure de début");
  }

  if (!(await artistRepository.findById(data.artistId))) {
    throw new Error("Artist not found");
  }
  if (!(await venueRepository.findById(data.venueId))) {
    throw new Error("Venue not found");
  }

  if (data.status === "cancelled") return;

  const sameVenueSameDay = await eventRepository.findScheduledByVenueAndDate(data.venueId, data.date);
  const overlap = sameVenueSameDay.some(
    (other) =>
      other.id !== excludedId &&
      data.startTime < other.endTime &&
      other.startTime < data.endTime,
  );
  if (overlap) {
    throw new Error("Ce lieu est déjà occupé sur ce créneau");
  }
};

const create = async (data: CreateEventDTO) => {
  await checkBusinessRules(data);
  return eventRepository.create(data);
};

const update = async (id: number, data: Partial<CreateEventDTO>) => {
  const existing = await getById(id);
  await checkBusinessRules({ ...existing, ...data }, id);
  return eventRepository.update(id, data);
};

const remove = async (id: number) => {
  await getById(id);
  return eventRepository.remove(id);
};

export default { getAll, getById, create, update, remove };