import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ChatBubbleIcon, HeartIcon, Share2Icon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

const posts = [
  {
    post_id: 1,
    title: "Why does it sound so good?Why does it sound so good?Why does it sound so good?Why does it sound so good?Why does it sound so good?",
    content: "Music is so good",
    user: "Mimoimio",

  },
  {
    post_id: 2,
    title: "How do I make a website?",
    content: "I don't know how to make a website. Can you help me? ",
    user: "Mimoimio",
  },
  {
    post_id: 3,
    title: "How do you solve this math problems?",
    content: "What's the root of (x^2 + 1)?",
    user: "Mimoimio",
  },

]

async function getPosts() {
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {
          posts.map((post) => (
            <Card key={post.post_id}>
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
    </main>
  );
}
