import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="contanier flex flex-col md:flex-row gap-0 md:gap-10 items-center justify-center">
      <div className="imageContainer relative w-80 md:w-2/4 xl:w-1/2 h-[500px]">
        <Image src="/contact.png" fill className="object-contain" />
      </div>
      <div className="formContainer flex-1">
        <form action="" className="flex flex-col gap-5">
          <input
            className="p-3 rounded-sm border-none bg-[#2d2b42] text-[#e5e5e5] outline-none"
            type="text"
            placeholder="Name and Surname"
            id=""
          />
          <input
            className="p-3 rounded-sm border-none bg-[#2d2b42] text-[#e5e5e5] outline-none"
            type="text"
            placeholder="Email Address"
            id=""
          />
          <input
            className="p-3 rounded-sm border-none bg-[#2d2b42] text-[#e5e5e5] outline-none"
            type="text"
            placeholder="Phone Number"
            id=""
          />
          <textarea
            className="p-3 rounded-sm border-none bg-[#2d2b42] text-[#e5e5e5] outline-none"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="p-5 bg-[#3673fd] text-[#e5e5e5] font-bold rounded-sm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
