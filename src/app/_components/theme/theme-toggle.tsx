"use client"

import MoonLogo from '@/../public/moon.svg';
import SunLogo from '@/../public/sun.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeToggleButton () {
    const { theme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-indigo-700 p-2 rounded-full cursor-pointer">
                    {theme === "dark" ? <Image src={MoonLogo} alt="moon icon" /> : <Image src={SunLogo} alt="light theme icon" />}

                </button>
    )
}