import Link from "next/link"
import Image from "next/image"

import UmbrellaLogo from '@/../public/umbrella.svg';

export default function Header() {
    return (
        <Link href="/" className="flex justify-center items-center">
            <span className="mr-2 bg-indigo-700 rounded-full p-1">
                <Image loading="eager" src={UmbrellaLogo} alt="Umbrella Logo" />
            </span>

            <h1 className="text-xl font-bold dark:text-white light:text-black">Fivs Records</h1>
        </Link>
    )
}