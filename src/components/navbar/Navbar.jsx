import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
 /*  console.log(session); */

  return (
    <div className="h-100 flex items-center justify-between my-4">
      <Link href="/" className="text-3xl font-bold">
        soFton
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
