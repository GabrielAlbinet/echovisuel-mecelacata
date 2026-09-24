import jwt from "jsonwebtoken";
import { AUTH_COOKIE_NAME, JWT_SECRET } from "../config/jwt.ts";

const isAuth = (req, res, next) => {
  const token = req.cookies?.[AUTH_COOKIE_NAME];

  if (!token) {
    return res.status(401).json({ message: "Vous devez être connecté(e) pour cette action" });
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};

export default isAuth;