"use server";

import { Post } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
      password: "Any",
    });
    await newPost.save();
    revalidatePath("/blog");
    console.log("Saved to DB");
  } catch (error) {
    console.log("Failed to save to DB", error);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log("Failed to delete from DB", error);
  }
};
