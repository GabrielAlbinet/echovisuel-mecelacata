import artistService from "../services/artist.apiservice.ts";
import type { CreateArtistDTO, ArtistDTO } from "../dto/artist.dto.ts";

const getAll = async (req, res, next) => {
  try {
    const artists: ArtistDTO[] = await artistService.getAll();
    res.status(200).json(artists);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const artist: ArtistDTO = await artistService.getById(Number(req.params.id));
    res.status(200).json(artist);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const data: CreateArtistDTO = req.body;
    const artist: ArtistDTO = await artistService.create(data);
    res.status(201).json(artist);
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, create };