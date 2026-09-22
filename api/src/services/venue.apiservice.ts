import venueRepository from "../repositories/venue.repository.ts";
import type { CreateVenueDTO } from "../dto/venue.dto.ts";

const getAll = async () => venueRepository.findAll();

const getById = async (id: number) => {
  const venue = await venueRepository.findById(id);
  if (!venue) throw new Error("Venue not found");
  return venue;
};

const create = async (data: CreateVenueDTO) => venueRepository.create(data);
const update = async (id: number, data: Partial<CreateVenueDTO>) => venueRepository.update(id, data);
const remove = async (id: number) => venueRepository.remove(id);

export default { getAll, getById, create, update, remove };