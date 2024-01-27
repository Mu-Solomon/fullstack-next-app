import { getUser } from "@/lib/data";
import React from "react";
import Image from "next/image";

//FETCH DATA WITH AN API
/* const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
    if (!res.ok) {
      throw new Error("Something isn't right!");
    }
  
    return res.json();
  }; */

const PostUser = async ({ userId }) => {
  /* const user = await getData(userId); */
  const user = await getUser(userId);
  return (
    <div className="detailText flex items-center gap-5">
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        className="avatar object-cover rounded-[50%] h-[50px]"
        width={50}
        height={100}
      />
      <div className="flex flex-col gap-3">
        <span className="detailTitle text-gray-500 font-bold">Author</span>
        <span className="detailValue font-[500]">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
