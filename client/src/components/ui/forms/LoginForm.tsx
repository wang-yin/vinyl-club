"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "@/components/common/Spinner";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/hooks/useAuthStore";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { checkAuth } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError("請填寫所有欄位");
      return;
    }

    try {
      const response = await api.post("/auth/login", formData);
      if (response.status >= 200 && response.status < 300) {
        if (response.data?.data?.user) {
          useAuthStore.setState({
            isLoggedIn: true,
            user: response.data.data.user,
            isLoading: false,
          });
        } else {
          // 2. 如果沒回傳 user，手動呼叫 checkAuth()
          await useAuthStore.getState().checkAuth();
        }
        router.push("/");
      }
    } catch (err: unknown) {
      if (typeof err === "object" && err != null && "response" in err) {
        const errResponse = err as {
          response?: { data?: { message?: string } };
        };
        setError(errResponse.response?.data?.message || "登入失敗，請稍後再試");
      } else {
        setError("登入失敗，請稍後再試");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="login-email"
          className="block font-mono text-[0.65rem] tracking-[0.15rem] text-hurricane mb-2 uppercase"
        >
          EMAIL ADDRESS
        </label>
        <input
          id="login-email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="w-full py-3.5 px-4 bg-king-kong border border-noir focus:border-vibrant-amber text-milk font-sans text-[0.9375rem] box-border outline-none transition-colors duration-200"
          placeholder="you@example.com"
        ></input>
      </div>
      <div>
        <label
          className="block font-mono text-[0.65rem] tracking-[0.15rem] text-hurricane mb-2 uppercase"
          htmlFor="login-password"
        >
          password
        </label>
        <div className=" relative">
          <input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
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
          <input
            type="checkbox"
            checked={formData.remember}
            onChange={handleChange}
            className="cursor-pointer"
          ></input>
          <span>Remember Me</span>
        </label>

        <button className="cursor-pointer">Forget password</button>
      </div>
      <button
        type="submit"
        className={`mt-2 p-4 ${loading ? "bg-wood-bark cursor-not-allowed" : "bg-vibrant-amber cursor-pointer"} text-bg border-none font-sans font-bold text-[0.9375rem] tracking-wider uppercase transition-colors duration-200 flex justify-center items-center gap-2.5 hover:bg-yakitori`}
      >
        {loading ? <Spinner /> : null}
        {loading ? "Please wait…" : "Sign In"}
      </button>
    </form>
  );
}
