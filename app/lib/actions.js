"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const { User, Product } = require("./models");
const { connectToDB } = require("./utils");

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const addProduct = async (formData) => {
  const { title, desc, price, stock } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new product!");
  }
};
