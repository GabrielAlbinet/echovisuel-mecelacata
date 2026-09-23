import participantService from "../services/participant.apiservice.ts";
import type { ParticipantDTO, CreateParticipantDTO } from "../dto/participant.dto.ts";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Données invalides";

const getAll = async (req, res, next) => {
  try {
    const email = typeof req.query.email === "string" ? req.query.email : undefined;
    const participants: ParticipantDTO[] = await participantService.getAll(email);
    res.status(200).json(participants);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const participant: ParticipantDTO = await participantService.getById(Number(req.params.id));
    res.status(200).json(participant);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res) => {
  try {
    const data: CreateParticipantDTO = req.body;
    const participant: ParticipantDTO = await participantService.create(data);
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const update = async (req, res) => {
  try {
    const data: Partial<CreateParticipantDTO> = req.body;
    const participant: ParticipantDTO = await participantService.update(Number(req.params.id), data);
    res.status(200).json(participant);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const remove = async (req, res, next) => {
  try {
    await participantService.remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, create, update, remove };