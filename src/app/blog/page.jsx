import PostCard from "@/components/postCard/postCard";
import { error } from "console";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something isn't right!");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className="flex items-center  flex-wrap gap-10 w-[110%]">
      {posts.map((post) => (
        <div
          className="min-w-[300px] w-full sm:min-w-7 md:w-[45%] xl:w-[30%]"
          key={post.id}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
