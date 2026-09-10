import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import ErrorStatus from "./ErrorStatus";
import SuccessStatus from "./SuccessStatus";
import LoadingStatus from "./LoadingStatus";

function OAuthCallbackPageContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md p-8 bg-card border border-border rounded-xl shadow-md text-center space-y-6">
        {status === "loading" && <LoadingStatus />}

        {status === "success" && <SuccessStatus />}

        {status === "error" && <ErrorStatus errorMsg={errorMsg} />}
      </div>
    </div>
  );
}

export default function OAuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="p-6 text-center text-sm text-muted-foreground">
          載入設定中...
        </div>
      }
    >
      <OAuthCallbackPageContent />
    </Suspense>
  );
}
