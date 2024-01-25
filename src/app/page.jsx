import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="allContainer flex flex-col items-center justify-center md:flex-row gap-24 text-white text-center md:text-left">
      <div className="textContainer items-center md:items-start flex-1 flex flex-col gap-12">
        <h1 className="md:text-7xl text-5xl font-bold">
          Creative Thoughts Agency.
        </h1>
        <p className="text-md ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          cupiditate sunt eaque commodi ipsa id.
        </p>
        <div className="buttons flex gap-5 ">
          <button className="min-w-120 cursor-pointer bg-[#3673fd]  p-3  md:p-5 rounded-sm">
            Learn more
          </button>
          <button className="min-w-120 cursor-pointer p-3  md:p-5 bg-slate-300 text-[#0d0c22] rounded-sm">
            Contact
          </button>
        </div>
        <div className="brands w-80 md:w-96 h-10 relative filter grayscale">
          <Image src="/brands.png" alt="" fill className="brandImg" />
        </div>
      </div>
      <div className="imageContainer relative  w-80 md:min-w-80 md:w-2/4 xl:w-1/2 h-[400px] md:h-[500px] flex items-center">
        <Image src="/hero.gif" alt="" fill className="heroGif" />
      </div>
    </div>
  );
};

export default HomePage;
