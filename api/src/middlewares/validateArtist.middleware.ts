import artistSchema from "../validators/artist.validator.ts";

const validateArtist = (req, res, next) => {
  const { error } = artistSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Ouille ouille ouille mon fenouille les données sont invalides",
    });
  }
  next();
};

export default validateArtist;