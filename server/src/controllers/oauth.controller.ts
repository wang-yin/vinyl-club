import { Request, Response } from "express";
import {
  googleLoginService,
  githubLoginService,
} from "../service/oauth.service";

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res
        .status(400)
        .json({ success: false, message: "缺少 Authorization Code" });
    }

    const { token, user } = await googleLoginService(code);

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        success: true,
        message: "Google 登入成功",
        data: { user },
      });
  } catch (error: any) {
    console.error(
      "Google Auth Error:",
      error?.response?.data || error?.message,
    );
    return res.status(500).json({
      success: false,
      message: "Google 驗證失敗，請稍後再試",
    });
  }
};

export const githubLogin = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res
        .status(400)
        .json({ success: false, message: "缺少 Authorization Code" });
    }

    const { token, user } = await githubLoginService(code);

    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SEVEN_DAYS,
      })
      .status(200)
      .json({
        success: true,
        message: "GitHub 登入成功",
        data: { user },
      });
  } catch (error: any) {
    console.error(
      "GitHub Auth Error:",
      error?.response?.data || error?.message,
    );

    if (error?.message === "GITHUB_EMAIL_NOT_FOUND") {
      return res.status(400).json({
        success: false,
        message: "無法從 GitHub 取得已驗證的電子郵件",
      });
    }

    return res.status(500).json({
      success: false,
      message: "GitHub 驗證失敗，請稍後再試",
    });
  }
};
