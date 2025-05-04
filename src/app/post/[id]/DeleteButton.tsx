'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

import {
    DialogStack,
    DialogStackBody,
    DialogStackContent,
    DialogStackDescription,
    DialogStackFooter,
    DialogStackHeader,
    DialogStackNext,
    DialogStackOverlay,
    DialogStackPrevious,
    DialogStackTitle,
} from '@/components/ui/shadcn-io/dialog-stack';
// Define the props interface
interface DeleteButtonProps {
    id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const [open, setOpen] = useState(false);

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

            <Button variant="destructive" onClick={() => setOpen(!open)}>Delete<TrashIcon /></Button>

            <DialogStack open={open} onOpenChange={setOpen}>
                <DialogStackOverlay />
                <DialogStackBody>
                    <DialogStackContent>
                        <DialogStackHeader>
                            <DialogStackTitle>Are you absolutely sure?</DialogStackTitle>
                            <DialogStackDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogStackDescription>
                        </DialogStackHeader>
                        <DialogStackFooter>
                            <DialogStackNext asChild>
                                <Button variant="destructive" className="w-full">
                                    Delete
                                </Button>
                            </DialogStackNext>
                        </DialogStackFooter>
                    </DialogStackContent>

                    <DialogStackContent>
                        <DialogStackHeader>
                            <DialogStackTitle>Are you really absolutely 100% sure?</DialogStackTitle>
                            {/* <DialogStackDescription>
                                With a fancy description
                            </DialogStackDescription> */}
                        </DialogStackHeader>
                        <DialogStackFooter className="flex flex-col gap-2">
                            <DialogStackPrevious asChild>
                                <Button variant="outline">Go Back</Button>
                            </DialogStackPrevious>
                            <DialogStackNext asChild>
                                <Button variant="destructive" className="w-full">
                                    Delete
                                    <TrashIcon className="ml-2 h-4 w-4" />

                                </Button>
                            </DialogStackNext>
                        </DialogStackFooter>
                    </DialogStackContent>

                    <DialogStackContent>
                        <DialogStackHeader>
                            <DialogStackTitle>Ar-</DialogStackTitle>
                            {/* <DialogStackDescription>

                            </DialogStackDescription> */}

                            <div className="max-w-[450px]">
                                <AspectRatio ratio={1 / 1}>
                                    <Image src={"/image/areyousure.gif"} alt="Image" className="rounded-md object-cover" width={450} height={450} />
                                </AspectRatio>
                            </div>
                        </DialogStackHeader>
                        <DialogStackFooter className="justify-between">
                            {/* <Button variant="outline">Previous</Button> */}
                            <Button variant="destructive" className="w-full" onClick={() => {
                                handleDelete()
                                setOpen(false)
                            }}>
                                <TrashIcon className="mr-2 h-4 w-4" />
                                Pretty Sure
                            </Button>
                        </DialogStackFooter>
                    </DialogStackContent>

                </DialogStackBody>
            </DialogStack>
            {/* <Dialog>
                <DialogTrigger>
                    <Button variant={"destructive"}>
                        <TrashIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                        <Separator className="my-4" />
                        <Button variant="destructive" onClick={handleDelete}>
                            <TrashIcon className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    </DialogHeader>
                </DialogContent>
            </Dialog> */}

        </>

    );
}
