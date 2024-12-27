"use server";

import { usersTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
interface User {
  name: string;
  age: number;
  email: string;
}

export const protectedRoute = async () => {
  const session = null;
  if (!session) {
    redirect("/");
  }
  return { success: "Authorized" };
};

export const createUser = async (formData: FormData) => {
  const newUser = await db.insert(usersTable).values({
    name: formData.get("name") as string,
    age: parseInt(formData.get("age") as string),
    email: formData.get("email") as string,
  });
  revalidatePath("/");
};

export const deleteUser = async (id: number) => {
  await db.delete(usersTable).where(eq(usersTable.id, id));
  revalidatePath("/");
};
