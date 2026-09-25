import authService from "../services/auth.apiservice.ts";
import { AUTH_COOKIE_NAME, authCookieBaseOptions, authCookieOptions } from "../config/jwt.ts";
import type { CredentialsDTO } from "../dto/auth.dto.ts";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Données invalides";

const register = async (req, res) => {
  try {
    const data: CredentialsDTO = req.body;
    const { token, user } = await authService.register(data);
    res.cookie(AUTH_COOKIE_NAME, token, authCookieOptions);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const login = async (req, res) => {
  try {
    const data: CredentialsDTO = req.body;
    const { token, user } = await authService.login(data);
    res.cookie(AUTH_COOKIE_NAME, token, authCookieOptions);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error && error.message === "Identifiants invalides") {
      return res.status(401).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

const logout = (req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME, authCookieBaseOptions);
  res.status(204).send();
};

export default { register, login, logout };