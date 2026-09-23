import "dotenv/config";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET manquant dans le fichier .env");
}

export const JWT_SECRET: string = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = "2h";
export const SALT_ROUNDS = 10;