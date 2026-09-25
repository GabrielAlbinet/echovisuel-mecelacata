import ticketService from "../services/ticket.apiservice.ts";
import type { TicketDTO, CreateTicketDTO } from "../dto/ticket.dto.ts";

const getAll = async (req, res, next) => {
  try {
    const tickets: TicketDTO[] = await ticketService.getAll();
    res.status(200).json(tickets);
  } catch (error) { next(error); }
};

const getById = async (req, res, next) => {
  try {
    const ticket: TicketDTO = await ticketService.getById(Number(req.params.id));
    res.status(200).json(ticket);
  } catch (error) { next(error); }
};

const create = async (req, res, next) => {
  try {
    const data: CreateTicketDTO = req.body;
    const ticket: TicketDTO = await ticketService.create(data);
    res.status(201).json(ticket);
  } catch (error) { next(error); }
};

const update = async (req, res, next) => {
  try {
    const data: Partial<CreateTicketDTO> = req.body;
    const ticket: TicketDTO = await ticketService.update(Number(req.params.id), data);
    res.status(200).json(ticket);
  } catch (error) { next(error); }
};

const remove = async (req, res, next) => {
  try {
    await ticketService.remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) { next(error); }
};

export default { getAll, getById, create, update, remove };