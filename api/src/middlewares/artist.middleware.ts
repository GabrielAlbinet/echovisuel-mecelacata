import artistService from "../services/artist.apiservice.ts";

const checkExists = async (req, res, next) => {
  try {
    const artist = await artistService.getById(Number(req.params.id));
    req.artist = artist;
    next();
  } catch (error) {
    return res.status(404).json({
      message: "Aie aie aie tu dérailles espèce de canaille, on a pas trouvé d'artiste...",
    });
  }
};

export default { checkExists };

// Utile uniquement pour Patch et Delete