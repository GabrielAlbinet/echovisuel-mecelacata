import express from "express";
import artistController from "../controllers/artist.controller.ts";
import artistMiddleware from "../middlewares/artist.middleware.ts";
import validateArtist from "../middlewares/validateArtist.middleware.ts";
import isAuth from "../middlewares/isAuth.middleware.ts";

const artistRouter = express.Router();

artistRouter.get("/artists", artistController.getAll);
artistRouter.get("/artists/:id", artistController.getById);
artistRouter.post("/artists", isAuth, validateArtist, artistController.create);
artistRouter.patch("/artists/:id", isAuth, artistMiddleware.checkExists, artistController.update);
artistRouter.delete("/artists/:id", isAuth, artistMiddleware.checkExists, artistController.remove);

export default artistRouter;