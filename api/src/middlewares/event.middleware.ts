import eventService from "../services/event.apiservice.ts";

const checkExists = async (req, res, next) => {
  try {
    await eventService.getById(Number(req.params.id));
    next();
  } catch (error) {
    return res.status(404).json({ message: "Event not found" });
  }
};

export default { checkExists };