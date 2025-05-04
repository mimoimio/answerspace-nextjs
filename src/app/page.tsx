import Posts from "@/components/Posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/Hero";
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
      <Hero />
      <hr />
      <div className="flex justify-center py-8">
        <Link href="/post/new"><Button className="cursor-pointer" >New Post</Button></Link>
      </div>
      <Posts />
    </main>
  );
}
