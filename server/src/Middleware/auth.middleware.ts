import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt.types";

const JWT_SECRET = process.env.JWT_SECRET;

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Passport 會提供 req.isAuthenticated() 並且把資料放在 req.user
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }

  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "未提供認證憑證，請先登入",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      JWT_SECRET as string,
    ) as unknown as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "憑證無效或已過期，請重新登入",
    });
  }
};
