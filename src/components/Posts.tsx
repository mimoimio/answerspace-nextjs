import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from "@/components/ui/card";
import { ChatBubbleIcon, HeartIcon, Share2Icon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

interface Post {
    post_id: number;
    title: string;
    content: string;
    user: string;
}

const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" })
    const posts = await res.json().then((data) => data.posts)
    return posts
}

export default async function Posts() {
    const posts: Post[] = await getPosts()
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                posts.map((post) => (
                    <Card key={post.post_id} className="h-fit">
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>by {post.user}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{post.content}</p>
                            <div className="flex justify-end">
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col w-full">
                            <Separator className="mb-4" />
                            <CardAction className="flex gap-4">
                                <Button variant="ghost"><HeartIcon /></Button>
                                <Button variant="ghost"><ChatBubbleIcon /></Button>
                                <Button variant="ghost"><Share2Icon /></Button>
                            </CardAction>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}