import venueSchema from "../validators/venue.validator.ts";

const validateVenue = (req, res, next) => {
  const { error } = venueSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides" });
  next();
};

export default validateVenue;