import { prisma } from "../config/prisma.ts";
import type { CreateArtistDTO } from "../dto/artist.dto.ts";

const findAll = async () => {
  return await prisma.artist.findMany();
};

const findById = async (id: number) => {
  return await prisma.artist.findUnique({ where: { id } });
};

const create = async (data: CreateArtistDTO) => {
  return await prisma.artist.create({ data });
};

const update = async (id: number, data: Partial<CreateArtistDTO>) => { //Partial c'est pour que la requête PATCH
  return await prisma.artist.update({ where: { id }, data });
};

const remove = async (id: number) => {
  return await prisma.artist.delete({ where: { id } });
};

export default { findAll, findById, create, update, remove };