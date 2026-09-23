import express from "express";
import authController from "../controllers/auth.controller.ts";
import { validateLogin, validateRegister } from "../middlewares/validateAuth.middleware.ts";

const authRouter = express.Router();

authRouter.post("/auth/register", validateRegister, authController.register);
authRouter.post("/auth/login", validateLogin, authController.login);

export default authRouter;