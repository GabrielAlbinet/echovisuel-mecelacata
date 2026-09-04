import artistService from "../services/artist.apiservice.ts";
import type { ArtistDTO } from "../dto/artist.dto.ts";

const getAll = async (req, res, next) => {
  try {
    const artists: ArtistDTO[] = await artistService.getAll();
    res.status(200).json(artists);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  console.log(">>> getById appelé, id =", req.params.id);
  try {
    const artist: ArtistDTO = await artistService.getById(Number(req.params.id));
    res.status(200).json(artist);
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById };