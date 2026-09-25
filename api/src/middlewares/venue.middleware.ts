import venueService from "../services/venue.apiservice.ts";

const checkExists = async (req, res, next) => {
  try {
    await venueService.getById(Number(req.params.id));
    next();
  } catch (error) {
    return res.status(404).json({ message: "Venue not found" });
  }
};

export default { checkExists };