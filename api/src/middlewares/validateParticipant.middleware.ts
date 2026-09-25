import participantSchema, { participantUpdateSchema } from "../validators/participant.validator.ts";

const validateParticipant = (req, res, next) => {
  const { error } = participantSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export const validateParticipantUpdate = (req, res, next) => {
  const { error } = participantUpdateSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export default validateParticipant;