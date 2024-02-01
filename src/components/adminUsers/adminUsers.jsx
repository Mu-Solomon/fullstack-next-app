import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import React from "react";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Users</h1>
      {users.map((user) => (
        <div
          className="user my-5 mx-0 flex items-center justify-between gap-5"
          key={user.id}
        >
          <div className="detail flex items-center gap-5">
            <Image
              src={user.img || "/noAvatar.png"}
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="px-1 my-2 mx-3 bg-[#dc143c98] text-[#e5e5e5] rounded-sm">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
