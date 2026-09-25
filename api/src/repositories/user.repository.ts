import { prisma } from "../config/prisma.ts";

const findByEmail = async (email: string) => prisma.user.findUnique({ where: { email } });

const create = async (data: { email: string; password: string }) => prisma.user.create({ data });

export default { findByEmail, create };