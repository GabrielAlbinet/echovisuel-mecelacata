import festivalService from "../services/festival.apiservice.ts";

const checkExists = async (req, res, next) => {
  try {
    await festivalService.getById(Number(req.params.id));
    next();
  } catch (error) {
    return res.status(404).json({ message: "Festival not found" });
  }
};

export default { checkExists };