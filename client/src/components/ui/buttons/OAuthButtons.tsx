import { GoogleIcon, GithubIcon } from "../icon";

export default function OAuthButtons() {
  const handleOAuthRedirect = (provider: "google" | "github") => {
    if (provider === "google") {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

      if (!clientId) {
        console.error(
          "❌ 錯誤：找不到 NEXT_PUBLIC_GOOGLE_CLIENT_ID 環境變數，請檢查 .env.local 是否有正確配置並重啟專案。",
        );
        alert("系統配置錯誤：找不到 Google Client ID");
        return;
      }

      const redirectUri = encodeURIComponent(
        process.env.NEXT_PUBLIC_REDIRECT_URL ||
          "http://localhost:3000/oauth/callback",
      );
      const scope = encodeURIComponent("profile email");

      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=google`;
    } else if (provider === "github") {
      const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
      const redirectUri = encodeURIComponent(
        process.env.NEXT_PUBLIC_REDIRECT_URL ||
          "http://localhost:3000/oauth/callback",
      );
      const scope = encodeURIComponent("user:email");

      // 導向 GitHub 官方認證大門
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=github`;
    }
  };
  return (
    <div className="space-y-5 mt-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex-1 bg-hurricane h-px"></div>
        <span className="text-hurricane text-sm px-2">
          Sign in with another method
        </span>
        <div className="flex-1 bg-hurricane h-px"></div>
      </div>

      <button
        onClick={() => handleOAuthRedirect("google")}
        className="w-full flex justify-center gap-3 px-4 py-3 rounded-lg border border-hurricane bg-king-kong hover:bg-wood-bark transition-colors duration-200 text-hurricane cursor-pointer"
      >
        <GoogleIcon />
        <span>Login with Google</span>
      </button>
      <button
        onClick={() => handleOAuthRedirect("github")}
        className="w-full flex justify-center gap-3 px-4 py-3 rounded-lg border border-hurricane bg-king-kong hover:bg-wood-bark transition-colors duration-200 text-hurricane cursor-pointer"
      >
        <GithubIcon />
        <span>Login with GitHub</span>
      </button>
    </div>
  );
}
