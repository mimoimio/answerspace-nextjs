import { PostRepository } from "@/lib/PostRepository";

export async function GET() {
    console.log("GETTING POSTS 😭😭😭😭😭")
    const posts = await PostRepository.listAll()
    return Response.json({ posts });
}
export async function POST(request: Request) {
    console.log("POSTING POSTS 😭😭😭😭😭")
    // Extract data from request body
    const data = await request.json()

    data.user = "A no nee mouse"
    data.id = null
    // console.log(data)
    // return Response.json({ good: "good" });

    // Create post using repository
    try {
        console.log("Creating post...😭😭😭")
        const newPost = await PostRepository.create(data)
        return Response.json(newPost);
    } catch (error) {
        console.error("Failed to create post:", error)
        return Response.json({ error: "Failed to create post" }, { status: 500 });
    }
}
