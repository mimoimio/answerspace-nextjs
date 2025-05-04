'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function BackButton() {
    return (
        <div className="flex gap-2 items-center">
            <Button onClick={() => window.history.back()} className="flex items-center gap-2 hover:cursor-pointer" variant={"ghost"} >
                <ArrowLeftIcon />
            </Button>
            <h1 className="text-xl font-bold">Post</h1>
        </div>

    )
}
