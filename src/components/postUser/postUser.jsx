import React from "react";
const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
    if (!res.ok) {
      throw new Error("Something isn't right!");
    }
  
    return res.json();
  };
  
const PostUser = async ({userId}) => {
    const user = await getData(userId);
  return (
    <div className="detailText flex flex-col gap-3">
      <span className="detailTitle text-gray-500 font-bold">Author</span>
      <span className="detailValue font-[500]">{user.username}</span>
    </div>
  );
};

export default PostUser;
