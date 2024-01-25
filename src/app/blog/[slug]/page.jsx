import React from "react";
import Image from "next/image";

const BlogPage = () => {
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
        <h1 className="title text-6xl font-bold">Title</h1>
        <div className="detail flex gap-5">
          <Image
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="avatar object-cover rounded-[50%] h-[50px]"
            width={50}
            height={100}
          />
          <div className="detailText flex flex-col gap-3">
            <span className="detailTitle text-gray-500 font-bold">Author</span>
            <span className="detailValue font-[500]">Terry Jefferson</span>
          </div>
          <div className="detailText flex flex-col gap-3">
            <span className="detailTitle text-gray-500 font-bold">
              Published
            </span>
            <span className="detailValue font-[500]">25.01.2024</span>
          </div>
        </div>
        <div className="content text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque iste
          natus quaerat, quisquam repellat dolor minima vel magni magnam? Harum
          iste libero dolorum placeat ut repudiandae magni unde laboriosam qui!
          Placeat repellat corrupti minima perspiciatis impedit consequatur at
          consectetur molestias, deleniti esse alias beatae commodi amet aliquam
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
