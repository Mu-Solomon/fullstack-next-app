import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="container flex flex-col gap-5 mb-5">
      <div className="top flex">
        <div className="imgContainer w-11/12 h-[400px] relative">
          <Image src={post.img} fill className="object-cover" />
        </div>
        <span className="text-sm transform rotate-[270deg] my-auto">
          {post.createdAt.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="bottom">
        <h1 className="text-3xl font-bold mb-3 w-10/12">{post.title}</h1>
        <p className="w-10/12 text-gray-600 mb-3 font-regular">{post.body}</p>
        <Link href={`/blog/${post.slug}`} className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
