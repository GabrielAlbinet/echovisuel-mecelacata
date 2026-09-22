import express from "express";
import ticketController from "../controllers/ticket.controller.ts";
import ticketMiddleware from "../middlewares/ticket.middleware.ts";
import validateTicket from "../middlewares/validateTicket.middleware.ts";

const ticketRouter = express.Router();

ticketRouter.get("/tickets", ticketController.getAll);
ticketRouter.get("/tickets/:id", ticketController.getById);
ticketRouter.post("/tickets", validateTicket, ticketController.create);
ticketRouter.patch("/tickets/:id", ticketMiddleware.checkExists, ticketController.update);
ticketRouter.delete("/tickets/:id", ticketMiddleware.checkExists, ticketController.remove);

export default ticketRouter;