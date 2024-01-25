import React, { Suspense, cache } from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";

const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Something isn't right!");
  }

  return res.json();
};

const BlogPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className=" flex gap-20">
      <div className="hidden md:block  imgContainer flex-1 relative w-[500px] h-screen ">
        <Image
          src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Main image"
          className="object-cover"
          fill
        />
      </div>
      <div className="textContainer flex flex-1 flex-col gap-12 ">
        <h1 className="title text-6xl font-bold">{post.title}</h1>
        <div className="detail flex gap-5">
          <Image
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="avatar object-cover rounded-[50%] h-[50px]"
            width={50}
            height={100}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.id} />
          </Suspense>
          <div className="detailText flex flex-col gap-3">
            <span className="detailTitle text-gray-500 font-bold">
              Published
            </span>
            <span className="detailValue font-[500]">25.01.2024</span>
          </div>
        </div>
        <div className="content text-lg">{post.body}</div>
      </div>
    </div>
  );
};

export default BlogPage;
