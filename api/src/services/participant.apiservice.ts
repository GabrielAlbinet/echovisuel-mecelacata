import participantRepository from "../repositories/participant.repository.ts";
import ticketRepository from "../repositories/ticket.repository.ts";
import type { CreateParticipantDTO } from "../dto/participant.dto.ts";

const getAll = async (email?: string) => participantRepository.findAll(email);

const getById = async (id: number) => {
  const participant = await participantRepository.findById(id);
  if (!participant) throw new Error("Participant not found");
  return participant;
};

const checkEmailAvailable = async (email: string, excludedId?: number) => {
  const existing = await participantRepository.findByEmail(email);
  if (existing && existing.id !== excludedId) {
    throw new Error("Cet email est déjà utilisé par un autre participant");
  }
};

const checkTicketAvailable = async (ticketId: number) => {
  const ticket = await ticketRepository.findById(ticketId);
  if (!ticket) throw new Error("Ticket not found");
  if (!ticket.available) throw new Error("Ce billet n'est pas disponible");
};

const create = async (data: CreateParticipantDTO) => {
  await checkEmailAvailable(data.email);
  await checkTicketAvailable(data.ticketId);
  return participantRepository.create(data);
};

const update = async (id: number, data: Partial<CreateParticipantDTO>) => {
  const existing = await getById(id);

  if (data.email && data.email !== existing.email) {
    await checkEmailAvailable(data.email, id);
  }
  if (data.ticketId && data.ticketId !== existing.ticketId) {
    await checkTicketAvailable(data.ticketId);
  }

  return participantRepository.update(id, data);
};

const remove = async (id: number) => {
  await getById(id);
  return participantRepository.remove(id);
};

export default { getAll, getById, create, update, remove };