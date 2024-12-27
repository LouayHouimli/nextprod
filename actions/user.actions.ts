"use server";

import { usersTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { revalidatePath } from "next/cache";
interface User {
  name: string;
  age: number;
  email: string;
}
export const createUser = async (formData: FormData) => {
  const newUser = await db.insert(usersTable).values({
    name: formData.get("name") as string,
    age: parseInt(formData.get("age") as string),
    email: formData.get("email") as string,
  });
  revalidatePath("/");
};
