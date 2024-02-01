"use client";

import { addUser } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className=" flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Add User</h1>
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="text"
        placeholder="email"
        name="email"
      />
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="img"
        placeholder="Image"
        name="img"
      />
      <select className="p-5 bg-[#2d2b42] text-[#e5e5e5]" name="isAdmin">
        <option value="false">is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="p-5 bg-[#3673fd] text-[#e5e5e5] font-bold">Add</button>
      {state && <p className="text-red-500 text-sm">{state?.error}</p>}
    </form>
  );
};

export default AdminUserForm;
