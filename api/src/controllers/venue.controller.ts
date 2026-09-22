import venueService from "../services/venue.apiservice.ts";
import type { VenueDTO, CreateVenueDTO } from "../dto/venue.dto.ts";

const getAll = async (req, res, next) => {
  try {
    const venues: VenueDTO[] = await venueService.getAll();
    res.status(200).json(venues);
  } catch (error) { next(error); }
};

const getById = async (req, res, next) => {
  try {
    const venue: VenueDTO = await venueService.getById(Number(req.params.id));
    res.status(200).json(venue);
  } catch (error) { next(error); }
};

const create = async (req, res, next) => {
  try {
    const data: CreateVenueDTO = req.body;
    const venue: VenueDTO = await venueService.create(data);
    res.status(201).json(venue);
  } catch (error) { next(error); }
};

const update = async (req, res, next) => {
  try {
    const data: Partial<CreateVenueDTO> = req.body;
    const venue: VenueDTO = await venueService.update(Number(req.params.id), data);
    res.status(200).json(venue);
  } catch (error) { next(error); }
};

const remove = async (req, res, next) => {
  try {
    await venueService.remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) { next(error); }
};

export default { getAll, getById, create, update, remove };