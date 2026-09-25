import festivalService from "../services/festival.apiservice.ts";
import type { FestivalDTO, CreateFestivalDTO } from "../dto/festival.dto.ts";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Données invalides";

const getAll = async (req, res, next) => {
  try {
    const festivals: FestivalDTO[] = await festivalService.getAll();
    res.status(200).json(festivals);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const festival: FestivalDTO = await festivalService.getById(Number(req.params.id));
    res.status(200).json(festival);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res) => {
  try {
    const data: CreateFestivalDTO = req.body;
    const festival: FestivalDTO = await festivalService.create(data);
    res.status(201).json(festival);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const update = async (req, res) => {
  try {
    const data: Partial<CreateFestivalDTO> = req.body;
    const festival: FestivalDTO = await festivalService.update(Number(req.params.id), data);
    res.status(200).json(festival);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const remove = async (req, res, next) => {
  try {
    await festivalService.remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, create, update, remove };