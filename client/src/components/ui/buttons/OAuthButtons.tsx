import { GoogleIcon, GithubIcon } from "../icon";
import api from "@/lib/api";

export default function OAuthButtons() {
  const handleOAuthRedirect = (provider: "google" | "github") => {
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    const targetUrl = new URL(`/api/auth/${provider}`, backendUrl).toString();
    window.location.href = targetUrl;
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
