import express from "express";
import ticketController from "../controllers/ticket.controller.ts";
import ticketMiddleware from "../middlewares/ticket.middleware.ts";
import validateTicket from "../middlewares/validateTicket.middleware.ts";
import isAuth from "../middlewares/isAuth.middleware.ts";

const ticketRouter = express.Router();

ticketRouter.get("/tickets", ticketController.getAll);
ticketRouter.get("/tickets/:id", ticketController.getById);
ticketRouter.post("/tickets", isAuth, validateTicket, ticketController.create);
ticketRouter.patch("/tickets/:id", isAuth, ticketMiddleware.checkExists, ticketController.update);
ticketRouter.delete("/tickets/:id", isAuth, ticketMiddleware.checkExists, ticketController.remove);

export default ticketRouter;