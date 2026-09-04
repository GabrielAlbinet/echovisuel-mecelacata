import artistRepository from "../repositories/artist.repository.ts";
import type { CreateArtistDTO } from "../dto/artist.dto.ts";

const getAll = async () => {
  return artistRepository.findAll();
};

const getById = async (id: number) => {
  const artist = await artistRepository.findById(id);
  if (!artist) {
    throw new Error("Artist not found");
  }
  return artist;
};

const create = async (data: CreateArtistDTO) => {
  return artistRepository.create(data);
};

const update = async (id: number, data: Partial<CreateArtistDTO>) => {
  await getById(id);
  return artistRepository.update(id, data);
};

const remove = async (id: number) => {
  await getById(id);
  return artistRepository.remove(id);
};

export default { getAll, getById, create, update, remove };