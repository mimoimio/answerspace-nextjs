import { getPB } from "./pb";
const pb = await getPB();
// maybe this is ok idk

export interface Post {
    id: string;
    title: string;
    content: string;
    user: string;
}
export const PostRepository = {
    firstPage: async () => {
        const posts = await pb.collection('posts').getList(1, 30);
        return posts;
    },
    listAll: async () => {
        const posts = await pb.collection('posts').getFullList();
        return posts;
    },
    getById: async (id: string) => {
        const post = await pb.collection('posts').getOne(id);
        return post;
    },
    create: async (data: Post) => {
        const post = await pb.collection('posts').create(data);
        return post;
    },
    update: async (id: string, data: Post) => {
        const post = await pb.collection('posts').update(id, data);
        return post;
    },
    delete: async (id: string) => {
        const post = await pb.collection('posts').delete(id);
        return post;
    },

}

// const posts: Post[] = [
//     {
//         id: "1",
//         title: "Why does it sound so good?Why does it sound so good?Why does it sound so good?Why does it sound so good?Why does it sound so good?",
//         content: "Music is so good",
//         user: "Mimoimio",

//     },
//     {
//         id: 2,
//         title: "How do I make a website?",
//         content: "I don't know how to make a website. Can you help me? ",
//         user: "Mimoimio",
//     },
//     {
//         id: 3,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 4,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 5,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 6,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 7,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 8,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 9,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },
//     {
//         id: 10,
//         title: "How do you solve this math problems?",
//         content: "What's the root of (x^2 + 1)?",
//         user: "Mimoimio",
//     },


// ]