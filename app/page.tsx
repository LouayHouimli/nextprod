import { createUser } from "@/actions/user.actions";
import Image from "next/image";
import { db } from "@/db/drizzle";
import { usersTable } from "@/db/schema";
import DeleteBtn from "@/components/delete-btn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
export default async function Home() {
  const users = await db.select().from(usersTable);
  console.log("hello from here")
  return (
    <>
      <div className="flex flex-col items-center gap-y-4  justify-center h-screen w-[500px] mx-auto">
        <form action={createUser}>
          <Card>
            <CardHeader>
              <CardTitle>Create new user</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Input placeholder="louay" name="name" type="text" required />
              <Input
                placeholder="louay@gmail.com"
                name="email"
                type="email"
                required
              />
              <Input placeholder="18?" name="age" type="number" required />
              <Button type="submit">Create</Button>
            </CardContent>
          </Card>
        </form>
        {users.map((user) => (
          <div key={user.id} className="flex flex-col">
            <div>{user.name}</div>
            <DeleteBtn id={user.id} />
          </div>
        ))}
      </div>
    </>
  );
}
