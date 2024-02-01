import { deletePost } from "@/lib/actions";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Posts</h1>
      {posts.map((post) => (
        <div
          className="post my-5 mx-0 flex items-center justify-between gap-5"
          key={post.id}
        >
          <div className="detail flex items-center gap-5">
            <Image
              className="object-cover rounded-full"
              src={post.img || "/noAvatar.png"}
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="px-1 my-2 mx-3 bg-[#dc143c98] text-[#e5e5e5] rounded-sm">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
