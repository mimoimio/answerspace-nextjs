import { PostRepository } from "@/lib/PostRepository";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) { // Request object will always be the first argument
    console.log(request);
    const { id } = await params;
    const post = await PostRepository.getById(id);
    if (!post) {
        return Response.json({ error: "Post not found😭😭😭😭" }, { status: 404 });
    }
    return Response.json(post);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const deletedPost = await PostRepository.delete(id);
        return Response.json(deletedPost);
    } catch (error) {
        console.error("Failed to delete post:", error);
        return Response.json({ error: "Failed to delete post" }, { status: 500 });
    }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await request.json() // { title: "New title", content: "New content" }
    try {
        const updatedPost = await PostRepository.update(id, data);
        return Response.json(updatedPost);
    } catch (error) {
        console.error("Failed to update post:", error);
        return Response.json({ error: "Failed to update post" }, { status: 500 });
    }
}
