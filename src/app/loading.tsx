import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {

    return (
        <main className="container mx-auto">
            <Hero />
            <hr />
            <div className="flex justify-center py-8">
                <Button variant={"secondary"} className="disabled cursor-not-allowed" >New Post</Button>
            </div>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
                {
                    "abcdefghi".split("").map((i) => (
                        <Card key={i} className="h-fit shadow-md shadow-mysecondarytheme hover:shadow-lg transition-shadow duration-500">
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
