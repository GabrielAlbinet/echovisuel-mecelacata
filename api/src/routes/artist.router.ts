import express from "express";
import artistController from "../controllers/artist.controller.ts";
import artistMiddleware from "../middlewares/artist.middleware.ts";

const artistRouter = express.Router();

artistRouter.get("/artists", artistController.getAll);
artistRouter.get("/artists/:id", artistController.getById);
artistRouter.post("/artists", artistController.create);
artistRouter.patch("/artists/:id", artistMiddleware.checkExists, artistController.update);
artistRouter.delete("/artists/:id", artistMiddleware.checkExists, artistController.remove);

export default artistRouter;