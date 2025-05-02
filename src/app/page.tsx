import Posts from "@/components/Posts";
{/*
  TODO: 
  - vercel postgres
  - post (singular) page
  - create new post page
  - user profile page
  - api endpoints
  
  Later:
  - checkout "use server" on functions for easy server actions from client components
  - checkout prisma

  */}
export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-9xl font-bold py-12 text-center">AnswerSpace</h1>
      <Posts />
    </main>
  );
}
