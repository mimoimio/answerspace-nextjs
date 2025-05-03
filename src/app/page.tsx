import Posts from "@/components/Posts";
import { Button } from "@/components/ui/button";
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
      <div className="flex justify-center py-8">
        <Button ><Link href="/post/new">New Post</Link></Button>
      </div>
      <Posts />
    </main>
  );
}
