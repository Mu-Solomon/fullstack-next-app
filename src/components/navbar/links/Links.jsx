"use client";
import React, { useState } from "react";
import NavLink from "./navLinks";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session }) => {
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="items-center gap-2 hidden md:flex">
        {links.map((link) => (
          <NavLink item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="bg-white text-[#0d0c22] rounded-sm p-2 cursor-pointer font-bold">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt="Menu"
        className="block md:hidden cursor-pointer"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="flex flex-col absolute bg-[#0d0c22]  z-50 w-4/5 right-0 h-4/5 items-center justify-center gap-2 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </>
  );
};

export default Links;
