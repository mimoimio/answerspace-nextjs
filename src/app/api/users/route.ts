import { users } from "./data";

export function GET() {
    return Response.json({ users });
}

