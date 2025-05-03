interface Post {
    post_id: number;
    title: string;
    content: string;
    user: string;
}
const posts: Post[] = [
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
    {
        post_id: 4,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },
    {
        post_id: 5,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },
    {
        post_id: 6,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },
    {
        post_id: 7,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },
    {
        post_id: 8,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },
    {
        post_id: 9,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },
    {
        post_id: 10,
        title: "How do you solve this math problems?",
        content: "What's the root of (x^2 + 1)?",
        user: "Mimoimio",
    },


]
export async function GET() {
    return Response.json({ posts });
}
export async function POST() {
    return Response.json({ bruh: "bruh" });
}
