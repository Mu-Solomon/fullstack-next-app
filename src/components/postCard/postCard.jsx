import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="container flex flex-col gap-5 mb-5">
      <div className="top flex">
        <div className="imgContainer w-11/12 h-[400px] relative">
          <Image
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm transform rotate-[270deg] my-auto">
          25.01.2024
        </span>
      </div>
      <div className="bottom">
        <h1 className="text-3xl font-bold mb-3 w-10/12">Tittle</h1>
        <p className="w-10/12 text-gray-600 mb-3 font-regular">
          Lorem ipsum, dolor veniam ipsum tempora amet consectetur velit aperiam
          delectus iste ipsam quasi quo, fugit minima at recusandae repellat
          reprehenderit magni reiciendis iure numquam odio ex quibusdam. Numquam
          officia iure nulla quae saepe quo nostrum repudiandae commodi iste
          Laboriosam rerum vitae itaque!
        </p>
        <Link href="/blog/post" className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;