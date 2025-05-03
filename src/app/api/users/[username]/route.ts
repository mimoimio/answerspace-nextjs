import { users } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  const normalizedUsername = username.toLowerCase();

  const user = users.find(u => u.username.toLowerCase() === normalizedUsername);

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json(user);
}