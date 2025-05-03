import { Button } from "./button";
import { CardAction } from "./card";
import { ChatBubbleIcon, HeartIcon, Share2Icon } from "@radix-ui/react-icons";
import { Separator } from "./separator";
import { CardFooter } from "./card";


export default function PostActionsFooter() {
    return (
        <CardFooter className="flex flex-col w-full">
            <Separator className="mb-4" />
            <CardAction className="flex gap-4">
                <Button variant="ghost"><HeartIcon /></Button>
                <Button variant="ghost"><ChatBubbleIcon /></Button>
                <Button variant="ghost"><Share2Icon /></Button>
            </CardAction>
        </CardFooter>
    )
}