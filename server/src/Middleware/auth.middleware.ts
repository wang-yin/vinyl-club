import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt.types";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_dev";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // 從 Cookie 中讀取 token
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "未提供認證憑證，請先登入",
    });
  }

  try {
    // 驗證 JWT
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "憑證無效或已過期，請重新登入",
    });
  }
};
