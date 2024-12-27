import { createUser } from "@/actions/user.actions";
import Image from "next/image";
import { db } from "@/db/drizzle";
import { usersTable } from "@/db/schema";
import DeleteBtn from "@/components/delete-btn";

export default async function Home() {
  const users = await db.select().from(usersTable);
  return (
    <div>
      <form action={createUser} className="flex flex-col gap-2">
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          required
          type="number"
          name="age"
          placeholder="Age"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Create User
        </button>
      </form>
      <div>
        {users.map((user) => (
          <div key={user.id} className="px-2 py-1 flex items-center">
            {user.name}
            <DeleteBtn id={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
