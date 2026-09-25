import festivalRepository from "../repositories/festival.repository.ts";
import type { CreateFestivalDTO } from "../dto/festival.dto.ts";

const getAll = async () => festivalRepository.findAll();

const getById = async (id: number) => {
  const festival = await festivalRepository.findById(id);
  if (!festival) throw new Error("Festival not found");
  return festival;
};

const checkDates = (startDate: string, endDate: string) => {
  if (endDate < startDate) {
    throw new Error("La date de fin doit être égale ou postérieure à la date de début");
  }
};

const create = async (data: CreateFestivalDTO) => {
  checkDates(data.startDate, data.endDate);
  return festivalRepository.create(data);
};

const update = async (id: number, data: Partial<CreateFestivalDTO>) => {
  const existing = await getById(id);
  const merged = { ...existing, ...data };
  checkDates(merged.startDate, merged.endDate);
  return festivalRepository.update(id, data);
};

const remove = async (id: number) => {
  await getById(id);
  return festivalRepository.remove(id);
};

export default { getAll, getById, create, update, remove };