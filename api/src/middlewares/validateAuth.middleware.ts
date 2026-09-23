import { loginSchema, registerSchema } from "../validators/auth.validator.ts";

export const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};

export const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: "Données invalides", details: error.message });
  next();
};