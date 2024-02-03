import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";
import { error } from "console";
import React from "react";

export const metadata = {
  title: "Blogs section",
  description: "Next.js Blogs section of the   app",
};

//FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://fullstack-next-app-eta.vercel.app/api/blog");

  if (!res.ok) {
    throw new Error("Something isn't right!");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  /*  const posts = await getPosts(); */
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
