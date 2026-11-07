import { Router, Request, Response } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller";
import { isAuthenticated } from "../Middleware/auth.middleware";
import passport from "passport";
import { generateToken } from "../utils/jwt.utils";

const router = Router();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", isAuthenticated, profile);

// oauth
// Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${FRONTEND_URL}/login?error=auth_failed`,
    session: false,
  }),
  (req: Request, res: Response) => {
    const user = req.user as any;
    if (!user) {
      return res.redirect(`${FRONTEND_URL}/login?error=no_user`);
    }

    const userEmail = user.email || (user.emails && user.emails[0]?.value);

    console.log("OAuth 登入回傳的完整 user 物件(Google):", user);

    // 2. 呼叫你的 generateToken 產生 JWT
    // 這裡帶入你的 payload 結構（例如 userId 依據你的資料庫欄位調整）
    const token = generateToken({
      userId: user.userId,
      email: userEmail,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 天（對應你預設的 token 期限）
      path: "/",
      partitioned: true,
    });
    res.redirect(`${FRONTEND_URL}/oauth/callback`);
  },
);

// Github
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${FRONTEND_URL}/login?error=auth_failed`,
    session: false,
  }),
  (req: Request, res: Response) => {
    const user = req.user as any;
    if (!user) {
      return res.redirect(`${FRONTEND_URL}/login?error=no_user`);
    }

    console.log("OAuth 登入回傳的完整 user 物件(Github):", user);

    const token = generateToken({
      userId: user.userId,
      email: user.email,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 天（對應你預設的 token 期限）
      path: "/",
      partitioned: true,
    });
    res.redirect(`${FRONTEND_URL}/oauth/callback`);
  },
);

export default router;
