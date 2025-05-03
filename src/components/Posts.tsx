import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import PostActionsFooter from "./ui/PostActionsFooter";

export interface Post {
    id: number;
    title: string;
    content: string;
    user: string;
}

const getPosts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    if (response.ok) {
        const posts = await response.json().then((data) => data.posts)
        return posts
    } else {
        // throw new Error("Failed to fetch posts")
        return []
    }
}

export default async function Posts() {
    const posts: Post[] | [] = await getPosts()
    console.log(posts)
    return (
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
            {posts &&
                posts.map((post: Post) => (
                    <Card key={post.id} className="h-fit hover:shadow-lg transition-shadow duration-500">
                        <Link href={`/post/${post.id}`} className="flex flex-col gap-4">
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