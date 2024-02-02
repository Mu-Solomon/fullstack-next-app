"use client";

import { handleLogin } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/blog");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="flex flex-col text-center gap-8">
      <input
        type="text"
        placeholder="username"
        name="username"
        className="p-5 bg-[#0d0c22] color-[#e5e5e5] rounded-sm"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="p-5 bg-[#0d0c22] color-[#e5e5e5] rounded-sm"
      />

      <button className="p-3 md:p-5 bg-[#3673fd] text-[#e5e5e5] font-bold rounded-md">
        Login
      </button>
      <Link href="/register">No Accout? Register.</Link>
      {state?.error && <p className="text-red-500 text-sm">{state?.error}</p>}
    </form>
  );
};

export default LoginForm;
