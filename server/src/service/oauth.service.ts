import axios from "axios";
import * as authModel from "../models/auth.model";
import { generateToken } from "../utils/jwt.utils";

export const googleLoginService = async (code: string) => {
  const tokenResponse = await axios.post(
    "https://oauth2.googleapis.com/token",
    {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri:
        process.env.REDIRECT_URL || "http://localhost:3000/oauth/callback",
      grant_type: "authorization_code",
    },
  );

  const { access_token } = tokenResponse.data;

  const userResponse = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    },
  );

  const { email, name } = userResponse.data;

  if (!email) {
    throw new Error("GOOGLE_AUTH_FAILED");
  }

  let user = await authModel.findUserByEmail(email);

  if (!user) {
    user = await authModel.createUser({
      email,
      name,
    });
  }

  const token = generateToken({ userId: user.id }, true);

  return { token, user };
};

export const githubLoginService = async (code: string) => {
  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    },
    { headers: { Accept: "application/json" } },
  );

  const { access_token } = tokenResponse.data;

  if (!access_token) {
    throw new Error("GITHUB_AUTH_FAILED");
  }

  const userResponse = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  let email = userResponse.data.email;
  const name = userResponse.data.name || userResponse.data.login;

  if (!email) {
    const emailsResponse = await axios.get(
      "https://api.github.com/user/emails",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      },
    );

    const primaryEmailObj = emailsResponse.data.find(
      (e: any) => e.primary && e.verified,
    );

    if (primaryEmailObj) {
      email = primaryEmailObj.email;
    }
  }

  if (!email) {
    throw new Error("GITHUB_EMAIL_NOT_FOUND");
  }

  let user = await authModel.findUserByEmail(email);

  if (!user) {
    user = await authModel.createUser({
      email,
      name,
    });
  }

  const token = generateToken({ userId: user.id }, true);

  const { password: _, ...userWithoutPassword } = user;

  return { token, user: userWithoutPassword };
};
