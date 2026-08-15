import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

interface RegisterInput {
  name: string;
  password: string;
  email: string;
}

export const registerUser = async ({
  email,
  password,
  name,
}: RegisterInput) => {
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  });
  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email: normalizedEmail,
      password: hashedPassword,
      name: name,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};
