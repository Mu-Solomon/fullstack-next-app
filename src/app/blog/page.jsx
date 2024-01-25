import PostCard from "@/components/postCard/postCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex items-center  flex-wrap gap-10 w-[110%]">
      <div className="min-w-[300px] w-full sm:min-w-7 md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="min-w-[300px] w-full sm:min-w-7  md:w-[45%]  xl:w-[30%]">
        <PostCard />
      </div>
      <div className="min-w-[300px] w-full sm:min-w-7  md:w-[45%]  xl:w-[30%]">
        <PostCard />
      </div>
      <div className="min-w-[300px] w-full sm:min-w-7  md:w-[45%]  xl:w-[30%]">
        <PostCard />
      </div>
      <div className="min-w-[300px] w-full sm:min-w-7  md:w-[45%]  xl:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
