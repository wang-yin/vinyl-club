import { Router, Request, Response } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller";
import { isAuthenticated } from "../Middleware/auth.middleware";
import passport from "passport";

const router = Router();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

router.post("/register", register);
router.post("/login", isAuthenticated, login);
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
    session: true,
  }),
  (req: Request, res: Response) => {
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
    session: true,
  }),
  (req: Request, res: Response) => {
    res.redirect(`${FRONTEND_URL}/oauth/callback`);
  },
);

export default router;
