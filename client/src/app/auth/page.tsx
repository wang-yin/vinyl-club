"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "@/components/ui/forms/LoginForm";
import RegisterForm from "@/components/ui/forms/RegisterForm";
import OAuthButtons from "@/components/ui/buttons/OAuthButtons";

type Tab = "signin" | "register";

export default function AuthPage() {
  const [view, setView] = useState<Tab>("signin");
  return (
    <div className="grid grid-cols-2 min-h-[calc(100vh-64px)]">
      {/* Left — editorial image */}
      <div className="relative overflow-hidden bg-king-kong">
        <Image
          src="https://images.unsplash.com/photo-1601148071764-8c3f50e9ab20?w=1000&h=1200&fit=crop&auto=format"
          alt="Vinyl record player in warm light"
          className="w-full h-full object-cover brightness-[0.45] sepia-[0.15] absolute inset-0"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-br from-[rgba(12,11,10,0.6)] to-[rgba(201,146,42,0.08)]" />
        <div className="relative z-10 p-16 flex flex-col justify-end h-full">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-vibrant-amber mb-5 uppercase">
            Member Access
          </p>
          <blockquote className="font-serif text-[clamp(1.5rem,2.5vw,2.25rem)] italic font-normal leading-[1.35] tracking-tight text-milk border-l-2 border-vibrant-amber pl-6 m-0">
            &quot;A record collection is a portrait of a person&apos;s interior
            life.&quot;
          </blockquote>
          <p className="font-mono text-[0.65rem] text-hurricane mt-5 pl-6 tracking-widest">
            — GROOVEHAUS
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-5 bg-bg max-w-full md:p-16">
        <div className="max-w-100 w-full">
          <Link
            href="/"
            className="font-fraunces text-[1.125rem] font-semibold tracking-tight text-milk no-underline block mb-12"
          >
            GROOVEHAUS
          </Link>
          <div className="flex border-b border-noir mb-10">
            {(["signin", "register"] as Tab[]).map((t) => (
              <button
                key={t}
                className={`pb-4 mr-8 font-sans text-[0.9375rem] ${view === t ? "font-semibold text-milk border-b-2 border-vibrant-amber" : "font-normal text-hurricane border-b-2 border-transparent"} bg-none -mb-px cursor-pointer tracking-[0.01em] transition-colors duration-200`}
                onClick={() => setView(t)}
              >
                {t === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>
          <h1 className="font-fraunces text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] leading-[1.15] mb-3">
            {view === "signin" ? (
              <>
                Welcome
                <br />
                <em className="italic text-vibrant-amber">back.</em>
              </>
            ) : (
              <>
                Join
                <br />
                <em className="italic text-vibrant-amber">the club.</em>
              </>
            )}
          </h1>
          <p className="font-sans text-[0.875rem] text-hurricane mb-10 leading-[1.6]">
            {view === "signin"
              ? "Sign in to access your cart and order history."
              : "Create a free account to start building your collection."}
          </p>
          {view === "signin" ? (
            <LoginForm />
          ) : (
            <RegisterForm setView={setView} />
          )}
          {view === "signin" ? <OAuthButtons /> : ""}
          <p className="font-sans text-[0.8125rem] text-hurricane mt-8 text-center">
            {view === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              className="bg-none border-none text-vibrant-amber cursor-pointer font-sans text-[0.8125rem] underline p-0"
              onClick={() => setView(view === "signin" ? "register" : "signin")}
            >
              {view === "signin" ? "Create one" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
