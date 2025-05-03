import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="container mx-auto">
            <h1 className="text-9xl font-bold py-12 text-center">AnswerSpace</h1>
            <Skeleton className="h-96 w-full" />
        </main>
    )
}