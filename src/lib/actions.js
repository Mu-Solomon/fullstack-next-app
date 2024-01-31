"use server";

import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

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
//LOGINS
export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const handleRegister = async (prevState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Password doesn't match" };
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("Saved to DB");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleLogin = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    return { success: true };
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invald username or password!" };
    }
    throw error;
  }
};
