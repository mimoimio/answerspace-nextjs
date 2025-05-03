import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import PostActionsFooter from "./ui/PostActionsFooter";

export interface Post {
    post_id: number;
    title: string;
    content: string;
    user: string;
}

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: "no-store" })
    const posts = await res.json().then((data) => data.posts)
    return posts
}

export default async function Posts() {
    const posts: Post[] = await getPosts()
    return (
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
            {
                posts.map((post) => (
                    <Card key={post.post_id} className="h-fit hover:shadow-lg transition-shadow duration-500">
                        <Link href={`/post/${post.post_id}`} className="flex flex-col gap-4">
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>by {post.user}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{post.content}</p>
                                <div className="flex justify-end">
                                </div>
                            </CardContent>
                        </Link>
                        <PostActionsFooter />
                    </Card>
                ))
            }
        </div>
    )
}