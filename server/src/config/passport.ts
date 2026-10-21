import passport from "passport";
import {
  Strategy as GoogleStrategy,
  Profile as GoogleProfile,
} from "passport-google-oauth20";
import {
  Strategy as GitHubStrategy,
  Profile as GitHubProfile,
} from "passport-github2";
import * as authModel from "../models/auth.model";

// GOOGLE
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile: GoogleProfile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const name = profile.displayName || "Google User";

        if (!email) {
          return done(new Error("無法取得 Google 帳號的 Email"), undefined);
        }

        let user = await authModel.findUserByEmail(email);

        if (!user) {
          user = await authModel.createUser({
            email,
            name,
            // 這裡可以根據你的 user model 決定是否記錄 provider
          });
        }
        return done(null, {
          userId: user.id, // 確保是資料庫的主鍵
          role: user.role,
        });
      } catch (error) {
        return done(error as Error, undefined);
      }
    },
  ),
);

//GITHUB
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: process.env.GITHUB_CALLBACK_URL!,
      scope: ["user:email"], // 要求取得使用者的 Email 權限
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: GitHubProfile,
      done: any,
    ) => {
      try {
        let email = profile.emails?.[0]?.value;
        const name = profile.displayName || profile.username || "GitHub User";

        if (!email) {
          return done(new Error("GITHUB_EMAIL_NOT_FOUND"), undefined);
        }

        let user = await authModel.findUserByEmail(email);

        if (!user) {
          user = await authModel.createUser({
            email,
            name,
          });
        }
        return done(null, {
          userId: user.id,
          role: user.role,
        });
      } catch (error) {
        return done(error as Error, undefined);
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

export default passport;
