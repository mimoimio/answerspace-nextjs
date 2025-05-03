import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from "./BackButton"
import PostActionsFooter from "@/components/ui/PostActionsFooter"
import type { Post } from "@/components/Posts"

export default async function Post({ params }: { params: Promise<{ post_id: string }> }) {
    const { post_id } = await params
    const post: Post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: "no-store" }).then((res) => res.json()).then((data) => data.posts.find((post: any) => post.post_id === parseInt(post_id)))
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return (
        <main className="container mx-auto">
            {post ?
                <Card className="w-2xl mx-auto">
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
                : <h1 className=" font-bold py-12 text-center">Post not found</h1>}
        </main>
    )
}