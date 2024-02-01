"use client";

import { addPost } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className=" flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Add Post</h1>
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="hidden"
        name="userId"
        value={userId}
      />
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="text"
        placeholder="title"
        name="title"
      />
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="text"
        placeholder="slug"
        name="slug"
      />
      <input
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="text"
        placeholder="img"
        name="img"
      />
      <textarea
        className="p-5 bg-[#2d2b42] text-[#e5e5e5]"
        type="text"
        placeholder="Description"
        name="description"
        rows={10}
      />
      <button className="p-5 bg-[#3673fd] text-[#e5e5e5] font-bold">Add</button>
      {state && <p className="text-red-500 text-sm">{state?.error}</p>}
    </form>
  );
};

export default AdminPostForm;
