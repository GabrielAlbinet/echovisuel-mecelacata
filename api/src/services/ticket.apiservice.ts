import ticketRepository from "../repositories/ticket.repository.ts";
import type { CreateTicketDTO } from "../dto/ticket.dto.ts";

const getAll = async () => ticketRepository.findAll();

const getById = async (id: number) => {
  const ticket = await ticketRepository.findById(id);
  if (!ticket) throw new Error("Ticket not found");
  return ticket;
};

const create = async (data: CreateTicketDTO) => ticketRepository.create(data);
const update = async (id: number, data: Partial<CreateTicketDTO>) => ticketRepository.update(id, data);
const remove = async (id: number) => ticketRepository.remove(id);

export default { getAll, getById, create, update, remove };