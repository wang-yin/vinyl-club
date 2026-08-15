import type { Request, Response } from "express";
import prisma from "../lib/prisma";
import { registerUser } from "../models/auth.model";

// 註冊
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    if (!name || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "所有欄位（名稱、信箱、密碼）皆為必填",
      });
    }

    const newUser = await registerUser({ email, password, name });
    res.status(201).json({
      success: true,
      message: "註冊成功！",
      data: newUser,
    });
  } catch (error) {
    console.error("Register Error:", error);
    if (error instanceof Error && error.message === "EMAIL_EXISTS") {
      return res
        .status(400)
        .json({ success: false, message: "此 Email 已被註冊" });
    }
    res.status(500).json({ success: false, error: "註冊失敗" });
  }
};
