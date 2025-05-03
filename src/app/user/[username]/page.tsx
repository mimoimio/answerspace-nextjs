import { Card, CardContent } from "@/components/ui/card";
import type { User } from "@/app/api/users/data";

export default async function User({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    // Normalize username for consistent lookups (optional)
    const normalizedUsername = username.toLowerCase();

    // Fetch user data using username as the key
    const user: User = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${normalizedUsername}`, {
        method: "GET",
        cache: "no-store"
    })
        .then(res => {
            if (!res.ok) return null;
            return res.json();
        });

    if (!user) {
        return (
            <main className="container mx-auto">
                <h1 className="text-4xl font-bold py-12 text-center">User {`'${username}'`} not found</h1>
            </main>
        );
    }

    return (
        <main className="container mx-auto">
            <Card className="max-w-2xl mx-auto">
                <CardContent>
                    <h1 className="text-6xl font-bold py-12 text-center">{user.displayName || username}</h1>
                    <p className="text-2xl font-bold py-12 text-center">{user.bio}</p>
                </CardContent>
            </Card>
            {/* User profile content */}
        </main>
    );
}
