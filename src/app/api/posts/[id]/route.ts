import { PostRepository } from "@/lib/PostRepository";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await PostRepository.getById(id);
    if (!post) {
        return Response.json({ error: "Post not found😭😭😭😭" }, { status: 404 });
    }
    return Response.json(post);
}
