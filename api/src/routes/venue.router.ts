import express from "express";
import venueController from "../controllers/venue.controller.ts";
import venueMiddleware from "../middlewares/venue.middleware.ts";
import validateVenue from "../middlewares/validateVenue.middleware.ts";

const venueRouter = express.Router();

venueRouter.get("/venues", venueController.getAll);
venueRouter.get("/venues/:id", venueController.getById);
venueRouter.post("/venues", validateVenue, venueController.create);
venueRouter.patch("/venues/:id", venueMiddleware.checkExists, venueController.update);
venueRouter.delete("/venues/:id", venueMiddleware.checkExists, venueController.remove);

export default venueRouter;