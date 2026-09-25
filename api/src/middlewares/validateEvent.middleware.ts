import eventSchema, { eventUpdateSchema } from "../validators/event.validator.ts";

const validateEvent = (req, res, next) => {
  const { error } = eventSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export const validateEventUpdate = (req, res, next) => {
  const { error } = eventUpdateSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export default validateEvent;