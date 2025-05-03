import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {

    return (
        <main className="container mx-auto">
            <h1 className="text-center font-bold text-3xl py-6 md:text-9xl md:py-12 ">AnswerSpace</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    "abcdefghi".split("").map((i) => (
                        <Card key={i}>
                            <CardHeader>
                                <CardTitle>
                                    <Skeleton className="h-6 w-1/2" />
                                </CardTitle>
                                <CardDescription>
                                    <Skeleton className="h-4 w-1/3" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardContent>
                            <CardFooter className="flex flex-col w-full items-start">
                                <Separator className="mb-4" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </main>
    );
}
