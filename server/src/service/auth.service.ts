import bcrypt from "bcryptjs";
import * as authModel from "../models/auth.model";
import { generateToken } from "../utils/jwt.utils";
import { RegisterInput, LoginInput } from "../types/auth";

export const registerService = async ({
  email,
  password,
  name,
}: RegisterInput) => {
  if (!email || !password || !name) {
    throw new Error("MISSING_FIELDS");
  }

  const existingUser = await authModel.findUserByEmail(email);
  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const SALT_ROUNDS = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = await authModel.createUser({
    email,
    password: hashedPassword,
    name,
  });

  return newUser;
};

export const loginService = async ({
  email,
  password,
  rememberMe,
}: LoginInput) => {
  if (!email || !password) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const user = await authModel.findUserByEmail(email);
  if (!user) throw new Error("INVALID_CREDENTIALS");

  const isMatch = await authModel.verifyPassword(password, user.password);
  if (!isMatch) throw new Error("INVALID_CREDENTIALS");

  const token = generateToken({ userId: user.id, role: user.role }, rememberMe);

  const { password: _, ...userWithoutPassword } = user;

  return { token, user: userWithoutPassword };
};
