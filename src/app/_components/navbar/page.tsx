import Image from "next/image"
import Link from "next/link"

import UmbrellaLogo from '@/../public/umbrella.svg';
import ThemeLogo from '@/../public/theme.svg';

export default function Navbar() {
    const navigationLinks = [
        { id: 1, name: "Login", url: "/user/login" },
        { id: 2, name: "Contact Us", url: "/contact" }
    ]
    return (
        <div className="flex justify-between items-center px-2 py-2 backdrop-blur-md mt-2 bg-zinc-900 rounded-4xl mx-2">
            <Link href="/" className="flex justify-center items-center">
                <span className="mr-2 bg-indigo-700 rounded-full p-1">
                    <Image src={UmbrellaLogo} alt="Umbrella Logo" />
                </span>

                <h1 className="text-xl font-bold text-white">Fivs Records</h1>
            </Link>


            <section className="flex justify-center items-center">

                <nav className="mr-2">
                    {navigationLinks.map((link) => {
                        return <Link key={link.id} href={link.url} className="text-white font-bold px-5 py-2.5 mr-1.5 rounded-4xl bg-gray-700/50">{link.name}</Link>
                    })}
                </nav>
                <button className="bg-indigo-700 p-2 rounded-full cursor-pointer">
                    <Image src={ThemeLogo} alt="Dark Mode Icon" />
                </button>
            </section>
        </div>
    )
}