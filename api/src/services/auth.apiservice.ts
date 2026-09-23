import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository.ts";
import { JWT_EXPIRES_IN, JWT_SECRET, SALT_ROUNDS } from "../config/jwt.ts";
import type { AuthResponseDTO, CredentialsDTO, UserDTO } from "../dto/auth.dto.ts";

const toUserDTO = (user: UserDTO): UserDTO => ({ id: user.id, email: user.email });

const generateToken = (user: UserDTO) =>
  jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

const register = async (data: CredentialsDTO): Promise<AuthResponseDTO> => {
  const existing = await userRepository.findByEmail(data.email);
  if (existing) throw new Error("Cet email est déjà utilisé");

  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
  const user = await userRepository.create({ email: data.email, password: hashedPassword });

  return { token: generateToken(user), user: toUserDTO(user) };
};

const login = async (data: CredentialsDTO): Promise<AuthResponseDTO> => {
  const user = await userRepository.findByEmail(data.email);
  const isPasswordValid = user ? await bcrypt.compare(data.password, user.password) : false;

  if (!user || !isPasswordValid) {
    throw new Error("Identifiants invalides");
  }

  return { token: generateToken(user), user: toUserDTO(user) };
};

export default { register, login };