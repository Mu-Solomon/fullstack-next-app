import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, handleLogin } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";

const LoginPage = async () => {
  const session = await auth();
  /* console.log(session); */

  return (
    <>
      <div className="flex justify-center">
        <div className="w-screen md:w-2/4 p-10 md:p-12 flex flex-col text-center gap-3 md:gap-8 rounded-md bg-[#2d2b42]">
          {" "}
          <form action={handleGithubLogin}>
            <button className="p-3 md:p-5 w-full rounded-sm bg-[#e5e5e5] text-[#2d2b42]">
              Login with Github
            </button>
          </form>
          <h1 className="md:text-3xl font-extrabold">
            Login with credentials.
          </h1>{" "}
          <LoginForm />
        </div>{" "}
      </div>
    </>
  );
};

export default LoginPage;
