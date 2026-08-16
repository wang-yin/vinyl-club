import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt.types";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_dev";

// 簽發 JWT Token
export const generateToken = (
  payload: JwtPayload,
  rememberMe?: boolean,
): string => {
  const expiresIn = rememberMe ? "7d" : "1d";
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};
