import PocketBase from "pocketbase";
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export interface User {
    id: string;
    username: string;
    displayName: string;
    bio: string;
}