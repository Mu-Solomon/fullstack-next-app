"use server";

import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

//HANDLING POSTS
export const addPost = async (prevState, formData) => {
  const { title, description, slug, userId, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
      img,
    });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("Saved to DB");
  } catch (error) {
    console.log("Failed to save to DB", error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.log("Failed to delete from DB", error);
  }
};

//HANDLING USERS

export const addUser = async (prevState, formData) => {
  const { username, password, email, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      password,
      email,
      img,
    });
    await newUser.save();
    revalidatePath("/admin");
    console.log("Saved to DB");
  } catch (error) {
    console.log("Failed to save to DB", error);
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/admin");
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
