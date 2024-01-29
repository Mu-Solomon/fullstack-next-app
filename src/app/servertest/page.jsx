import React from "react";
import { addPost, deletePost } from "@/lib/actions";

const ServerPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        <button>Test</button>
      </form>
      <form action={deletePost} className="my-8">
        <input type="text" name="id" placeholder="ID" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerPage;
