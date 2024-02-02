"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item, close, key }) => {
  const pathName = usePathname();

  return (
    <Link
      key={key}
      onClick={close}
      href={item.path}
      className={`w-100 px-6 py-2 font-bold text-center rounded-full ${
        pathName === item.path && "text-[#0d0c22] bg-white"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
