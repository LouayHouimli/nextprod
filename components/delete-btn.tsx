"use client";

import { deleteUser } from "@/actions/user.actions";

export default function DeleteBtn({ id }: { id: number }) {
  return (
    <button className="bg-red-500 text-white rounded-md p-2" onClick={() => deleteUser(id)}>
      Delete
    </button>
  );
}
