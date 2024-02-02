import RegisterForm from "@/components/registerForm/registerForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-screen md:w-2/4 p-10 md:p-12 flex flex-col text-center gap-3 md:gap-8 rounded-md bg-[#2d2b42]">
        <h1 className="text-3xl font-extrabold">Register here.</h1>{" "}
        <RegisterForm />
      </div>{" "}
    </div>
  );
};

export default RegisterPage;
