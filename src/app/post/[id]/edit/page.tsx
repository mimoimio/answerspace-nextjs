'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";


const formSchema = z.object({
    title: z.string().min(10, {
        message: "Title must be at least 10 characters.",
    }),
    content: z.string().min(10, {
        message: "Content must be at least 10 characters.",
    }),
})

export default function NewPost({ params }: { params: Promise<{ id: string }> }) {
    const [post, setPost] = useState({ id: "", title: "", content: "" })
    useEffect(() => {
        params.then((params) => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`, { cache: "no-cache" })
                .then(res => res.json())
                .then(data => setPost(data))
        })
    }, [params])





    const [success, setSuccess] = useState(false)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
        },
    })

    useEffect(() => {
        if (post.title && post.content) {
            form.reset({
                title: post.title,
                content: post.content
            });
        }
    }, [post, form]);

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${post.id}`, { method: "PATCH", body: JSON.stringify(values) })
        const data = await res.then((res) => res.json())
        console.log(data)
        setSuccess(true)
        // clear form
        form.reset({ title: "", content: "" })
    }
    return (
        <main className="container mx-auto">
            {success && <h1 className="text-3xl font-bold py-12 text-center">Post Updated successfully!</h1>}
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Edit Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write your post title here..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Write your post content here..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>
    )
}