import { PostRepository } from "@/lib/PostRepository";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    console.log(request);
    const { id } = params;
    const post = await PostRepository.getById(id);
    if (!post) {
        return Response.json({ error: "Post not found😭😭😭😭" }, { status: 404 });
    }
    return Response.json(post);
}
