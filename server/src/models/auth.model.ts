import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import { CreateUserInput } from "../types/auth";

// 新增使用者至資料庫
export const createUser = async ({
  email,
  password,
  name,
}: CreateUserInput) => {
  const normalizedEmail = email.trim().toLowerCase();

  return await prisma.user.create({
    data: {
      email: normalizedEmail,
      ...(password && { password }),
      name,
    },
  });
};

// 根據 Email 找尋使用者
export const findUserByEmail = async (email: string) => {
  const normalizedEmail = email.trim().toLowerCase();
  return await prisma.user.findUnique({
    where: { email: normalizedEmail },
  });
};

// 比對密碼
export const verifyPassword = async (
  plainPassword: string,
  hashedPassword: string | null,
): Promise<boolean> => {
  if (!hashedPassword) return false;
  return await bcrypt.compare(plainPassword, hashedPassword);
};
