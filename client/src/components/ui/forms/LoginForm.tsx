"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "@/components/common/Spinner";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <form className="flex flex-col gap-5">
      <div>
        <label className="block font-mono text-[0.65rem] tracking-[0.15rm] text-hurricane mb-2 uppercase">
          EMAIL ADDRESS
        </label>
        <input
          className="w-full py-3.5 px-4 bg-king-kong border border-noir focus:border-vibrant-amber text-milk font-sans text-[0.9375rem] box-border outline-none transition-colors duration-200"
          placeholder="you@example.com"
        ></input>
      </div>
      <div>
        <label className="block font-mono text-[0.65rem] tracking-[0.15rem] text-hurricane mb-2 uppercase">
          password
        </label>
        <div className=" relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3.5 px-4 bg-king-kong border border-noir focus:border-vibrant-amber text-milk font-sans text-[0.9375rem] box-border outline-none transition-colors duration-200"
            placeholder="Your password"
          ></input>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="cursor-pointer"></input>
          <span>Remember Me</span>
        </label>

        <button className="cursor-pointer">Forget password</button>
      </div>
      <button
        type="submit"
        className={`mt-2 p-4 ${loading ? "bg-wood-bark cursor-not-allowed" : "bg-vibrant-amber cursor-pointer"} text-bg border-none font-sans font-bold text-[0.
        9375rem] tracking-wider uppercase transition-colors duration-200 flex justify-center items-center gap-2.5 hover:bg-yakitori`}
      >
        {loading ? <Spinner /> : null}
        {loading ? "Please wait…" : "Sign In"}
      </button>
    </form>
  );
}
