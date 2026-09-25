import eventService from "../services/event.apiservice.ts";
import type { EventDTO, CreateEventDTO } from "../dto/event.dto.ts";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Données invalides";

const getAll = async (req, res, next) => {
  try {
    const events: EventDTO[] = await eventService.getAll();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const event: EventDTO = await eventService.getById(Number(req.params.id));
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res) => {
  try {
    const data: CreateEventDTO = req.body;
    const event: EventDTO = await eventService.create(data);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const update = async (req, res) => {
  try {
    const data: Partial<CreateEventDTO> = req.body;
    const event: EventDTO = await eventService.update(Number(req.params.id), data);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const remove = async (req, res, next) => {
  try {
    await eventService.remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, create, update, remove };