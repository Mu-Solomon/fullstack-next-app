import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, handleLogin } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";

const LoginPage = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/4 p-12 flex flex-col text-center gap-8 rounded-md bg-[#2d2b42]">
          {" "}
          <form action={handleGithubLogin}>
            <button className="p-5 w-full rounded-sm bg-[#e5e5e5] text-[#2d2b42]">
              Login with Github
            </button>
          </form>
          <h1 className="text-3xl font-extrabold">Login with credentials.</h1>{" "}
          <LoginForm />
        </div>{" "}
      </div>
    </>
  );
};

export default LoginPage;
