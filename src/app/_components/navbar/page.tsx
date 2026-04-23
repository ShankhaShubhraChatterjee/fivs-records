import Image from "next/image"
import Link from "next/link"

import TranslationLogo from '@/../public/translation.svg';
import MenuLogo from '@/../public/menu.svg';
import ThemeToggleButton from "@/components/theme-provider";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Header from "../header/page";

export default function Navbar() {


    const navigationLinks = [
        { id: 1, name: "Login", url: "/user/login", hide: false },
        { id: 2, name: "Log Out", url: "/user/logout", hide: false },
        { id: 3, name: "Contact Us", url: "/contact", hide: false }
    ]
    return (
        <div className="fixed top-1 w-[calc(100%-10px)] flex justify-between items-center px-2 py-2 shadow-lg backdrop-blur-lg mt-2 bg-white/1 rounded-4xl mx-2">
            <Header />
            <section className="flex justify-center items-center">

                <nav className="mr-2 hidden sm:block">
                    {navigationLinks.map((link) => {
                        if (!link.hide) {
                            return <Link key={link.id} href={link.url} className="dark:text-white font-bold px-5 py-2.5 mr-1.5 rounded-4xl bg-gray-200 hover:text-gray-100 hover:bg-indigo-700 transition dark:bg-gray-200/10 dark:hover:bg-indigo-700">{link.name}</Link>
                        }

                    })}
                </nav>
                <button className="bg-indigo-700 p-2 rounded-full cursor-pointer mr-2">
                    <Image loading="eager" src={TranslationLogo} alt="Translate Website Icon" />
                </button>
                <ThemeToggleButton />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="sm:hidden block">
                        <Button className="rounded-full bg-indigo-700 ml-2 size-10 hover:bg-indigo-800" variant="default">
                            <Image loading="eager" width={24} height={24} src={MenuLogo} alt="Menu Icon" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="relative right-2 top-4">
                        <DropdownMenuItem asChild>
                            <Link href="/user/login">Login</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/contact">Contact</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>Log Out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </section>
        </div>
    )
}