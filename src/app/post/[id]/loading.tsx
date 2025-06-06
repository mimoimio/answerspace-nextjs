import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
    return (
        <main className="container mx-auto">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    {/* <p className="text-gray-400 animate-pulse">lol</p> */}
                    <Skeleton className="h-10 w-1/6" />
                    {/* <Skeleton className="h-6 w-1/2" /> */}
                    <Skeleton className="h-6 w-1/6" />
                    <Skeleton className="h-6 w-1/6" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-1/2" />
                </CardContent>
                <CardFooter className="flex flex-col w-full items-start">
                    <Separator className="mb-4" />
                    <Skeleton className="h-6 w-1/4" />
                </CardFooter>
            </Card>
        </main>
    )
}