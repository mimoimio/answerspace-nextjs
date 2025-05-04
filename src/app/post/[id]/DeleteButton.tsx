'use client'

import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

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
        <Button variant="destructive" onClick={handleDelete} className="hover:cursor-pointer">
            <TrashIcon />
        </Button>
    );
}
