import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from "./BackButton"

export default async function Post({ params }: { params: Promise<{ post_id: string }> }) {
    const { post_id } = await params
    const post = await fetch(`http://localhost:3000/api/posts`, { cache: "no-store" }).then((res) => res.json()).then((data) => data.posts.find((post: any) => post.post_id === parseInt(post_id)))
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
                </Card>
                : <h1 className=" font-bold py-12 text-center">Post not found</h1>}

        </main>
    )
}