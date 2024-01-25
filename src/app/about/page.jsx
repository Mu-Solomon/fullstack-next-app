import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container items-center flex flex-col md:flex-row md:gap-10 gap-0 md:my-28 text-center md:text-left">
      <div className="textContainer flex flex-1 flex-col gap-10">
        <h2 className="text-[#3673fd] text-xl font-bold">About Agency</h2>
        <h1 className="text-5xl font-bold text-white">
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className="">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission we're worl's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="boxes flex justify-center flex-col text-center md:text-left md:flex-row md:justify-between items-center">
          <div className="box flex flex-col gap-2">
            <h1 className="text-[#3673fd] text-3xl font-bold">10 K+</h1>
            <p className="text-white">Years of experience</p>
          </div>
          <div className="box flex flex-col gap-2">
            <h1 className="text-[#3673fd] text-3xl font-bold">10 K+</h1>
            <p className="text-white">Years of experience</p>
          </div>
          <div className="box flex flex-col gap-2">
            <h1 className="text-[#3673fd] text-3xl font-bold">10 K+</h1>
            <p className="text-white">Years of experience</p>
          </div>
        </div>
      </div>
      <div className="imgContainer relative w-80 md:w-2/4 xl:w-1/2 h-[500px] ">
        <Image src="/about.png" fill className="object-contain" />
      </div>
    </div>
  );
};

export default AboutPage;
