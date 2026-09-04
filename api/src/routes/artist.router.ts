import express from "express";
import artistController from "../controllers/artist.controller.ts";

const artistRouter = express.Router();

artistRouter.get("/artists", artistController.getAll);

export default artistRouter;