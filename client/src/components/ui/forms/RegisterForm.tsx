"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "@/components/common/Spinner";
import api from "@/lib/api";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm({
  setView,
}: {
  setView: (view: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      setError("請填寫所有欄位");
      return;
    }
    setLoading(true);
    try {
      const response = await api.post("/auth/register", formData);
      console.log("Response:", response);
      if (response.status >= 200 && response.status < 300) {
        setSuccess(true);
        setView("signin");
        setLoading(false);
      }
    } catch (err: unknown) {
      console.error("真正的錯誤:", err);
      if (typeof err === "object" && err != null && "response" in err) {
        const errResponse = err as {
          response?: { data?: { message?: string } };
        };
        setError(errResponse.response?.data?.message || "註冊失敗，請稍後再試");
      } else {
        setError("註冊失敗，請稍後再試");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="reg-name"
          className="block font-mono text-[0.65rem] tracking-[0.15rem] text-hurricane mb-2 uppercase"
        >
          YOUR NAME
        </label>
        <input
          id="reg-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full py-3.5 px-4 bg-king-kong border border-noir focus:border-vibrant-amber text-milk font-sans text-[0.9375rem] box-border outline-none transition-colors duration-200"
          placeholder="Your name"
        ></input>
      </div>
      <div>
        <label
          htmlFor="reg-email"
          className="block font-mono text-[0.65rem] tracking-[0.15rm] text-hurricane mb-2 uppercase"
        >
          EMAIL ADDRESS
        </label>
        <input
          id="reg-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full py-3.5 px-4 bg-king-kong border border-noir focus:border-vibrant-amber text-milk font-sans text-[0.9375rem] box-border outline-none transition-colors duration-200"
          placeholder="you@example.com"
        ></input>
      </div>
      <div>
        <label
          htmlFor="reg-password"
          className="block font-mono text-[0.65rem] tracking-[0.15rem] text-hurricane mb-2 uppercase"
        >
          password
        </label>
        <div className=" relative">
          <input
            id="reg-password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            className="w-full py-3.5 px-4 bg-king-kong border border-noir focus:border-vibrant-amber text-milk font-sans text-[0.9375rem] box-border outline-none transition-colors duration-200"
            placeholder="At least 6 characters"
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

      <button
        type="submit"
        className={`mt-2 p-4 ${loading ? "bg-wood-bark cursor-not-allowed" : "bg-vibrant-amber cursor-pointer"} text-bg border-none font-sans font-bold text-[0.9375rem] tracking-wider uppercase transition-colors duration-200 flex justify-center items-center gap-2.5 hover:bg-yakitori`}
      >
        {loading ? <Spinner /> : null}
        {loading ? "Please wait…" : "Create Account"}
      </button>
    </form>
  );
}
