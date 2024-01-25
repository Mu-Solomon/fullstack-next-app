import React from "react";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-100 flex items-center justify-between my-4">
      <Link href="/" className="text-3xl font-bold">
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
