import express from "express";
import eventController from "../controllers/event.controller.ts";
import eventMiddleware from "../middlewares/event.middleware.ts";
import validateEvent, { validateEventUpdate } from "../middlewares/validateEvent.middleware.ts";

const eventRouter = express.Router();

eventRouter.get("/events", eventController.getAll);
eventRouter.get("/events/:id", eventMiddleware.checkExists, eventController.getById);
eventRouter.post("/events", validateEvent, eventController.create);
eventRouter.patch("/events/:id", eventMiddleware.checkExists, validateEventUpdate, eventController.update);
eventRouter.delete("/events/:id", eventMiddleware.checkExists, eventController.remove);

export default eventRouter;