import express from "express";
import festivalController from "../controllers/festival.controller.ts";
import festivalMiddleware from "../middlewares/festival.middleware.ts";
import validateFestival, { validateFestivalUpdate } from "../middlewares/validateFestival.middleware.ts";

const festivalRouter = express.Router();

festivalRouter.get("/festivals", festivalController.getAll);
festivalRouter.get("/festivals/:id", festivalMiddleware.checkExists, festivalController.getById);
festivalRouter.post("/festivals", validateFestival, festivalController.create);
festivalRouter.patch("/festivals/:id", festivalMiddleware.checkExists, validateFestivalUpdate, festivalController.update);
festivalRouter.delete("/festivals/:id", festivalMiddleware.checkExists, festivalController.remove);

export default festivalRouter;