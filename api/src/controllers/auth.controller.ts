import authService from "../services/auth.apiservice.ts";
import type { AuthResponseDTO, CredentialsDTO } from "../dto/auth.dto.ts";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Données invalides";

const register = async (req, res) => {
  try {
    const data: CredentialsDTO = req.body;
    const response: AuthResponseDTO = await authService.register(data);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

const login = async (req, res) => {
  try {
    const data: CredentialsDTO = req.body;
    const response: AuthResponseDTO = await authService.login(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: getErrorMessage(error) });
  }
};

export default { register, login };