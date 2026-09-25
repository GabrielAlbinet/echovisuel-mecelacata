import participantService from "../services/participant.apiservice.ts";

const checkExists = async (req, res, next) => {
  try {
    await participantService.getById(Number(req.params.id));
    next();
  } catch (error) {
    return res.status(404).json({ message: "Participant not found" });
  }
};

export default { checkExists };