import ticketService from "../services/ticket.apiservice.ts";

const checkExists = async (req, res, next) => {
  try {
    await ticketService.getById(Number(req.params.id));
    next();
  } catch (error) {
    return res.status(404).json({ message: "Ticket not found" });
  }
};

export default { checkExists };