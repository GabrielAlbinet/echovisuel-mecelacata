import artistService from "../services/artist.apiservice.ts";
import type { ArtistDTO } from "../dto/artist.dto.ts";

const getAll = async (req, res, next) => {
  console.log(">>> getAll appelé");
  try {
    const artists: ArtistDTO[] = await artistService.getAll();
    res.status(200).json(artists);
  } catch (error) {
    next(error);
  }
};

export default { getAll };