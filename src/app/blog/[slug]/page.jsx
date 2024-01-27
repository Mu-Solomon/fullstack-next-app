import React, { Suspense, cache } from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
};

//FETCH DATA WITH AN API
/* const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Something isn't right!");
  }

  return res.json();
}; */

const BlogPage = async ({ params }) => {
  const { slug } = params;
  /*
  const post = await getData(slug); */
  const post = await getPost(slug);
  console.log(post);
  return (
    <div className=" flex gap-20">
      <div className="hidden md:block  imgContainer flex-1 relative w-[500px] h-screen ">
        <Image src={post.img} alt="Main image" className="object-cover" fill />
      </div>
      <div className="textContainer flex flex-1 flex-col gap-12 ">
        <h1 className="title text-6xl font-bold">{post?.title}</h1>
        <div className="detail flex gap-5">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="detailText flex flex-col gap-3">
            <span className="detailTitle text-gray-500 font-bold">
              Published
            </span>
            <span className="detailValue font-[500]">
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className="content text-lg">{post?.description}</div>
      </div>
    </div>
  );
};

export default BlogPage;
