import ticketSchema from "../validators/ticket.validator.ts";

const validateTicket = (req, res, next) => {
  const { error } = ticketSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides" });
  next();
};

export default validateTicket;