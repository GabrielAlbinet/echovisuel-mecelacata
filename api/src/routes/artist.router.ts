import express from "express";
import artistController from "../controllers/artist.controller.ts";

const artistRouter = express.Router();

artistRouter.get("/artists", artistController.getAll);
artistRouter.get("/artists/:id", artistController.getById);
artistRouter.post("/artists", artistController.create);

export default artistRouter;