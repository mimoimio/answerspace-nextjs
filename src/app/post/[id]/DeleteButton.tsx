'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
// Define the props interface
interface DeleteButtonProps {
    id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Default behavior: redirect to home
                window.location.href = '/';
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button variant={"destructive"}>
                        <TrashIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are yo-</DialogTitle>
                        <div className="max-w-[450px]">
                            <AspectRatio ratio={1 / 1}>
                                <Image src={"/image/areyousure.gif"} alt="Image" className="rounded-md object-cover" width={450} height={450} />
                            </AspectRatio>
                        </div>
                        <Separator className="my-4" />
                        <DialogDescription>
                            {"This action cannot be undone. This will permanently the post even if it's not yours (maleh aq nak buat authenticaiton)."}
                        </DialogDescription>
                        <Button variant="destructive" onClick={handleDelete}>
                            <TrashIcon className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>

    );
}
