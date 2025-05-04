import { SiPocketbase } from "react-icons/si";
import Posts from "@/components/Posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RiGithubFill, RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
{/*
  TODO: 
  - vercel postgres               
  - post (singular) page          /
  - create new post page          /
  - user profile page             /
  - api endpoints
  - user auth
    - login
    - register
    - logout
  
  Later:
  - checkout "use server" on functions for easy server actions from client components
  - checkout prisma

  */}
export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center font-bold text-3xl py-6 md:text-9xl md:py-12 ">AnswerSpace</h1>
      <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-4">
        <Card className="max-w-s my-4">
          <CardContent className="flex justify-center items-center gap-4">
            Built with <RiNextjsFill className="text-3xl text-center" /> and <SiPocketbase className="text-3xl text-center" />
          </CardContent>
        </Card>
        <Link href="https://github.com/mimoimio/answerspace-nextjs" target="_blank">
          <Card className="max-w-s my-4">
            <CardContent className="flex justify-center items-center gap-4">by Mimoimio <RiGithubFill className="text-3xl text-center" /></CardContent>
          </Card>
        </Link>
      </div>
      <hr />
      <div className="flex justify-center py-8">
        <Button ><Link href="/post/new">New Post</Link></Button>
      </div>
      <Posts />
    </main>
  );
}
