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

        // 💡 關鍵修正：如果 profile 裡抓不到 email，透過 GitHub API 主動去抓取使用者的 email 列表
        if (!email) {
          try {
            const response = await fetch("https://api.github.com/user/emails", {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "User-Agent": "Vinyl-Club-App", // GitHub API 強制要求帶 User-Agent
              },
            });
            const emails = await response.json();

            // 找出被設為 primary 且 verified 的 email
            const primaryEmailObj = emails.find(
              (item: any) => item.primary && item.verified,
            );
            email = primaryEmailObj ? primaryEmailObj.email : emails[0]?.email;
          } catch (apiError) {
            console.error("透過 GitHub API 抓取 email 失敗:", apiError);
          }
        }

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
