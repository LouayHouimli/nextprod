import { protectedRoute } from "@/actions/user.actions";

export default async function ProtectedPage() {
  const { success } = await protectedRoute();
  return <div>{success}</div>;
}
