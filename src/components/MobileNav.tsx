'use client'

import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { useState } from "react"

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <>

            <Button variant={"ghost"} onClick={toggle} className="md:hidden"><HamburgerMenuIcon /></Button>
            {isOpen &&
                <div className="flex  absolute w-full top-12 left-0 p-4 md:hidden z-50">
                    <div className="flex flex-col w-full gap-4 p-4 rounded-xl bg-mytheme">
                        <Button onClick={toggle}>Home</Button>
                        <Button onClick={toggle}>Profile</Button>
                        <Button onClick={toggle}>Settings</Button>
                    </div>
                </div>
            }
        </>
    )
}