import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from "./BackButton"
import PostActionsFooter from "@/components/ui/PostActionsFooter"
import type { Post } from "@/components/Posts"

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, { cache: "force-cache", next: { revalidate: 60 } });

        // Check if response is OK
        if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`);
            return (
                <main className="container mx-auto">
                    <h1 className="font-bold py-12 text-center">Post not found</h1>
                </main>
            );
        }

        // Get the response text first to debug
        const text = await response.text();

        // If empty response, handle it
        if (!text) {
            console.error("Empty response from API");
            return (
                <main className="container mx-auto">
                    <h1 className="font-bold py-12 text-center">Error: Empty response from server</h1>
                </main>
            );
        }

        // Try to parse as JSON
        let post;
        try {
            post = JSON.parse(text);
        } catch (e) {
            console.error("Failed to parse JSON:", e, "Response was:", text);
            return (
                <main className="container mx-auto">
                    <h1 className="font-bold py-12 text-center">Error: Invalid response format</h1>
                </main>
            );
        }

        // Wait for the intentional delay
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        return (
            <main className="container mx-auto">
                {post ? (
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <BackButton />
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>by {post.user}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{post.content}</p>
                        </CardContent>
                        <PostActionsFooter />
                    </Card>
                ) : (
                    <h1 className="font-bold py-12 text-center">Post not found</h1>
                )}
            </main>
        );
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return (
            <main className="container mx-auto">
                <h1 className="font-bold py-12 text-center">Error loading post</h1>
            </main>
        );
    }
}
