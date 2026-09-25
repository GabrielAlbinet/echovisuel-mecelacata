import express from "express";
import participantController from "../controllers/participant.controller.ts";
import participantMiddleware from "../middlewares/participant.middleware.ts";
import validateParticipant, { validateParticipantUpdate } from "../middlewares/validateParticipant.middleware.ts";
import isAuth from "../middlewares/isAuth.middleware.ts";

const participantRouter = express.Router();

participantRouter.get("/participants", participantController.getAll);
participantRouter.get("/participants/:id", participantMiddleware.checkExists, participantController.getById);
participantRouter.post("/participants", isAuth, validateParticipant, participantController.create);
participantRouter.patch("/participants/:id", isAuth, participantMiddleware.checkExists, validateParticipantUpdate, participantController.update);
participantRouter.delete("/participants/:id", isAuth, participantMiddleware.checkExists, participantController.remove);

export default participantRouter;