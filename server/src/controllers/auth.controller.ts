import type { Request, Response } from "express";
import { registerService, loginService } from "../service/auth.service";

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

    const newUser = await registerService({
      email,
      password,
      name,
    });

    return res.status(201).json({
      success: true,
      message: "註冊成功！",
      data: { user: newUser },
    });
  } catch (error) {
    console.error("Register Error:", error);

    if (error instanceof Error) {
      if (error.message === "EMAIL_EXISTS") {
        return res.status(400).json({
          success: false,
          message: "此 Email 已被註冊",
        });
      }
    }

    return res.status(500).json({
      success: false,
      message: "系統內部錯誤，註冊失敗",
    });
  }
};

// 登入
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, rememberMe } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "電子郵件與密碼皆為必填" });
    }

    const { token, user } = await loginService({
      email,
      password,
      rememberMe,
    });

    const maxAge = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge,
      })
      .status(200)
      .json({ success: true, data: { user } });
  } catch (error) {
    console.error("Login error:", error);
    if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({
        success: false,
        message: "電子郵件或密碼錯誤",
      });
    }
    return res.status(500).json({
      success: false,
      message: "系統內部錯誤，請稍後再試",
    });
  }
};
