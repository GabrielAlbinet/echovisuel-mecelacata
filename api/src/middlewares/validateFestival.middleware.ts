import festivalSchema, { festivalUpdateSchema } from "../validators/festival.validator.ts";

const validateFestival = (req, res, next) => {
  const { error } = festivalSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export const validateFestivalUpdate = (req, res, next) => {
  const { error } = festivalUpdateSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export default validateFestival;