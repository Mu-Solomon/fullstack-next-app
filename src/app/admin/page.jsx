import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
import React, { Suspense } from "react";

export const metadata = {
  title: "Admin section",
  description: "Next.js Admin section of the   app",
};

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className="container mt-12 flex flex-col gap-24 ">
      <div className="row md:flex gap-24">
        <div className="col flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="col flex-1">
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className="row md:flex gap-24">
        <div className="col flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="col flex-1">
          <AdminUserForm userId={session.user.id} />
        </div>
      </div>{" "}
    </div>
  );
};

export default AdminPage;
